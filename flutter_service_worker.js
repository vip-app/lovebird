'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f1b98e1f9c8c4afcce0d1a70a63ef128",
".git/config": "50bd18116c3d8d4810755d05cb71a6f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e059f26abcc2c3036b7c2c3d399f681",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb2cc2dac90ff5bbfd46cbd9cf025bc3",
".git/logs/refs/heads/master": "fb2cc2dac90ff5bbfd46cbd9cf025bc3",
".git/logs/refs/remotes/origin/master": "57c3bdf0cc011d98eeca2eb06aa7be7c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/5310b38cf920a80e4c6e2f0bc3751ef35bd190": "86d4560b4409be8581e61ee96c009a31",
".git/objects/16/6096f8b964d39987c742c1a474f45899d1c437": "9432a6d09f0abbf7403f838b58b2aca5",
".git/objects/20/76d6eaa0f2d5c934f2f194f2789d5064b00915": "eb842ce977291c85547ec22b9f177964",
".git/objects/21/f7ba757cf8d20c00fe6a323f45a2a53ede12c7": "05bf663ea1e7d3dbc13702e5c9e32845",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3b/8aee26f1022292993a95eec043f89c3e4655dd": "4ee3f6235574f1460eabc043a475a7fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/59/47661856ace282055359b16da8a178e93f3c03": "2f3c3f3e27ac077647a9320f8eb98c03",
".git/objects/60/245259bd082778468abcd2aa7a06332fcfa7ee": "0a4d892a63bc3455a4cb6b02ce307039",
".git/objects/6a/9e755ac75f839958b7a9237012ab9bbde52ddc": "b8b039ad45d2df66c650d4e51a73a0a1",
".git/objects/6d/e4e81d2f79b5035ed435ab005ba146f4330e9f": "aca10a26dce3cb0533bdec932823691b",
".git/objects/6f/792567682a759a0010b00deadf8bd70f0cbcf4": "9c9a0397868d23037440c8de0397c0d2",
".git/objects/73/a09db2755bfa3efa29e9e9a26d31b1a7fedb07": "cd452e2f8a94df8cb864ff0a0f9831bf",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/99/b8502fdeab026b6111e20f48db87becb85cca2": "14d4f81feeb8515ca278f28308f4daa5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/bff30b47c1bce82b3040f8b523a7eec0cfb04d": "f17865ad5faabb34fa36fb211630842a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/5d12a380c7ba7b9010f6fdb5e0845d87302225": "2f50c0302d80818efbf0652335c71cfc",
".git/objects/af/eda230a448266514fb45cce79f96b3ca0368a3": "08dc379263c2b78edd8c65a3e70b8e1a",
".git/objects/bf/695152e455297fff96d2e117c8214e8f6d6fc8": "a047773d85a405e8cc4065278d163784",
".git/objects/c1/cdcd3aad7138f50513a92eb3851f4ae0634288": "be825ad7a7da8502ff5336ccfa772306",
".git/objects/c2/d14e51a1edaf28ef227ad3e5a6585a02b449ac": "f8361a2f11a7d39b4fc0abe94a72902d",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c8/79fb522f4437759b8a03d0d0cb5de2785d8676": "7c403e8ae1d6a8f028cb09eb27c42ba1",
".git/objects/d0/5be232fe34eca4862ea4de79d8d40dee110500": "7b80bc92394c58786d402f44922c8bb8",
".git/objects/d5/21fbde94661b362d3feb29346e4bcb6c2b4362": "70e646839c72f7b6853a946091076d06",
".git/objects/d9/6c8611363fa4809e0eaa0b9ebbfbeb7b3f7e11": "a05f53100f94d56a596e12cba199d5ef",
".git/objects/de/11c0938bcc4fe98806e15522a3e3753d5e20f0": "e5fd4c3df0e2111d3e27511ba41642fd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/85650e61afb75e6a7088bd483fcaa9eb5c9e89": "eb63b3591b2b3b3878fae10abcfc4581",
".git/objects/fc/1ed02050fc663aee1df6481649d25e295e2201": "6e5bddcb7687e0d8e5dfd2a3246f547c",
".git/refs/heads/master": "1ab96c815b5688491a5114501dd2fce9",
".git/refs/remotes/origin/master": "1ab96c815b5688491a5114501dd2fce9",
"assets/AssetManifest.json": "f944cfe52573769e6304f04e625c76cb",
"assets/assets/images/Thumbs.db": "462b2cb312a1c32ef6b5a82010bb7d20",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/loading.webp": "a3ee1f8a24d92d7bb3b7c0733e170db7",
"assets/NOTICES": "c7c3293d2793576bde86aa39bec33d15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/Thumbs.db": "e778c375a6ffc922a675e3e655722158",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "1ea85e7f254cd08a49ceae7f508c7cb6",
"icons/Icon-192.png": "c966814a50c915597c57f83be96bf9aa",
"icons/Icon-512.png": "4bb9343e04858ae9988012eb71ca4bb1",
"icons/Icon-maskable-192.png": "e422f01dbf6017ee27bcabfd70b06e85",
"icons/Icon-maskable-512.png": "93dcfc788476cc790a682fe5b6ce8bd8",
"icons/logo.png": "456dc6dd9a304d23e6562fb0b69145ba",
"icons/Thumbs.db": "f28e1a2e795b5a70d61a0fd8c37b9134",
"index.html": "3759e37002022f8aa9ed214ab2d10b71",
"/": "3759e37002022f8aa9ed214ab2d10b71",
"main.dart.js": "862697f2d0363840e19af957882eaece",
"manifest.json": "400a7a0fc170366b0786d75ac5f11348",
"Thumbs.db": "085c30c79e9a06619cf93ac2c45bae45",
"version.json": "0ae70f99c5c79b07c3a4c34e068358fe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
