#!/usr/bin/env python3
"""안드레99 사업별 매출 자료 만들기 (GitHub 자동 작업이 한 달에 두 번 돌린다)

하는 일
  1) 대상 = S&P 500 + 나스닥 100 (위키백과 표에서 매번 다시 읽음 · 실패하면 지난번 명단을 그대로 씀)
  2) SEC 「재무제표 · 주석 데이터셋」(월간 zip)에서 아직 처리하지 않은 달만 받아
     회사마다 사업별 · 부문별 · 지역별 매출을 뽑고, 소계를 빼고, 합계가 전체 매출과 ±1% 안인지 검증
  3) 검증을 통과한 칸만 종목별 작은 파일(seg/<티커>.json)로 저장 · 최근 3년(연간 3 + 분기 4)만 남김
앱은 사업별 칩을 열 때 그 종목 파일 하나만 받는다(무게 3원칙). 파일이 없으면 「준비중」.

연락처(User-Agent)는 환경 변수 SEC_UA(GitHub 비밀값)에서만 읽는다. 코드 · 결과 파일에 적지 않는다.
"""
import argparse, csv, datetime as dt, html.parser, io, json, os, re, sys, time, urllib.request, zipfile

REV_TAGS = {'RevenueFromContractWithCustomerExcludingAssessedTax', 'Revenues', 'SalesRevenueNet',
            'RevenueFromContractWithCustomerIncludingAssessedTax'}
BASES = ['https://www.sec.gov/files/dera/data/financial-statement-notes-data-sets/',
         'https://www.sec.gov/files/dera/data/financial-statement-and-notes-data-sets/']
WIKI = {'sp500': 'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies',
        'ndx100': 'https://en.wikipedia.org/wiki/Nasdaq-100'}
BOT_UA = 'andre99-data-bot/1.0 (+https://andre99kr.pages.dev)'
KEEP_ANNUAL, KEEP_QUARTER = 3, 4
NOOP = ('ConsolidationItems', 'StatementScenario')
AX = (('ProductOrService', 'p', '사업별'), ('BusinessSegments', 's', '부문별'), ('Geographical', 'g', '지역별'))
csv.field_size_limit(10 ** 9)

