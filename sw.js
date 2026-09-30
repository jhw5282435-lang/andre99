/* ANDRE99 서비스 워커 · 2026.09.30-A
   역할 세 가지
     ① 푸시 메시지를 받아 알림을 띄운다
     ② 알림을 누르면 앱을 연다
     ③ 앱이 물어보면 자기 버전을 알려준다 (진단용)
   앱이 닫혀 있어도 브라우저가 이 파일을 대신 실행한다.

   경로는 전부 상대 경로로 둔다. 이 파일이 놓인 폴더가 기준이 되므로
   'icon-192.png' 는 같은 폴더의 icon-192.png 로 풀린다.
   폴더 이름이 바뀌어도, 도메인이 바뀌어도 따라간다.

   [2026.09.21-A 변경]
   알림을 눌렀을 때 이미 열린 창을 찾는 조건에서 '/andre99/' 하드코딩을 없앴다.
   registration.scope(이 워커가 맡은 주소 구역)와 비교하므로
   GitHub Pages 든 Cloudflare Pages 든 커스텀 도메인이든 그대로 작동한다.

   [2026.09.29-A 변경]
   서버가 보낸 시각(at)과 받은 시각을 비교해, 3분 넘게 늦게 도착한 알림에는
   「N분 늦게 도착」을 붙인다. 폰 절전 때문에 늦은 알림을 제때 온 것으로 착각하지 않게.

   [2026.09.30-A 변경]
   크롬이 알림 받을 주소를 바꾸면(pushsubscriptionchange) 새 주소로 다시 구독하고
   서버에 옛 주소 → 새 주소를 알린다. 예전에는 기록만 해서, 서버가 옛 주소로 보내다 실패했다. */

const SW_VER = '2026.09.30-A';
const API = 'https://andre99-ioma5uwke8ugrgay.jhw5282435.workers.dev';
const APP_URL = 'andre99_mobile_app.html';

self.addEventListener('install', (e) => {
  // 새 버전을 바로 쓴다 (기다리지 않음)
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // 열려 있는 탭까지 이 워커가 맡는다
  e.waitUntil(self.clients.claim());
});

/* 앱이 "너 몇 버전이니" 하고 물으면 답한다.
   폰에 옛날 워커가 남아 있는지 확인하는 용도. */
self.addEventListener('message', (e) => {
  if (e.data && e.data.q === 'ver' && e.ports && e.ports[0]) {
    e.ports[0].postMessage({ ver: SW_VER });
  }
});

self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; }
  catch (err) { d = { title: 'ANDRE99', body: e.data ? e.data.text() : '' }; }

  const title = d.title || 'ANDRE99';
  let body = d.body || '';
  if (typeof d.at === 'number' && isFinite(d.at)) {
    const late = Math.round((Date.now() - d.at) / 60000);
    if (late >= 3) body += ' · ' + (late >= 60 ? Math.floor(late / 60) + '시간 ' + (late % 60) + '분' : late + '분') + ' 늦게 도착';
  }
  const opts = {
    body: body,
    icon: d.icon || 'icon-192.png',
    badge: d.badge || 'icon-192.png',
    tag: d.tag || 'a99',            // 같은 tag면 덮어쓴다 (알림 쌓임 방지)
    renotify: !!d.renotify,
    requireInteraction: !!d.sticky, // true면 누를 때까지 남는다
    data: { url: d.url || APP_URL, sym: d.sym || null },
  };

  // 알림을 띄우다 실패하면(아이콘 404 등) 최소한의 알림이라도 띄운다.
  // 여기서 아무 알림도 안 띄우면 크롬이 대신 경고 알림을 낸다.
  e.waitUntil(
    self.registration.showNotification(title, opts).catch(() =>
      self.registration.showNotification(title, { body: opts.body, tag: opts.tag })
    )
  );
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || APP_URL;

  // 이 워커가 맡은 주소 구역. 예) https://andre99.pages.dev/
  // 도메인이나 폴더가 바뀌어도 브라우저가 알아서 채워준다.
  const scope = self.registration.scope;

  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      // 이미 열린 우리 앱 창이 있으면 그걸 앞으로
      for (const c of list) {
        if (c.url.indexOf(scope) === 0 && 'focus' in c) return c.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});

/* 구독이 만료·교체되면 브라우저가 알려준다 → 새 주소로 다시 구독하고 서버에 옛 주소와 함께 알린다.
   (앱을 다시 열 때도 앱이 스스로 재등록한다 — 이 경로는 앱을 열지 않아도 되게 하는 보조) */
self.addEventListener('pushsubscriptionchange', (e) => {
  e.waitUntil((async () => {
    const old = e.oldSubscription || null;
    let sub = e.newSubscription || null;
    if (!sub && old && old.options) sub = await self.registration.pushManager.subscribe(old.options);
    if (!sub || !old) return;
    const j = sub.toJSON();
    if (!j || !j.keys) return;
    await fetch(API + '/sub/rotate', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ old_endpoint: old.endpoint, endpoint: j.endpoint, p256dh: j.keys.p256dh, auth: j.keys.auth }),
    });
  })().catch(() => {}));
});
