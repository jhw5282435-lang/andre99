/* ANDRE99 서비스 워커 · 2026.09.14
   역할 두 가지
     ① 푸시 메시지를 받아 알림을 띄운다
     ② 알림을 누르면 앱을 연다
   앱이 닫혀 있어도 브라우저가 이 파일을 대신 실행한다. */

const SW_VER = '2026.09.14-a';
const APP_URL = '/andre99/andre99_mobile_app.html';

self.addEventListener('install', (e) => {
  // 새 버전을 바로 쓴다 (기다리지 않음)
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // 열려 있는 탭까지 이 워커가 맡는다
  e.waitUntil(self.clients.claim());
});

self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; }
  catch (err) { d = { title: 'ANDRE99', body: e.data ? e.data.text() : '' }; }

  const title = d.title || 'ANDRE99';
  const opts = {
    body: d.body || '',
    icon: d.icon || '/andre99/icon-192.png',
    badge: d.badge || '/andre99/icon-192.png',
    tag: d.tag || 'a99',            // 같은 tag면 덮어쓴다 (알림 쌓임 방지)
    renotify: !!d.renotify,
    requireInteraction: !!d.sticky, // true면 누를 때까지 남는다
    data: { url: d.url || APP_URL, sym: d.sym || null },
  };
  e.waitUntil(self.registration.showNotification(title, opts));
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