# ── 이름 사전 (Q4 = 1: 자주 나오는 낱말 · 나라는 한국어, 회사 고유 이름은 원문을 띄어 쓰기로) ──
WORDS = {
    'product': '제품', 'products': '제품', 'service': '서비스', 'services': '서비스', 'government': '정부', 'commercial': '상업',
    'americas': '미주', 'europe': '유럽', 'japan': '일본', 'china': '중국', 'greater': '', 'asia': '아시아', 'pacific': '태평양',
    'rest': '기타', 'other': '기타', 'others': '기타', 'countries': '국가', 'country': '국가', 'international': '해외', 'domestic': '국내',
    'north': '북', 'south': '남', 'latin': '중남', 'america': '미', 'middle': '중', 'east': '동', 'africa': '아프리카', 'emea': '유럽 · 중동 · 아프리카',
    'apac': '아시아 · 태평양', 'world': '세계', 'united': '', 'states': '미국', 'kingdom': '영국', 'gaming': '게이밍', 'data': '데이터', 'center': '센터',
    'compute': '컴퓨트', 'networking': '네트워킹', 'automotive': '자동차', 'professional': '프로', 'visualization': '시각화', 'graphics': '그래픽',
    'wearables': '웨어러블', 'home': '홈', 'accessories': '액세서리', 'advertising': '광고', 'cloud': '클라우드', 'software': '소프트웨어',
    'hardware': '하드웨어', 'subscription': '구독', 'subscriptions': '구독', 'license': '라이선스', 'licensing': '라이선스', 'retail': '소매',
    'wholesale': '도매', 'healthcare': '헬스케어', 'health': '헬스', 'care': '케어', 'pharmaceutical': '제약', 'pharmaceuticals': '제약',
    'medical': '의료', 'devices': '기기', 'device': '기기', 'energy': '에너지', 'oil': '석유', 'gas': '가스', 'insurance': '보험', 'banking': '은행',
    'consumer': '소비자', 'enterprise': '기업', 'industrial': '산업', 'aerospace': '항공우주', 'defense': '방위', 'semiconductor': '반도체',
    'semiconductors': '반도체', 'memory': '메모리', 'storage': '스토리지', 'mobile': '모바일', 'devices_': '기기', 'platform': '플랫폼',
    'platforms': '플랫폼', 'search': '검색', 'payments': '결제', 'payment': '결제', 'transaction': '거래', 'transactions': '거래', 'fees': '수수료',
    'interest': '이자', 'income': '수익', 'net': '순', 'total': '합계', 'and': '·', 'including': '포함', 'excluding': '제외', 'not': '', 'separately': '',
    'disclosed': '', 'all': '', 'segment': '', 'segments': '', 'operating': '', 'reportable': '', 'member': '', 'revenue': '매출', 'sales': '판매',
    'food': '식품', 'beverage': '음료', 'beverages': '음료', 'restaurant': '레스토랑', 'restaurants': '레스토랑', 'stores': '매장', 'store': '매장',
    'online': '온라인', 'digital': '디지털', 'media': '미디어', 'entertainment': '엔터테인먼트', 'studios': '스튜디오', 'parks': '테마파크',
    'experiences': '체험', 'streaming': '스트리밍', 'wireless': '무선', 'wireline': '유선', 'broadband': '초고속 인터넷', 'telecom': '통신',
    'equipment': '장비', 'systems': '시스템', 'solutions': '솔루션', 'security': '보안', 'infrastructure': '인프라', 'intelligent': '지능형',
    'productivity': '생산성', 'business': '비즈니스', 'processes': '프로세스', 'personal': '개인', 'computing': '컴퓨팅', 'more': '',
    'aircraft': '항공기', 'engines': '엔진', 'vehicles': '차량', 'vehicle': '차량', 'trucks': '트럭', 'parts': '부품', 'chemicals': '화학',
    'materials': '소재', 'mining': '광업', 'utilities': '유틸리티', 'electric': '전기', 'real': '부동산', 'estate': '', 'rental': '임대',
    'leasing': '리스', 'travel': '여행', 'hotels': '호텔', 'hotel': '호텔', 'credit': '신용', 'card': '카드', 'cards': '카드', 'investment': '투자',
    'management': '관리', 'asset': '자산', 'wealth': '자산관리', 'markets': '시장', 'market': '시장', 'trading': '트레이딩',
}
PHRASES = {  # 낱말을 나누기 전에 통째로 바꾸는 이름
    'greaterchina': '중화권', 'restofasiapacific': '기타 아시아 · 태평양', 'unitedstates': '미국', 'unitedkingdom': '영국', 'northamerica': '북미',
    'latinamerica': '중남미', 'southamerica': '남미', 'middleeast': '중동', 'asiapacific': '아시아 · 태평양', 'chinaincludinghongkong': '중국(홍콩 포함)',
    'allothercountriesnotseparatelydisclosed': '기타 국가', 'othercountries': '기타 국가', 'restofworld': '기타 지역', 'oemandother': 'OEM · 기타',
    'datacenter': '데이터센터', 'professionalvisualization': '프로 시각화', 'iphone': '아이폰', 'ipad': '아이패드', 'mac': '맥',
    'wearableshomeandaccessories': '웨어러블 · 홈 · 액세서리', 'computeandnetworking': '컴퓨트 · 네트워킹', 'governmentoperating': '정부',
}
ISO = {'US': '미국', 'CN': '중국', 'TW': '대만', 'JP': '일본', 'KR': '한국', 'GB': '영국', 'DE': '독일', 'FR': '프랑스', 'IE': '아일랜드',
       'NL': '네덜란드', 'CA': '캐나다', 'MX': '멕시코', 'BR': '브라질', 'IN': '인도', 'SG': '싱가포르', 'HK': '홍콩', 'CH': '스위스',
       'AU': '호주', 'IT': '이탈리아', 'ES': '스페인', 'SE': '스웨덴', 'IL': '이스라엘', 'BE': '벨기에', 'DK': '덴마크', 'NO': '노르웨이',
       'FI': '핀란드', 'AT': '오스트리아', 'PL': '폴란드', 'MY': '말레이시아', 'TH': '태국', 'VN': '베트남', 'ID': '인도네시아', 'PH': '필리핀',
       'NZ': '뉴질랜드', 'ZA': '남아프리카공화국', 'AE': '아랍에미리트', 'SA': '사우디아라비아', 'TR': '튀르키예', 'RU': '러시아',
       'AR': '아르헨티나', 'CL': '칠레', 'CO': '콜롬비아', 'PR': '푸에르토리코', 'LU': '룩셈부르크', 'BM': '버뮤다', 'KY': '케이맨 제도'}

