# 안드레99 v3.0 대시보드

**무료 호스팅 5단계 (GitHub Desktop 사용)**

## 1. GitHub 계정 만들기
- github.com 접속 → Sign up → 이메일/비번/사용자명 입력 (5분)

## 2. GitHub Desktop 설치
- desktop.github.com 접속 → 다운로드 → 로그인

## 3. 새 저장소 만들기
- GitHub Desktop 열기 → File → New repository
- Name: `andre99` (소문자)
- Local path: 원하는 폴더
- Initialize with README: 체크 해제
- Create repository 클릭

## 4. 파일 3개 복사
저장소 폴더에 다음 파일을 복사:
- `index.html`
- `data.json`
- `README.md` (이 파일)

GitHub Desktop으로 돌아가서:
- Summary: "first commit"
- Commit to main 클릭
- Publish repository 클릭 (Keep this code private 체크 해제)

## 5. GitHub Pages 활성화
- 브라우저에서 github.com → 본인 저장소 → Settings → Pages
- Source: Deploy from a branch
- Branch: `main` / `/(root)` → Save

**3-5분 후 URL 생성**: `https://[username].github.io/andre99/`

---

## 데이터 갱신 방법

### 정기 갱신 (분기별)
어닝 시즌마다 Claude에게:
```
안드레99 PLTR 갱신
안드레99 TSLA 갱신
... (5종)
```

### 신규 종목 추가
대시보드 종목 입력칸에 신규 티커 (예: `AMZN`) 입력 → "분석" → 안내 화면.
Claude에게:
```
안드레99 AMZN 갱신
```
Claude가 JSON 블록 출력 → `data.json`의 `"stocks"` 안에 추가 → GitHub Desktop으로 commit + push → 1분 후 라이브 반영.

---

## 모바일에서 사용
URL을 모바일 브라우저에 저장 → 홈 화면에 추가 → 앱처럼 사용.
