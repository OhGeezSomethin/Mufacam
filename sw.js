const CACHE = "cache-m-cam-v2";
const CACHE_FILES = [
    "./",
    "./index.html",
    "./src/master.css",
    "./src/index.js",
    "./manifest.json",
    "./images/logo192.png",
    "./images/logo512.png"
];

self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open(CACHE).then(cache => {
            return cache.addAll(CACHE_FILES);
        })
    );
}); 

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))) // Delete old cache
    .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});