def split_words(name):
    s = re.sub(r'(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])', ' ', name).replace('_', ' ')
    s = re.sub(r'(?<=[a-z])and(?=[A-Z ]|$)', ' and', s)
    return [w for w in s.split() if w]

def ko_name(mem, axis):
    key = mem.lower().replace('member', '').replace('segment', '')
    if axis == 'g' and mem.upper() in ISO:
        return ISO[mem.upper()]
    for k, v in PHRASES.items():
        if key == k:
            return v
    words = split_words(re.sub(r'(Member|Segment)$', '', mem))
    out = []
    for w in words:
        lw = w.lower()
        if lw in PHRASES:
            out.append(PHRASES[lw]); continue
        if lw in WORDS:
            if WORDS[lw]:
                out.append(WORDS[lw])
            continue
        out.append(w)
    txt = ' '.join(out).replace(' · ·', ' ·').strip(' ·')
    txt = re.sub(r'\s+', ' ', txt)
    return txt or mem

# ── 내려받기 ──
def get(url, ua, tries=3, binary=True):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': ua, 'Accept-Encoding': 'identity'})
            with urllib.request.urlopen(req, timeout=300) as r:
                return r.read()
        except Exception as e:
            print('  다시 시도', i + 1, str(e)[:120]); time.sleep(5 * (i + 1))
    return None

def fetch_month(m, ua):
    for base in BASES:
        b = get(base + m + '_notes.zip', ua)
        if b and b[:2] == b'PK':
            print('  받음', m, round(len(b) / 1e6, 1), 'MB'); return b
        if b:
            print('  압축이 아닌 응답(아직 안 나온 달이거나 요청 한도):', m)
        time.sleep(2)
    return None

