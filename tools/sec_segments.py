#!/usr/bin/env python3
"""안드레99 사업별 매출 시험 — SEC 「재무제표 · 주석 데이터셋」(월간)에서 우리 종목의 사업별 · 지역별 매출을 뽑고 합계를 검증한다.

- 연락처(User-Agent)는 환경 변수 SEC_UA(GitHub 비밀값)에서만 읽는다. 코드에 적지 않는다.
- 결과: --out 폴더에 종목별 JSON + summary.txt. 합계가 전체 매출과 ±1% 안이면 ok.
"""
import argparse, csv, io, json, os, sys, time, zipfile, urllib.request

REV_TAGS = {'RevenueFromContractWithCustomerExcludingAssessedTax', 'Revenues', 'SalesRevenueNet', 'RevenueFromContractWithCustomerIncludingAssessedTax'}
AXES = {'ProductOrService': '사업별(제품 · 서비스)', 'StatementBusinessSegments': '사업부문별', 'StatementGeographical': '지역별', 'srt:ProductOrServiceAxis': '사업별(제품 · 서비스)', 'us-gaap:StatementBusinessSegmentsAxis': '사업부문별', 'srt:StatementGeographicalAxis': '지역별'}
csv.field_size_limit(10 ** 9)

BASES = ['https://www.sec.gov/files/dera/data/financial-statement-notes-data-sets/', 'https://www.sec.gov/files/dera/data/financial-statement-and-notes-data-sets/']

