const CACHE_NAME = 'stanley-stories-v1';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './style-mobile.css',
    './script.js',
    './manifest.json',
    './Art-Stuff/full-family.png',
    './Art-Stuff/192familyphoto.png',
    './Art-Stuff/512familyphoto.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Server Worker: Caching App Shell');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) =>{
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Server Workers: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});