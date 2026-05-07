// service-worker.js
// PWA対応のためのService Worker
// オフライン機能や表示速度向上のために使用します。

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});