/* ANDRE99 서비스 워커 · 2026.09.18-A
   역할 세 가지
     ① 푸시 메시지를 받아 알림을 띄운다
     ② 알림을 누르면 앱을 연다
     ③ 앱이 물어보면 자기 버전을 알려준다 (진단용)
   앱이 닫혀 있어도 브라우저가 이 파일을 대신 실행한다.

   경로는 전부 상대 경로로 둔다. 이 파일이 /andre99/sw.js 에 있으므로
   'icon-192.png' 는 /andre99/icon-192.png 로 풀린다.
   폴더 이름이 바뀌어도 따라간다. */

const SW_VER = '2026.09.18-A';
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
  const opts = {
    body: d.body || '',
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
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      // 이미 열린 탭이 있으면 그걸 앞으로
      for (const c of list) {
        if (c.url.indexOf('/andre99/') >= 0 && 'focus' in c) return c.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});

/* 구독이 만료·교체되면 브라우저가 알려준다.
   지금은 기록만 하고, 저장소가 붙으면 서버에 갱신을 보낸다. */
self.addEventListener('pushsubscriptionchange', (e) => {
  console.log('[a99] 구독이 바뀌었습니다. 다시 구독이 필요합니다.');
});
