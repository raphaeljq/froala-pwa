const CACHE_NAME = 'pwa-cache-v1';

const urlsToCache = [
  "/",
  "https://cdnjs.cloudflare.com/ajax/libs/froala-design-blocks/1.0.2/css/froala_blocks.min.css",
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css",
  "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
  "https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css",

  "https://code.jquery.com/jquery-3.2.1.slim.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js",
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js",
   "https://unsplash.it/600.jpg?image=251",
   "https://unsplash.it/600.jpg?image=252",
   "https://unsplash.it/600.jpg?image=253",
   "https://unsplash.it/1200/768.jpg?image=254",
    "https://unsplash.it/600.jpg?image=255",
    "https://unsplash.it/600.jpg?image=256",
  "static/css/main.de320ce3.css",
  "static/css/main.de320ce3.css.map",
  "static/js/main.959402d6.js",
  "static/js/main.959402d6.js.map",
  "static/media/avatar1.38f11781.png",
  "static/media/avatar2.2b64330d.png",
  "static/media/avatar3.2dde3e37.png",
  "static/media/avatar4.2f7e5237.png",
  "static/media/avatar5.f1f5a4df.png",
  "static/media/avatar6.815f22fc.png",
  "static/media/avatar7.da993183.png",
  "static/media/avatar8.54dd84c6.png",
  "static/media/avatar9.3e06f131.png",
  "static/media/cafe-3537801_1920.688edae9.jpg",
  "static/media/city-569093_1920.8575527b.jpg",
  "static/media/manhattan-336708_1920.5f9a4fa8.jpg",
  "static/media/tree-736885_1280.d1ba9782.jpg"
]

// A primeira vez que o usuário inicia a PWA, 'install' é acionado.
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Abre um cache e armazena nossos arquivos em cache
        return cache.addAll(urlsToCache);
      })
  );
});
// Elimina caches antigos que não sejam os atuais.
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          return caches.delete(key);
        }
      }))
    )
  );
});

// Quando a página da Web vai buscar arquivos, nós interceptamos esse pedido e servimos os arquivos correspondentes
// se tivemos
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (event.request.cache === 'only-if-cache') {
        event.request.mode = 'same-origin'
      }
      return response || fetch(event.request);
    })
  );
});