def get(url, ua, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': ua, 'Accept-Encoding': 'identity'})
            with urllib.request.urlopen(req, timeout=300) as r:
                b = r.read()
            if b[:2] == b'PK':
                return b
            print('  압축 파일이 아니라 안내 페이지가 왔어요(주소 다름 · 요청 한도 등):', b[:80].decode('utf-8', 'replace').replace('\n', ' ')[:80])
            return None
        except Exception as e:
            print('  다시 시도', i + 1, str(e)[:120]); time.sleep(5 * (i + 1))
    return None

def fetch_month(m, ua):
    for base in BASES:
        url = base + m + '_notes.zip'
        print('받는 중', url)
        b = get(url, ua)
        if b:
            print('  받음', round(len(b) / 1e6, 1), 'MB')
            return b
        time.sleep(2)
    print('  이 달 자료를 받지 못했어요:', m)
    return None

def rows(zf, name):
    with zf.open(name) as f:
        rd = csv.DictReader(io.TextIOWrapper(f, encoding='utf-8', errors='replace'), delimiter='\t')
        for r in rd:
            yield r

NOOP = ('ConsolidationItems', 'StatementScenario')   # 「영업 부문 합계」 같은 보조 꼬리표 — 무시하고 남은 축으로 판단

def axis_of(seg):
    # 예: "ProductOrService=IPhone;" / "BusinessSegments=GovernmentSegment;ConsolidationItems=OperatingSegments;"
    parts = [p for p in (seg or '').split(';') if p and '=' in p]
    keep = [p for p in parts if not any(p.split('=', 1)[0].split(':')[-1].replace('Axis', '').endswith(n) for n in NOOP)]
    if len(keep) != 1:
        return None, None
    ax, mem = keep[0].split('=', 1)
    a = ax.split(':')[-1].replace('Axis', '')
    for k, v in (('ProductOrService', '사업별(제품 · 서비스)'), ('BusinessSegments', '사업부문별'), ('Geographical', '지역별')):
        if a.endswith(k):
            return v, mem.split(':')[-1].replace('Member', '')
    return None, None

def split_subtotals(mem, tol=0.0005):
    """소계 찾기: 어떤 항목이 다른 항목 몇 개의 합과 같으면(±0.05%) 그 항목은 소계(부모)로 보고 합계에서 뺀다.
    예) 애플 Product = 아이폰 + 맥 + 아이패드 + 웨어러블 / 엔비디아 DataCenter = Compute + Networking"""
    names = sorted(mem, key=lambda k: -mem[k]); parents = {}
    for p in names:
        others = [k for k in names if k != p and k not in parents and mem[k] < mem[p]][:16]
        found = None
        for mask in range(1, 1 << len(others)):
            sub = [others[i] for i in range(len(others)) if mask >> i & 1]
            if len(sub) < 2:
                continue
            if abs(sum(mem[k] for k in sub) - mem[p]) <= tol * mem[p]:
                found = sub; break
        if found:
            parents[p] = found
    leaves = {k: v for k, v in mem.items() if k not in parents}
    return leaves, parents

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--months', default='2025_10,2025_11,2026_02,2026_10')
    ap.add_argument('--tickers', default='AAPL:320193,NVDA:1045810,PLTR:1321655')
    ap.add_argument('--out', default='seg_out')
    a = ap.parse_args()
    ua = os.environ.get('SEC_UA', '').strip()
    if not ua:
        raise SystemExit('SEC_UA 비밀값이 없어요')
    want = {int(c): t for t, c in (x.split(':') for x in a.tickers.split(','))}
    os.makedirs(a.out, exist_ok=True)
    result = {t: [] for t in want.values()}
    diag = {}
    for m in a.months.split(','):
        raw = fetch_month(m, ua)
        if not raw:
            continue
        z = zipfile.ZipFile(io.BytesIO(raw)); time.sleep(1)
        names = {n.lower(): n for n in z.namelist()}
        print('  파일', sorted(names))
        subs = {}
        for r in rows(z, names['sub.tsv'] if 'sub.tsv' in names else names['sub.txt']):
            try: cik = int(r.get('cik') or 0)
            except ValueError: continue
            if cik in want and (r.get('form') or '').startswith(('10-Q', '10-K')):
                subs[r['adsh']] = {'t': want[cik], 'form': r.get('form'), 'period': r.get('period'), 'filed': r.get('filed'), 'fy': r.get('fy'), 'fp': r.get('fp')}
        print('  우리 종목 공시', len(subs), [(v['t'], v['form'], v['period']) for v in subs.values()])
        if not subs:
            continue
        dimn = names.get('dim.tsv') or names.get('dim.txt')
        dims = {}
        if dimn:
            for r in rows(z, dimn):
                dims[r.get('dimhash') or r.get('dimh')] = r.get('segments') or ''
        numn = names.get('num.tsv') or names.get('num.txt')
        facts = []
        for r in rows(z, numn):
            if r.get('adsh') not in subs or r.get('tag') not in REV_TAGS or r.get('uom') != 'USD':
                continue
            seg = r.get('segments')
            if seg is None:
                dh = r.get('dimh') or ''
                seg = '' if dh in ('', '0x00000000') else dims.get(dh, '?')
            if (r.get('coreg') or '').strip():
                continue
            try: v = float(r.get('value') or 'nan')
            except ValueError: continue
            facts.append((r['adsh'], r['tag'], r.get('ddate'), r.get('qtrs'), seg, v))
        for adsh, s in subs.items():
            F = [f for f in facts if f[0] == adsh]
            if not F:
                continue
            # 공시 기간 끝(period)과 같은 날 · 가장 긴 기간(10-K = 4분기, 10-Q = 1분기 우선)
            per = s['period']; qt = '4' if s['form'].startswith('10-K') else '1'
            cur = [f for f in F if f[2] == per and f[3] == qt] or [f for f in F if f[2] == per]
            tot = [f[5] for f in cur if f[4] == '']
            total = max(tot) if tot else None
            groups = {}
            for f in cur:
                ax, mem = axis_of(f[4])
                if ax:
                    groups.setdefault(ax, {})[mem] = max(groups.get(ax, {}).get(mem, 0), f[5])
            out = {'form': s['form'], 'period': per, 'filed': s['filed'], 'total': total, 'axes': {}}
            for ax, mem in groups.items():
                leaves, parents = split_subtotals(mem)
                ssum = sum(leaves.values())
                diff = (ssum / total - 1) * 100 if total else None
                out['axes'][ax] = {'members': dict(sorted(leaves.items(), key=lambda x: -x[1])), 'groups': parents, 'parents': {p: mem[p] for p in parents}, 'sum': ssum, 'diff_pct': diff, 'ok': diff is not None and abs(diff) <= 1}
            # 진단: 이 공시 기간의 매출 꼬리표 조합을 모두 적어 둔다(축을 못 찾은 회사 확인용)
            diag.setdefault(s['t'], []).append(f"== {s['form']} {per}")
            seen = {}
            for f in cur:
                k = f[4] or '(합계)'
                seen[k] = max(seen.get(k, 0), f[5])
            for k, v in sorted(seen.items(), key=lambda x: -x[1])[:80]:
                diag[s['t']].append(f"{v/1e8:>10.0f}억  {k}")
            result[s['t']].append(out)
    lines = []
    for t, L in result.items():
        json.dump(L, open(os.path.join(a.out, t + '.json'), 'w'), ensure_ascii=False, indent=1)
        for o in L:
            lines.append(f"{t} {o['form']} {o['period']} 전체 {o['total']}")
            for ax, g in o['axes'].items():
                lines.append(f"   {ax}: {len(g['members'])}개 · 합계 차이 {g['diff_pct'] if g['diff_pct'] is None else round(g['diff_pct'], 2)}% · {'통과' if g['ok'] else '확인 필요'} · " + ', '.join(f"{k} {v/1e8:.0f}억" for k, v in list(g['members'].items())[:6]))
                for p, c in g.get('groups', {}).items():
                    lines.append(f"      (소계 {p} = {' + '.join(c)})")
        if not L:
            lines.append(f'{t}: 이 달 자료에 공시 없음')
    for t, d in diag.items():
        open(os.path.join(a.out, 'raw_' + t + '.txt'), 'w').write('\n'.join(d))
    sizes = ', '.join(f"{t} {os.path.getsize(os.path.join(a.out, t + '.json'))}B" for t in result)
    lines.append('파일 크기(앱이 받을 크기의 기준): ' + sizes)
    open(os.path.join(a.out, 'summary.txt'), 'w').write('\n'.join(lines))
    print('\n'.join(lines))

if __name__ == '__main__':
    main()
