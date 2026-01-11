

const CACHE_NAME = 'My Planner -v3';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon.png'
];

// Install the Service Worker and cache files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Serve files from cache when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});