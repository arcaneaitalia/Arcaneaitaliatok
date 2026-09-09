/* ARCANEA VERSION 20260909-02 */
const CACHE="arcanea-v1";

const FILES=[
 "./",
 "./index.html",
 "./style.css",
 "./app.js",
 "./manifest.webmanifest",
 "./assets/logo.png"
];

self.addEventListener("install",event=>{
 event.waitUntil(
  caches.open(CACHE).then(cache=>cache.addAll(FILES))
 );
});

self.addEventListener("fetch",event=>{
 event.respondWith(
  caches.match(event.request).then(r=>r||fetch(event.request))
 );
});
