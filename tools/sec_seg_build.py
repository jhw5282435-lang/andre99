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
BUILD_VER = 3   # 계산 방식이 바뀌면 올린다 → 처리 기록을 지우고 새 방식으로 다시 만든다
REV_ORDER = ['RevenueFromContractWithCustomerExcludingAssessedTax', 'Revenues', 'RevenuesNetOfInterestExpense',
             'RevenueFromContractWithCustomerIncludingAssessedTax', 'SalesRevenueNet', 'RegulatedAndUnregulatedOperatingRevenue']
REV_TAGS = set(REV_ORDER)
KEEP_ANNUAL, KEEP_QUARTER, WINDOW_MONTHS = 3, 4, 15
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
    'wholesale': '도매', 'canada': '캐나다', 'mexico': '멕시코', 'foreign': '해외', 'fresh': '신선', 'foods': '식품', 'sundries': '잡화',
    'membership': '회원', 'leasing_': '리스', 'regulatory': '규제', 'credits': '크레딧', 'generation': '발전', 'operations': '사업', 'healthcare': '헬스케어', 'health': '헬스', 'care': '케어', 'pharmaceutical': '제약', 'pharmaceuticals': '제약',
    'medical': '의료', 'devices': '기기', 'device': '기기', 'energy': '에너지', 'oil': '석유', 'gas': '가스', 'insurance': '보험', 'banking': '금융',
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
    'management': '관리', 'asset': '자산', 'wealth': '자산', 'markets': '시장', 'market': '시장', 'trading': '트레이딩',
}
PHRASES = {  # 낱말을 나누기 전에 통째로 바꾸는 이름
    'greaterchina': '중화권', 'restofasiapacific': '기타 아시아 · 태평양', 'unitedstates': '미국', 'unitedkingdom': '영국', 'northamerica': '북미',
    'latinamerica': '중남미', 'southamerica': '남미', 'middleeast': '중동', 'asiapacific': '아시아 · 태평양', 'chinaincludinghongkong': '중국(홍콩 포함)',
    'allothercountriesnotseparatelydisclosed': '기타 국가', 'othercountries': '기타 국가', 'restofworld': '기타 지역', 'oemandother': 'OEM · 기타',
    'datacenter': '데이터센터', 'nonus': '미국 외', 'nonusa': '미국 외', 'uscanada': '미국 · 캐나다', 'unitedstatesandcanada': '미국 · 캐나다',
    'foreigncountries': '해외', 'nonfoods': '비식품', 'amazonwebservices': 'AWS(아마존 웹 서비스)', 'canada': '캐나다', 'professionalvisualization': '프로 시각화', 'iphone': '아이폰', 'ipad': '아이패드', 'mac': '맥',
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
    key = re.sub(r'(member|segment)$', '', mem.lower())
    if axis == 'g' and mem.upper() in ISO:
        return ISO[mem.upper()]
    for k, v in PHRASES.items():
        if key == k:
            return v
    words = split_words(re.sub(r'(Member|Segment)$', '', mem))
    out, miss = [], 0
    for w in words:
        lw = w.lower()
        if lw in PHRASES:
            out.append(PHRASES[lw]); continue
        if lw in WORDS:
            if WORDS[lw]: out.append(WORDS[lw])
            continue
        miss += 1; out.append(w)
    if miss:   # 못 바꾼 낱말이 있으면 한국어 · 영어를 섞지 않고 원문을 띄어 써서 보여 준다
        eng = ' '.join(w if w.isupper() else (w if w.lower() not in ('and', 'of', 'the', 'for') else w.lower()) for w in words)
        return eng or mem
    txt = ' '.join(out).replace(' · ·', ' ·').strip(' ·')
    txt = re.sub(r'\s+', ' ', txt)
    return txt or mem

EN_FIX = {'iphone': 'iPhone', 'ipad': 'iPad', 'ipod': 'iPod', 'ios': 'iOS', 'ebay': 'eBay'}
EN_ISO = {'US': 'United States', 'CN': 'China', 'TW': 'Taiwan', 'JP': 'Japan', 'KR': 'South Korea', 'GB': 'United Kingdom', 'DE': 'Germany',
          'FR': 'France', 'IE': 'Ireland', 'NL': 'Netherlands', 'CA': 'Canada', 'MX': 'Mexico', 'BR': 'Brazil', 'IN': 'India', 'SG': 'Singapore',
          'HK': 'Hong Kong', 'CH': 'Switzerland', 'AU': 'Australia', 'IT': 'Italy', 'ES': 'Spain', 'SE': 'Sweden', 'IL': 'Israel', 'BE': 'Belgium',
          'DK': 'Denmark', 'NO': 'Norway', 'FI': 'Finland', 'AT': 'Austria', 'PL': 'Poland', 'MY': 'Malaysia', 'TH': 'Thailand', 'VN': 'Vietnam',
          'ID': 'Indonesia', 'PH': 'Philippines', 'NZ': 'New Zealand', 'ZA': 'South Africa', 'AE': 'United Arab Emirates', 'SA': 'Saudi Arabia',
          'TR': 'Turkey', 'RU': 'Russia', 'AR': 'Argentina', 'CL': 'Chile', 'CO': 'Colombia', 'PR': 'Puerto Rico', 'LU': 'Luxembourg'}
SMALL = ('and', 'of', 'the', 'for', 'in', 'on', 'at', 'to', 'from', 'by', 'with')

def en_name(mem, axis):
    """XBRL 꼬리표 이름 → 읽기 쉬운 영어. 예: WearablesHomeandAccessories → Wearables, Home and Accessories 가 아니라 Wearables Home and Accessories"""
    if axis == 'g' and mem.upper() in EN_ISO: return EN_ISO[mem.upper()]
    base = re.sub(r'(Operating|Reportable)?Segments?$', '', mem) or mem
    if base.lower() in EN_FIX: return EN_FIX[base.lower()]
    ws = []
    for i, w in enumerate(split_words(base)):
        lw = w.lower()
        if lw in EN_FIX: ws.append(EN_FIX[lw])
        elif i and lw in SMALL: ws.append(lw)
        elif lw in ('us', 'usa'): ws.append('US')
        else: ws.append(w if w.isupper() else w[:1].upper() + w[1:])
    return ' '.join(ws) or mem

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
        for attempt in range(2):
            b = get(base + m + '_notes.zip', ua)
            if b and b[:2] == b'PK':
                print('  받음', m, round(len(b) / 1e6, 1), 'MB'); return b
            if b and b'Request Rate Threshold' in b[:4000]:
                if attempt == 0:
                    print('  SEC 요청 한도 → 11분 쉬고 다시', m); time.sleep(660); continue
                print('  SEC 요청 한도가 계속됨 → 이번 실행은 여기서 멈추고 다음 실행이 이어서', m); return 'BLOCK'
            if b:
                print('  압축이 아닌 응답(아직 안 나온 달):', base.split('/')[-2], m)
            break
        time.sleep(3)
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
        ti = next((i for i, h in enumerate(head) if h.startswith('symbol') or h.startswith('ticker')), None)
        if ti is None: continue
        ci = next((i for i, h in enumerate(head) if h.startswith('cik')), None)
        ni = next((i for i, h in enumerate(head) if h.startswith('security') or h.startswith('company')), None)
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
    print('위키백과 명단: S&P 500', len(sp), '· 나스닥 100', len(nd)); build_universe.counts = (len(sp), len(nd))
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
        if a.endswith(k): return code, re.sub(r'Member$', '', mem.split(':')[-1])
    return None, None

def split_subtotals(mem, total=None, tol=0.0005):
    """소계 빼기. 그냥 더해서 합계와 맞으면 소계 없음. 안 맞을 때만, 「다른 항목 몇 개의 합과 같은 항목」을 빼 보고
    빼서 합계에 더 가까워질 때만 소계로 인정한다(우연히 합이 같은 항목을 소계로 오인하지 않게)."""
    if total and abs(sum(mem.values()) / total - 1) <= 0.01:
        return dict(mem), {}
    names = sorted(mem, key=lambda k: -mem[k]); cur = dict(mem); parents = {}
    for p in names:
        if p not in cur: continue
        others = [k for k in names if k != p and k in cur and mem[k] < mem[p]][:16]
        found = None
        for mask in range(1, 1 << len(others)):
            sub = [others[i] for i in range(len(others)) if mask >> i & 1]
            if len(sub) >= 2 and abs(sum(mem[k] for k in sub) - mem[p]) <= tol * mem[p]:
                found = sub; break
        if not found: continue
        now = sum(cur.values())
        if total is None or abs(now - mem[p] - total) < abs(now - total):
            parents[p] = found; del cur[p]
    return cur, parents

def rows(zf, name):
    with zf.open(name) as f:
        for r in csv.DictReader(io.TextIOWrapper(f, encoding='utf-8', errors='replace'), delimiter='\t'):
            yield r

def axes_for(L_all):
    """한 공시 · 한 기간의 매출 숫자들 → 꼬리표별로 합계와 맞춰 본 칸들 (통과한 칸만)"""
    bytag = {}
    for f in L_all: bytag.setdefault(f[4], []).append(f)
    total = None; axes = {}; badd = {}
    for tag in [t for t in REV_ORDER if t in bytag]:
        L = bytag[tag]; tt = [f[3] for f in L if f[2] == '']
        if not tt: continue
        ttot = max(tt)
        if total is None: total = ttot
        groups = {}
        for f in L:
            code, mem = axis_of(f[2])
            if code: groups.setdefault(code, {})[mem] = max(groups.get(code, {}).get(mem, 0), f[3])
        for code, mem in groups.items():
            if code in axes: continue
            leaves, parents = split_subtotals(mem, ttot)
            ssum = sum(leaves.values()); diff = abs(ssum / ttot - 1) * 100 if ttot else 999
            if diff <= 1 and len(leaves) >= 2:
                axes[code] = {'it': [[k, en_name(k, code), ko_name(k, code), round(v)] for k, v in sorted(leaves.items(), key=lambda x: -x[1])],
                              'gr': {p: c for p, c in parents.items()}, 'pv': {p: round(mem[p]) for p in parents}}
                if abs(ttot / total - 1) > 0.01: axes[code]['tt'] = round(ttot)
                badd.pop(code, None)
            elif code not in badd:
                badd[code] = f'{code}:{diff:.1f}%'
    return total, axes, list(badd.values())

def process_month(raw, cik2t):
    z = zipfile.ZipFile(io.BytesIO(raw)); names = {n.lower(): n for n in z.namelist()}
    subs = {}
    for r in rows(z, names.get('sub.tsv') or names['sub.txt']):
        try: cik = int(r.get('cik') or 0)
        except ValueError: continue
        form = (r.get('form') or '').upper()
        if cik in cik2t and (form.startswith('10-K') or form.startswith('10-Q')):
            subs[r['adsh']] = {'ts': cik2t[cik], 'form': '10-K' if form.startswith('10-K') else '10-Q', 'per': r.get('period'), 'filed': r.get('filed')}
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
        facts.setdefault(a, []).append((r.get('ddate'), r.get('qtrs'), seg, v, r.get('tag')))
    out = []
    for adsh, s in subs.items():
        F = facts.get(adsh) or []
        src = {'form': s['form'], 'per': s['per'], 'filed': s['filed'], 'adsh': adsh}
        if s['form'] == '10-K':
            # 연간 보고서: 올해 + 같은 보고서에 비교용으로 실린 지난 해들(1년짜리 기간 · 결산일 기준 최근 3개)
            ds = sorted({f[0] for f in F if f[1] == '4' and f[0] and f[0] <= (s['per'] or '99999999')}, reverse=True)[:KEEP_ANNUAL]
            kinds = [('A', d) for d in ds]
        else:
            kinds = [('Q', s['per'])]
        for kind, d in kinds:
            qt = '4' if kind == 'A' else '1'
            cur = [f for f in F if f[0] == d and f[1] == qt]
            if not cur: continue
            total, axes, bad = axes_for(cur)
            if total is None: continue
            out.append({'ts': s['ts'], 'k': kind, 'per': d, 'cmp': d != s['per'], 'src': src, 'tot': round(total), 'ax': axes, 'bad': bad})
    return out

def months_window(today, months):
    y, m = today.year, today.month
    out = []
    for _ in range(months):
        m -= 1
        if m == 0: y, m = y - 1, 12
        out.append(f'{y}_{m:02d}')
    return sorted(out)

def merge(points):
    """같은 기간은 가장 늦게 제출된 보고서의 숫자 하나만(최신 기준 · 사업 구분이 바뀌어도 같은 기준으로 비교)
    연간 3개 + 분기 4개만 남김"""
    best = {}
    for p in points:
        k = (p['k'], p['per'])
        if k not in best or (p['src']['filed'] or '') > (best[k]['src']['filed'] or '') or \
           ((p['src']['filed'] or '') == (best[k]['src']['filed'] or '') and len(p['ax']) > len(best[k]['ax'])):
            best[k] = p
    ann = sorted([p for p in best.values() if p['k'] == 'A'], key=lambda p: p['per'], reverse=True)[:KEEP_ANNUAL]
    qtr = sorted([p for p in best.values() if p['k'] == 'Q'], key=lambda p: p['per'], reverse=True)[:KEEP_QUARTER]
    return ann + qtr

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--data', default='data'); ap.add_argument('--months', type=int, default=WINDOW_MONTHS)
    ap.add_argument('--today', default=''); ap.add_argument('--min-universe', type=int, default=400)
    a = ap.parse_args()
    ua = os.environ.get('SEC_UA', '').strip()
    if not ua: raise SystemExit('SEC_UA 비밀값이 없어요')
    today = dt.date.fromisoformat(a.today) if a.today else dt.date.today()
    seg_dir = os.path.join(a.data, 'seg'); os.makedirs(seg_dir, exist_ok=True)
    sp = os.path.join(seg_dir, '_state.json')
    state = json.load(open(sp)) if os.path.exists(sp) else {'done': [], 'universe': {}}
    rebuild = state.get('ver') != BUILD_VER
    if rebuild:
        print('계산 방식', state.get('ver'), '→', BUILD_VER, ': 새 방식으로 다시 만듦'); state['done'] = []
    state['ver'] = BUILD_VER
    uni, fresh = build_universe(ua, state.get('universe') or {}, a.min_universe)
    state['universe'] = uni
    cik2t = {}
    for t, v in uni.items(): cik2t.setdefault(v['cik'], []).append(t)
    window = months_window(today, a.months)
    new_t = sorted(set(uni) - set(state.get('known', [])))
    redo_all = bool(new_t and state.get('known'))
    if redo_all: print('새로 들어온 회사', len(new_t), '곳 → 기간 전체를 다시 확인')
    todo = [m for m in window if m not in state['done'] or redo_all]
    print('처리할 달', len(todo), todo[:2], '…', todo[-2:])
    pts = {}   # 회사별 기간 숫자 — 지난 실행 결과는 종목 파일에서 이어받는다(상태 파일을 가볍게)
    if not rebuild:
        for t in uni:
            fp = os.path.join(seg_dir, t + '.json')
            if os.path.exists(fp):
                try: pts[t] = json.load(open(fp, encoding='utf-8')).get('f', [])
                except Exception: pass
    state.pop('pts', None)
    got, missed = 0, []
    for m in todo:
        raw = fetch_month(m, ua)
        if raw == 'BLOCK':
            missed += todo[todo.index(m):]; break
        if not raw:
            print('  아직 없음 · 다음에 다시:', m); missed.append(m); continue
        for p in process_month(raw, cik2t):
            for t in p['ts']:
                pts.setdefault(t, []).append({k: v for k, v in p.items() if k != 'ts'})
            got += 1
        if m not in state['done']: state['done'].append(m)
        time.sleep(8)
    state['done'] = sorted(set(state['done']) & set(window))
    state['known'] = sorted(uni)
    have, sizes, n3 = {}, [], 0
    state.setdefault('bad', {})
    for t in list(pts):
        if t not in uni: pts.pop(t); continue
        M = merge(pts[t])
        keep = [{k: v for k, v in p.items() if k != 'bad'} for p in M if p['ax']]
        if keep:
            la = [p for p in keep if p['k'] == 'A']
            if len(la) >= 3: n3 += 1
            doc = {'t': t, 'cik': uni[t]['cik'], 'name': uni[t].get('name', ''), 'upd': today.isoformat(), 'ver': BUILD_VER,
                   'src': 'SEC 재무제표 · 주석 데이터셋(월간) · 합계 검증 ±1%',
                   'note': '지난 해 숫자(cmp=true)는 가장 최근 연간 보고서(10-K)에 비교용으로 실린 숫자예요. 회사가 사업 구분을 바꾸면 예전에 낸 보고서의 숫자와 다를 수 있어요.',
                   'f': keep}
            s = json.dumps(doc, ensure_ascii=False, separators=(',', ':'))
            open(os.path.join(seg_dir, t + '.json'), 'w', encoding='utf-8').write(s)
            have[t] = keep[0]['per']; sizes.append(len(s.encode())); state['bad'].pop(t, None)
        elif M:
            state['bad'][t] = ','.join(M[0].get('bad') or ['구분 없음'])
    state['bad'] = {t: v for t, v in state['bad'].items() if t in uni and t not in have}
    for fn in os.listdir(seg_dir):
        if fn.endswith('.json') and not fn.startswith('_') and fn[:-5] not in have:
            os.remove(os.path.join(seg_dir, fn))
    json.dump({'upd': today.isoformat(), 'n': len(have), 'universe': len(uni), 't': have},
              open(os.path.join(seg_dir, '_index.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
    json.dump(state, open(sp, 'w'), ensure_ascii=False, separators=(',', ':'))
    sizes.sort(); cnt = getattr(build_universe, 'counts', (0, 0)); ok_any = len(have)
    rep = [f'기준일 {today} · 계산 방식 {BUILD_VER}판 · 대상 {len(uni)}곳(명단 {"새로 읽음" if fresh else "지난번 것"} · 위키백과 S&P 500 {cnt[0]} · 나스닥 100 {cnt[1]})',
           f'이번에 받은 달 {len(todo) - len(missed)}/{len(todo)}개 · 못 받은 달 {", ".join(missed) if missed else "없음"} (다음 실행이 이어서) · 처리 끝난 달 {len(state["done"])}/{len(window)}개 · 새로 뽑은 기간 숫자 {got}건',
           f'사업별 자료가 있는 회사 {ok_any}곳 ({ok_any / max(len(uni), 1) * 100:.0f}%) · 그중 연간 3년치 {n3}곳 · 없음/검증 실패 {len(uni) - ok_any}곳',
           f'종목 파일 크기: 가운데 {sizes[len(sizes) // 2] if sizes else 0}B · 가장 큼 {sizes[-1] if sizes else 0}B · 합계 {sum(sizes) // 1024}KB',
           '검증 실패 예(처음 20곳): ' + ' / '.join(f'{t} {v}' for t, v in sorted(state['bad'].items())[:20])]
    open(os.path.join(seg_dir, '_report.txt'), 'w', encoding='utf-8').write('\n'.join(rep))
    print('\n'.join(rep))

if __name__ == '__main__':
    main()
