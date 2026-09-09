const CACHE_NAME = "arcanea-v20260909-04";

const FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.webmanifest",
    "./assets/logo.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys =>
                Promise.all(
                    keys
                        .filter(key => key !== CACHE_NAME)
                        .map(key => caches.delete(key))
                )
            )
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {

    const url = new URL(event.request.url);

    /*
     * JS e HTML devono sempre essere aggiornati.
     * Non serviamo mai una vecchia copia dalla cache.
     */
    if (
        url.pathname.endsWith("/app.js") ||
        url.pathname.endsWith("/index.html") ||
        url.pathname === "/Arcaneaitaliatok/"
    ) {
        event.respondWith(
            fetch(event.request, { cache: "no-store" })
                .then(response => {

                    if (response.ok) {
                        const copy = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache =>
                                cache.put(event.request, copy)
                            );

                    }

                    return response;
                })
                .catch(() => caches.match(event.request))
        );

        return;
    }

    /*
     * Per gli altri file:
     * cache prima, rete come aggiornamento.
     */
    event.respondWith(
        caches.match(event.request)
            .then(cached => cached || fetch(event.request))
    );
});
