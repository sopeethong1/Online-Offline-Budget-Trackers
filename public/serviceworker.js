self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "index.js",
        "db.js",
        "manifest.webmanifest",
        "serviceworker.js",
        "style.css",
        "/icons/icon-152x152.png",
        "/icons/icon-192x192.png",
      ]);
    })
  );
  console.log("Install");
  self.skipWaiting();
});

// retrieve assets from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
