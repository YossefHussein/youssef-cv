'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "ef3a9838926624caa44817eb56bd080c",
"index.html": "330736ecd374ef781885ea4fb297ad12",
"/": "330736ecd374ef781885ea4fb297ad12",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "7ded2eb8513ed75a33dd4eb586a18b11",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".git/logs/refs/heads/main": "eee9fd883b40a7e0f2cb3be0a5d87eeb",
".git/logs/refs/remotes/origin/main": "056d3d0d72f8cdac171a7f387eadb787",
".git/logs/HEAD": "48fbdf91efcc799f031656093d6eb3f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/refs/heads/main": "7ddf81b3b279ef9bb7b2106e03f2985e",
".git/refs/remotes/origin/main": "7ddf81b3b279ef9bb7b2106e03f2985e",
".git/FETCH_HEAD": "6b496b5985c8e4ddf9c6493c2392cc71",
".git/ORIG_HEAD": "7ddf81b3b279ef9bb7b2106e03f2985e",
".git/config": "7095b80ef42e037e9c7258e8d10095e7",
".git/index": "43d746e5cc6c3508cac6bee8f05d88fb",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/89/dc60ea4938f13e27986a307c4e97238ad820d9": "0bedb518883344792238fd13429addf2",
".git/objects/6a/e519d46ec752b9145d3f6d8ec754855a6b5e28": "775e169e3033024a8a97fe65af83456a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/77/8eb8120d64bb3edec73f7a72d03ed42275b71a": "fa2e29d72eeb50be978ffef6e20b02df",
".git/objects/25/64e456fa2045a3ce30a238e0fbc659c2b4428f": "e8637fb4f493985985021959f6e30ea6",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c8/794f1bdbad3991eae6a1a6e9fa0ccad17f4d78": "e9f00986ba4ebcf697e66803f0a603cf",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/4a/37a2ade101382b315b0ff8037011ffdce429aa": "d10c4c3ed8c25fd9937b50896239b838",
".git/objects/11/48005140466d740e1e4423baa837314a182737": "2f4a856db939bea13bc3bd3e3887f6bb",
".git/objects/a8/305645fe1c7d329ca9f51fffb373fb88bf1f6c": "bf5ec3168ffdeeceded560bc81e60bc6",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/b3/e6b1efbcef72f287c686840ef85dc37b8fe3d1": "a9561182abf0ca1fc1594f5c171d7eb7",
".git/objects/a5/83bf30c1901a220b4483ac74a72d928e4f9ec4": "c51f16ec2751935ac672b9cc4b030384",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/0f/af8f7092aa943aee4108276b21bc6d99b17c62": "083da6240ff3f1daa83115cc6f3291c2",
".git/objects/78/dd168da50bfe75777a7cc0cb4433f342914253": "f5b927699180697d605c0c71cda0a26b",
".git/objects/78/283a13d8c41a6d907ebeb88eb6d99b2033c46a": "1d1137bcbf9c22f636d4e8013f2cd653",
".git/objects/a6/0ee8e3020c41e4420ccffd3a250576e893bf53": "e300936320b8e344d106f7d3b669c971",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/d8/c01855942c43169233de72be62dcc035e00b13": "50fd9b8a3647f781fabda1e15b931ef3",
".git/objects/38/83e98793f996e091c2df6e98d2b186c9bab2e1": "364d36f79103abf55f5cd169b552c522",
".git/objects/40/9e0de436cb2bfd9393495eb8198e81e2284dd5": "8296ca222321f246f272984db46ad63d",
".git/objects/51/5bdfa8aecc86d9ab8c47e9cc35c68f76ea56fc": "08bb784b2870cafef9bbf5212e3ba95a",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/033e802b75b562f36530278ba078369786b1cd": "efbd34aefaa849956c3fdbbb39dfdb22",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/7b/76cad78e9dbca126d861800686b9f06a00d43a": "fc471a125713d6c11bceab1cc0dd7b27",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/5c/152d3224203173f8fd6a22e800d1ca8df205c0": "dd5f442850090fd24fb8bae2abb64e83",
".git/objects/be/a9c905df399944ca762fd8409d79a6878e3dbc": "a8a49acaa88c4e643615e7b07781ba68",
".git/objects/69/86905259b6dd7abc7e7ce090ad9e6ccdb5fe25": "4f15e756b34444999c689c9e1e58a994",
".git/objects/69/fec39355dc3c40b627bf750b60de881f930a97": "818c231d5f3aa9161120a7032c1bff7a",
".git/objects/99/2eb207df6affc1eb7e90f55a3dac77430f38a4": "76010faf5559a503929ce4e33f860767",
".git/objects/99/bbcc6f596c8b1b9d136255e4aaa6d8b39acc5f": "f167da2c29da406293605f0121649965",
".git/objects/99/95d602fbc74513a8431ea4efe31cffaecba0f8": "6467bb1d07e980de2cedb9f392cb144f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/90d47069ebe299ec4b34fcbdc6275e63b5b443": "a6e35ddad28c659f52afab42c81bd038",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/66/0b44dd804a2c4d09a99dd00124faa4018caee6": "d319b044aebec64f248066f1c92b7d51",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/17d475007639999ad3a23508c46b991eac458c": "9cbcf6b715e6baae6a526625f4c787c8",
".git/objects/76/a9dd788fec5279a2a74cac129e32cb6ff494ee": "74c38908190d55e3576e366966ce8565",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7a/7775002f7a389d91b13d5a5b8b9323b208d7ef": "f802c556c98b0eb0d13503c8203d03f9",
".git/objects/74/71201fa3d362853526db67084b470edf80f2fb": "bb39c1bc324073c42f2bf3b2ccc1d0fd",
".git/objects/74/9808db78a8ca3b467d5464eaa099682439d05b": "1578dfdb76d686066d887c0daf4951f9",
".git/objects/6f/84e5661ff41e74530ebb326048b6a8f44c41c8": "a40a6ce359748f2f237c5ed9f9a20871",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/23/838d0699e37d6f194baf27bd6737635b90e14d": "13b95d43e0cb16b39ede515140613a97",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/18/18aab93a1db88e164d347bbb8f7a6b8a628356": "db366b0cda0c92e6e2d65f6dc4cb47ae",
".git/objects/1c/4fe2f8f96cd2886604d0461976e5e401e899d7": "f4981952873ea3d2082062b4d97ff69e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/91/711f64c04014492218b465847259e9138e1f1f": "542090de03740786dac379bdef56c663",
".git/objects/91/bb7e3315af153ab8fa98546cc32b8150c1d4bb": "5cdc47038d2dd8ceabe0a8d3d39430cb",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/6e/b2c49106e51a817b36a4e1375917485d17a046": "cdc7a9dfe0a23395c73d035dbe93321d",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/3dcbb420938b7ec0a16865a227dfaa057ab41f": "c96dc1540c4221eb114f6e07e61fdd06",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/45/215aa2f7d281ab19c17b6471ccdb917057c7ec": "01e8ed39411fb72fdb58105a1db6052d",
".git/objects/45/2d6eb853f4c2b25ad5da47c8a110f13913d60b": "15b292b5103d00341a2b003a7085878f",
".git/objects/45/64ed15e5fc8b887ccce29ecb224bf0026dee89": "48ed4ac128046b076dfbba8b519f84e6",
".git/objects/45/7dd06b5833886e2acb52f5aa976ef74d5f4313": "3d4924b0867a79f9b1595944212f13ac",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/16/5136b6b78f903b2982a0b69a7534214439acd5": "47f69b7e683c05aa431eb0e6abfc55f0",
".git/objects/16/e6b99ca62e12b2ae484ece69269a081426d498": "5781ecd69814c50e85e0c1adf5fa065a",
".git/objects/06/84ffc358409525253ac1c92677d9a4eaf001d8": "0941c4fb0e9af6060a1aa381f41d6a42",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/4e/cff6337f67dabbbbcb6291c217a73d12fc2650": "6b75f13722739e4920b0f1d10929cb50",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"manifest.json": "69b31179c5eab136d575a051085e2c31",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"version.json": "967a5cc953b77a60c0d1a8b44aacb5fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
