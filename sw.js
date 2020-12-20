const CACHE_NAME = "v1_cache_gradient_gen",
  urlsToCache = [
    "./",
    "./?umt_source=web_app_manifest",
    "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    "./img/favicon.ico",
    "./img/favicon.png",
    "./img/icon-32.png",
    "./img/icon-64.png",
    "./img/icon-128.png",
    "./img/icon-256.png",
    "./img/icon-512.png",
    "./img/icon-1024.png",
    "./https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    "./js/main.js",
    "./js/mountApp.js",
    "https://unpkg.com/vue@next",
  ];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        const cacheResp = await cache
          .addAll(urlsToCache)
          .then(() => self.skipWaiting());
        return cacheResp;
      })
      .catch((err) => console.log(err))
  );
});

self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1)
              return caches.delete(cacheName);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }

      return fetch(e.request).catch((err) => console.log(err));
    })
  );
});
