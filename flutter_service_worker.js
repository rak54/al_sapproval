'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5bab937f44e2cbfc65d29e513c31b451",
"version.json": "e1a810530d50a07deacecd86c50f8254",
"splash/img/light-2x.png": "d1d99b4148a1312e03eddc2795a2c30d",
"splash/img/dark-4x.png": "6c9c785ee7358db5091e105499a4ef3b",
"splash/img/light-3x.png": "d0db2e17630d4a8daa2670efbe20691f",
"splash/img/dark-3x.png": "d0db2e17630d4a8daa2670efbe20691f",
"splash/img/light-4x.png": "6c9c785ee7358db5091e105499a4ef3b",
"splash/img/dark-2x.png": "d1d99b4148a1312e03eddc2795a2c30d",
"splash/img/dark-1x.png": "0a151f04a7854cafe3d036dee06480dc",
"splash/img/light-1x.png": "0a151f04a7854cafe3d036dee06480dc",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "f5546f8bce6825d4865b6ce8c09c1d39",
"index.html": "56b0d6d507a5e715fb31a736b908aa11",
"/": "56b0d6d507a5e715fb31a736b908aa11",
"main.dart.js": "c4e47afb6eb4d4ebf2fe5feef07827c3",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "56ceafc6a6f057bb89cc2fde7f1794bd",
"assets/AssetManifest.json": "39e2e1e694c96b777f3c6af257bc3088",
"assets/NOTICES": "1186b8b45a7255b62444bf125f89031d",
"assets/FontManifest.json": "d77defbd17bf80c80a8de2e9c245fa2f",
"assets/AssetManifest.bin.json": "308ae3b361f8ff344424a7409fa37994",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0a3f71848992a7a5c99fd9a64efba34a",
"assets/fonts/MaterialIcons-Regular.otf": "e8a615b07530581a0982e8ccf2a1c7c9",
"assets/assets/images/Thumbs.db": "6d5c578149db247735dc1ad6a5c29797",
"assets/assets/images/confirm_pass_3.png": "36349a67bee167623ce2ebb6857407eb",
"assets/assets/images/confirm_pass.png": "1a2856f7208aa995be26ee13e709eeae",
"assets/assets/images/user_avatar.png": "682cea2b105dc504967c414bc0306b2e",
"assets/assets/images/forgot_password.png": "1637578c10df300a3fc28631298b48ff",
"assets/assets/images/clipboard.png": "3c756b639de3880da06b045fa94fcb98",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/empty.png": "a9d988cd6785918680f105ce032970be",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/stock.png": "cb097432348d4272e6184588e0f618f2",
"assets/assets/images/saloga.png": "37d4c28037f7ec7ea99b97ed1096dd25",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/bm_img.jpeg": "014fc434c7121d13d0e7cb2884d753da",
"assets/assets/images/bio_image.png": "d3a4b3063a438344cb34eda5565e4fdb",
"assets/assets/images/user-img.jpg": "0fccfed352f5e439d898dde94febde25",
"assets/assets/images/monitoring.png": "73ac362e9995113ec58d47d6317152ba",
"assets/assets/images/round-table.png": "92688dd549b7e5e34a0ae6602ac9c105",
"assets/assets/images/placeholder.png": "44fe0097d867fe9f87f7393eda55c437",
"assets/assets/images/documents.png": "b1bbc003e08649dd613a640ef3fd3f8f",
"assets/assets/images/splash1.png": "dd93f2d560e0a0950d8f681abe3446c3",
"assets/assets/images/splash.png": "dab311e4b0cb5f337cb37afbf1ae9106",
"assets/assets/images/splash3.png": "d9b2e4098cd5890a149de4f7f4b27070",
"assets/assets/images/password_forgot.png": "7a7d2a5e141e1a64bb8f0283dc6863df",
"assets/assets/images/salogo1.png": "07d2acc4e6b04ac47207de53ffe0b50f",
"assets/assets/images/splashs.png": "46313aa8f1426f64cefdc82c3dd0609c",
"assets/assets/images/logo.png": "f362d52acf20b208fc0a7448d7ba3b80",
"assets/assets/images/forgotpass.png": "bfc3c6f2bd08bfcc094290908575d73e",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/pdf-logo.png": "d63049de11240a69563087ac699f8292",
"assets/assets/images/salogo.png": "514ea0cc70d5fe6a37f01fc8ece81724",
"assets/assets/images/interFace1.png": "cd8a44e8d0af949a031c0ea83958d623",
"assets/assets/images/interFace3.png": "25e4c23657b1dac674e352d274ad8b2e",
"assets/assets/images/al_bkg.webp": "6fd4a32bd3c07a04df2452aaa3ab08e3",
"assets/assets/images/approval_bg.webp": "13c2ec951b0b53ea8c6c51789e79f7ca",
"assets/assets/images/forgot_pass.png": "df00004d4af70caeda669a8278bcb766",
"assets/assets/images/updated_sa_logo.webp": "5c19730255eaf279114a729ee188b4fa",
"assets/assets/images/interFace2.png": "c101d35e907f00f40900fca7f9c4c69e",
"assets/assets/images/otp.gif": "e43409b4d81b20d31994baac31eccf97",
"assets/assets/images/box.png": "11b367225c7b90a8b1e136e5b95e97b2",
"assets/assets/images/al_logo.png": "94cc53e93fc4b0378f685c96c1d8d7be",
"assets/assets/images/burger.png": "c9bb52efd1e4573597f65c51c670572d",
"assets/assets/images/interFace4.png": "aeaa1e1b0de05128ab97337e9a73c25c",
"assets/assets/icons/branch_expenses_icon.png": "c4070b53c2def581912d66ad70228df0",
"assets/assets/icons/otp_verification.png": "e9fb5ed20ea94dfcfa73c265271d4233",
"assets/assets/icons/document.png": "a341d598679d1535425a0365b7940cf7",
"assets/assets/icons/user_signatory.png": "cd10701f56e628dae2c0ae4f0bc8e365",
"assets/assets/icons/icon.png": "a9924d4fad9d9275414ca4d660f56026",
"assets/assets/icons/decline.png": "804cb5b00619a649eeddb1703415ceef",
"assets/assets/icons/sapp_app_icon.png": "2555c89ae73a21d2442716b97fab3423",
"assets/assets/icons/sa_image.png": "87d7c649afddc396df9970dbae1c08bb",
"assets/assets/icons/user_meal.png": "383e535d4693dd82bb436b1bb1343e6d",
"assets/assets/icons/approved.png": "7cc1fc87cfdc442acea970a996428f5d",
"assets/assets/icons/iconn.png": "e96d7d00f1895cc03e84bfc4dbeec9d7",
"assets/assets/icons/finger_print_icon.png": "e1dbf41f7163029a3aa63d05831a9afc",
"assets/assets/icons/settlement.png": "110a2c334ecf8f7a401ee3030c22ac6f",
"assets/assets/icons/user_inventory.png": "fb215e9da912a39894829d513c543062",
"assets/assets/icons/agency_hr_icon.png": "bd2c16e745e19ba2291747055bfeca86",
"assets/assets/icons/logout.png": "3c38aa75bcf06c80c549e5e5b82ab9ba",
"assets/assets/icons/hide_password.png": "c47c2a0bfc7fcace38ec336be13d1bed",
"assets/assets/icons/approval.png": "50311f1ae42c3e964c273c6ccf024477",
"assets/assets/icons/interest.png": "54b15aa8479f884906a816fb9afba4aa",
"assets/assets/icons/change_of_report_icon.png": "704d3b3b98627c20153aa2430c30823d",
"assets/assets/icons/revert_icon.png": "2406f1c68e4a780adeee1604e181f574",
"assets/assets/icons/forward.png": "06eaca6c302b63ef10d5ef55ec8169ca",
"assets/assets/icons/activity.png": "ea396c09924f6ee49538b958f4df200a",
"assets/assets/icons/bm_icon.png": "26aa8670572229c78042d3b908aace8d",
"assets/assets/icons/user_payouts.png": "8ed4b388cf91fd45bba1fa2b50f2f8f1",
"assets/assets/icons/interest_icon.png": "26d75388c130f7b0523cc2e34efab4a1",
"assets/assets/icons/user_rop.png": "bc30c8357d67da339205e626fbad3567",
"assets/assets/icons/drawer_menu_icon.png": "20848770f54c4eda964b77b0cc39c27a",
"assets/assets/icons/rop_sig_icon.png": "412110b3accbf0745986a48275dcb752",
"assets/assets/icons/sa_app_icon.png": "4e3eab654dc520098908f07d71b7a4cb",
"assets/assets/icons/show_password.png": "6736cdec64ceabe672f11476bcb6e541",
"assets/assets/icons/biometric_icon.png": "b10f0c33432115a9b02ff81974fc201c",
"assets/assets/icons/user_iou.png": "09fe6177608af5210350dbfab3ec1399",
"assets/assets/icons/user_activity.png": "d04f5c2c11567e4ee9ed190edd5891f3",
"assets/assets/fonts/OpenSansCondensed/OpenSansCondensed-Bold.ttf": "cfd3dce57f28f5955c90fc5b5385d4b3",
"assets/assets/fonts/OpenSansCondensed/OpenSansCondensed-LightItalic.ttf": "d828c28462d9842695ba992b521389c3",
"assets/assets/fonts/OpenSansCondensed/OpenSansCondensed-Light.ttf": "3589bddbe338e444d408f4dbc545ca1e",
"assets/assets/fonts/Ovink%2520SemiBold.ttf": "08685c242e5b63e896db015b49173542",
"assets/assets/fonts/SegoeUI/Segoe-UI-Italic.ttf": "5eb716ee36ae3ea66de512bcb63af3d8",
"assets/assets/fonts/SegoeUI/Segoe-UI-Bold.ttf": "65099f98c7cb19b3dac57b15a6a708cf",
"assets/assets/fonts/SegoeUI/Segoe-UI.ttf": "0e7e9a9b5c4abaadef7bc8f4e4574084",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/assets/fonts/Zemestro/zemestro_medium.ttf": "af792d6f108816b38d6e36a0eb94b0a2",
"assets/assets/fonts/Zemestro/zemestro_regular.ttf": "3d7bd6c43e09607d118a3ae06a895ec9",
"assets/assets/fonts/Zemestro/zemestro_bold.ttf": "07203adf179b24aa2d2f0e942d5d19f1",
"assets/assets/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
