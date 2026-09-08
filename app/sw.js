const CACHE="arcanea-v1";

self.addEventListener("install",event=>{
 event.waitUntil(
  caches.open(CACHE).then(cache=>
   cache.addAll(["./","./index.html","./manifest.json","./assets/logo.png"])
  )
 );
});

self.addEventListener("fetch",event=>{
 event.respondWith(
  caches.match(event.request).then(r=>r||fetch(event.request))
 );
});
