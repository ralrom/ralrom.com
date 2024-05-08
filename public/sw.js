self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("ralrom")
      .then((cache) =>
        cache.addAll([
          "/assets/website/logo.svg",
          "/assets/website/owl-beak.svg",
          "/assets/website/owl-eyes.svg",
          "/assets/website/owl-feathers.svg",
          "/assets/website/owl-pupils.svg",
          "/assets/website/owl-raccoon.svg",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
