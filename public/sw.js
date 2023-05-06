self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("ralrom")
      .then((cache) =>
        cache.addAll([
          "/assets/logo.svg",
          "/assets/owl-beak.svg",
          "/assets/owl-eyes.svg",
          "/assets/owl-feathers.svg",
          "/assets/owl-pupils.svg",
          "/assets/owl-raccoon.svg",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
