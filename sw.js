const CACHE_NAME = 'ticket-app-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/sindorim.png',
  './assets/sadang.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/bus-anim-01.png',
  './assets/bus-anim-02.png',
  './assets/bus-anim-03.png',
  './assets/bus-anim-04.png',
  './assets/bus-anim-05.png',
  './assets/bus-anim-06.png',
  './assets/bus-anim-07.png',
  './assets/bus-anim-08.png',
  './assets/bus-anim-09.png',
  './assets/bus-anim-10.png',
  './assets/bus-anim-11.png',
  './assets/bus-anim-12.png',
  './assets/bus-anim-13.png',
  './assets/bus-anim-14.png',
  './assets/bus-anim-15.png',
  './assets/bus-anim-16.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
