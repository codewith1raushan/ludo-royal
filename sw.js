const CACHE_NAME = 'ludo-royal-v1';
const assetsToCache = [
  './',
  './index.html',
  // Agar aapke paas aur bhi CSS, JS ya images hain, unke naam yahan add kar sakte hain
];

// Install Service Worker aur files cache karein
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch se offline hone par cached files dikhayein
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});