# ── 대상 명단: 위키백과 표 ──
class Tables(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(); self.tables = []; self.t = None; self.row = None; self.cell = None
    def handle_starttag(self, tag, a):
        if tag == 'table': self.t = []
        elif tag == 'tr' and self.t is not None: self.row = []
        elif tag in ('td', 'th') and self.row is not None: self.cell = []
    def handle_endtag(self, tag):
        if tag in ('td', 'th') and self.cell is not None and self.row is not None:
            self.row.append(re.sub(r'\s+', ' ', ''.join(self.cell)).strip()); self.cell = None
        elif tag == 'tr' and self.row is not None and self.t is not None:
            if self.row: self.t.append(self.row)
            self.row = None
        elif tag == 'table' and self.t is not None:
            self.tables.append(self.t); self.t = None
    def handle_data(self, d):
        if self.cell is not None: self.cell.append(d)

def wiki_list(url):
    raw = get(url, BOT_UA)
    if not raw:
        return {}
    p = Tables(); p.feed(raw.decode('utf-8', 'replace'))
    best = {}
    for t in p.tables:
        out = {}
        if not t: continue
        head = [h.lower() for h in t[0]]
        ti = next((i for i, h in enumerate(head) if h in ('symbol', 'ticker')), None)
        if ti is None: continue
        ci = next((i for i, h in enumerate(head) if h == 'cik'), None)
        ni = next((i for i, h in enumerate(head) if h in ('security', 'company')), None)
        for r in t[1:]:
            if len(r) <= ti: continue
            sym = r[ti].strip().upper().replace('.', '-')
            if not re.fullmatch(r'[A-Z][A-Z0-9-]{0,6}', sym): continue
            cik = None
            if ci is not None and len(r) > ci and r[ci].strip().isdigit(): cik = int(r[ci])
            out[sym] = {'cik': cik, 'name': r[ni] if ni is not None and len(r) > ni else ''}
        if len(out) > len(best): best = out   # 표 여러 개 중 종목이 가장 많은 표(구성 종목 표) 하나만
    return best

def build_universe(ua, prev, minu=400):
    sp, nd = wiki_list(WIKI['sp500']), wiki_list(WIKI['ndx100'])
    print('위키백과 명단: S&P 500', len(sp), '· 나스닥 100', len(nd))
    tick = {}
    raw = get('https://www.sec.gov/files/company_tickers.json', ua)
    if raw:
        try:
            for v in json.loads(raw).values():
                tick[str(v['ticker']).upper().replace('.', '-')] = int(v['cik_str'])
        except Exception as e:
            print('  SEC 티커 표 읽기 실패', e)
    uni = {}
    for src in (sp, nd):
        for s, v in src.items():
            cik = v.get('cik') or tick.get(s)
            if cik: uni[s] = {'cik': cik, 'name': v.get('name', '')}
    if len(uni) < minu:
        if prev and len(prev) >= minu:
            print('  새 명단이', len(uni), '곳뿐 → 지난번 명단', len(prev), '곳을 그대로 씀'); return prev, False
        if len(uni) < min(50, minu):
            raise SystemExit('대상 명단을 만들지 못했어요(위키백과 · SEC 티커 표 확인 필요)')
    return uni, True

# ── 꼬리표 판단 · 소계 ──
def axis_of(seg):
    parts = [p for p in (seg or '').split(';') if p and '=' in p]
    keep = [p for p in parts if not any(p.split('=', 1)[0].split(':')[-1].replace('Axis', '').endswith(n) for n in NOOP)]
    if len(keep) != 1: return None, None
    ax, mem = keep[0].split('=', 1)
    a = ax.split(':')[-1].replace('Axis', '')
    for k, code, _ in AX:
        if a.endswith(k): return code, mem.split(':')[-1].replace('Member', '')
    return None, None

def split_subtotals(mem, tol=0.0005):
    names = sorted(mem, key=lambda k: -mem[k]); parents = {}
    for p in names:
        others = [k for k in names if k != p and k not in parents and mem[k] < mem[p]][:16]
        for mask in range(1, 1 << len(others)):
            sub = [others[i] for i in range(len(others)) if mask >> i & 1]
            if len(sub) >= 2 and abs(sum(mem[k] for k in sub) - mem[p]) <= tol * mem[p]:
                parents[p] = sub; break
    return {k: v for k, v in mem.items() if k not in parents}, parents

def rows(zf, name):
    with zf.open(name) as f:
        for r in csv.DictReader(io.TextIOWrapper(f, encoding='utf-8', errors='replace'), delimiter='\t'):
            yield r

def process_month(raw, cik2t):
    z = zipfile.ZipFile(io.BytesIO(raw)); names = {n.lower(): n for n in z.namelist()}
    subs = {}
    for r in rows(z, names.get('sub.tsv') or names['sub.txt']):
        try: cik = int(r.get('cik') or 0)
        except ValueError: continue
        form = (r.get('form') or '').upper()
        if cik in cik2t and (form.startswith('10-K') or form.startswith('10-Q')):
            subs[r['adsh']] = {'t': cik2t[cik], 'form': form, 'per': r.get('period'), 'filed': r.get('filed'), 'fy': r.get('fy'), 'fp': r.get('fp')}
    if not subs: return []
    dims = {}
    dn = names.get('dim.tsv') or names.get('dim.txt')
    if dn:
        for r in rows(z, dn): dims[r.get('dimhash') or r.get('dimh')] = r.get('segments') or ''
    facts = {}
    for r in rows(z, names.get('num.tsv') or names['num.txt']):
        a = r.get('adsh')
        if a not in subs or r.get('tag') not in REV_TAGS or r.get('uom') != 'USD' or (r.get('coreg') or '').strip(): continue
        seg = r.get('segments')
        if seg is None:
            dh = r.get('dimh') or ''; seg = '' if dh in ('', '0x00000000') else dims.get(dh, '?')
        try: v = float(r.get('value') or 'nan')
        except ValueError: continue
        if v != v: continue
        facts.setdefault(a, []).append((r.get('ddate'), r.get('qtrs'), seg, v))
    out = []
    for adsh, s in subs.items():
        F = facts.get(adsh) or []
        qt = '4' if s['form'].startswith('10-K') else '1'
        cur = [f for f in F if f[0] == s['per'] and f[1] == qt] or [f for f in F if f[0] == s['per']]
        tot = [f[3] for f in cur if f[2] == '']
        if not tot: continue
        total = max(tot); groups = {}
        for f in cur:
            code, mem = axis_of(f[2])
            if code: groups.setdefault(code, {})[mem] = max(groups.get(code, {}).get(mem, 0), f[3])
        axes = {}; bad = []
        for code, mem in groups.items():
            leaves, parents = split_subtotals(mem)
            ssum = sum(leaves.values()); diff = abs(ssum / total - 1) * 100 if total else 999
            if diff <= 1 and len(leaves) >= 2:
                axes[code] = {'it': [[k, ko_name(k, code), round(v)] for k, v in sorted(leaves.items(), key=lambda x: -x[1])],
                              'gr': {p: c for p, c in parents.items()}, 'pv': {p: round(mem[p]) for p in parents}}
            else:
                bad.append(f'{code}:{diff:.1f}%')
        out.append({'t': s['t'], 'adsh': adsh, 'form': '10-K' if s['form'].startswith('10-K') else '10-Q', 'amend': '/A' in s['form'],
                    'per': s['per'], 'filed': s['filed'], 'fy': s['fy'], 'fp': s['fp'], 'tot': round(total), 'ax': axes, 'bad': bad})
    return out

def months_window(today, years):
    start = dt.date(today.year - years, today.month, 1)
    m, out = start, []
    while (m.year, m.month) < (today.year, today.month):
        out.append(f'{m.year}_{m.month:02d}')
        m = dt.date(m.year + (m.month == 12), m.month % 12 + 1, 1)
    return out

def prune(filings):
    # 같은 공시 기간 + 종류는 나중 제출(정정 포함) 하나만 · 연간 3 + 분기 4
    best = {}
    for f in filings:
        k = (f['form'], f['per'])
        if k not in best or (f['filed'] or '') > (best[k]['filed'] or ''): best[k] = f
    ann = sorted([f for f in best.values() if f['form'] == '10-K'], key=lambda f: f['per'], reverse=True)[:KEEP_ANNUAL]
    qtr = sorted([f for f in best.values() if f['form'] == '10-Q'], key=lambda f: f['per'], reverse=True)[:KEEP_QUARTER]
    return sorted(ann + qtr, key=lambda f: f['per'], reverse=True)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--data', default='data'); ap.add_argument('--years', type=int, default=3)
    ap.add_argument('--max-months', type=int, default=40); ap.add_argument('--today', default=''); ap.add_argument('--min-universe', type=int, default=400)
    a = ap.parse_args()
    ua = os.environ.get('SEC_UA', '').strip()
    if not ua: raise SystemExit('SEC_UA 비밀값이 없어요')
    today = dt.date.fromisoformat(a.today) if a.today else dt.date.today()
    seg_dir = os.path.join(a.data, 'seg'); os.makedirs(seg_dir, exist_ok=True)
    sp = os.path.join(seg_dir, '_state.json')
    state = json.load(open(sp)) if os.path.exists(sp) else {'done': [], 'universe': {}}
    uni, fresh = build_universe(ua, state.get('universe') or {}, a.min_universe)
    state['universe'] = uni
    cik2t = {v['cik']: t for t, v in uni.items()}
    store = {}
    for t in uni:
        fp = os.path.join(seg_dir, t + '.json')
        store[t] = json.load(open(fp)).get('f', []) if os.path.exists(fp) else []
    # 명단이 바뀌어 새로 들어온 회사가 있으면 그 회사 몫만이라도 다시 받기 위해 처리 기록을 지운다
    new_t = sorted(set(uni) - set(state.get('known', [])))
    todo = [m for m in months_window(today, a.years) if m not in state['done'] or (new_t and state.get('known'))]
    if new_t and state.get('known'):
        print('새로 들어온 회사', len(new_t), '곳 → 기간 전체를 다시 확인')
    todo = todo[-a.max_months:]
    print('처리할 달', len(todo), todo[:3], '…', todo[-3:])
    got = 0
    for m in todo:
        raw = fetch_month(m, ua)
        if not raw:
            print('  아직 없음 · 다음에 다시:', m); continue
        for f in process_month(raw, cik2t):
            store.setdefault(f['t'], []).append({k: v for k, v in f.items() if k != 't'})
            got += 1
        if m not in state['done']: state['done'].append(m)
        time.sleep(1)
    state['done'] = sorted(set(state['done']) & set(months_window(today, a.years)))
    state['known'] = sorted(uni)
    have, ok_any, sizes, bad_list = {}, 0, [], []
    for t, L in store.items():
        if t not in uni: continue
        L = prune(L)
        keep = [{k: v for k, v in f.items() if k not in ('bad', 'amend')} for f in L if f['ax']]
        if keep:
            doc = {'t': t, 'cik': uni[t]['cik'], 'name': uni[t].get('name', ''), 'upd': today.isoformat(),
                   'src': 'SEC 재무제표 · 주석 데이터셋(월간) · 합계 검증 ±1%', 'f': keep}
            s = json.dumps(doc, ensure_ascii=False, separators=(',', ':'))
            open(os.path.join(seg_dir, t + '.json'), 'w', encoding='utf-8').write(s)
            have[t] = keep[0]['per']; sizes.append(len(s.encode())); ok_any += 1
            state.setdefault('bad', {}).pop(t, None)
        elif L:
            state.setdefault('bad', {})[t] = ','.join(L[0].get('bad') or ['구분 없음'])
    state['bad'] = {t: v for t, v in state.get('bad', {}).items() if t in uni}
    bad_list = [f'{t} {v}' for t, v in sorted(state['bad'].items())]
    # 지수에서 빠진 회사 파일은 지운다(명단에 있는 회사 파일만 남김)
    for fn in os.listdir(seg_dir):
        if fn.endswith('.json') and not fn.startswith('_') and fn[:-5] not in have:
            os.remove(os.path.join(seg_dir, fn))
    json.dump({'upd': today.isoformat(), 'n': len(have), 'universe': len(uni), 't': have},
              open(os.path.join(seg_dir, '_index.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
    json.dump(state, open(sp, 'w'), ensure_ascii=False, separators=(',', ':'))
    sizes.sort()
    rep = [f'기준일 {today} · 대상 {len(uni)}곳(명단 {"새로 읽음" if fresh else "지난번 것"}) · 이번에 처리한 달 {len(todo)}개 · 새로 뽑은 공시 {got}건',
           f'사업별 자료가 있는 회사 {ok_any}곳 ({ok_any / max(len(uni), 1) * 100:.0f}%) · 없음/검증 실패 {len(uni) - ok_any}곳',
           f'종목 파일 크기: 가운데 {sizes[len(sizes) // 2] if sizes else 0}B · 가장 큼 {sizes[-1] if sizes else 0}B · 합계 {sum(sizes) // 1024}KB',
           '검증 실패 예(처음 20곳): ' + ' / '.join(bad_list[:20])]
    open(os.path.join(seg_dir, '_report.txt'), 'w', encoding='utf-8').write('\n'.join(rep))
    print('\n'.join(rep))

if __name__ == '__main__':
    main()
