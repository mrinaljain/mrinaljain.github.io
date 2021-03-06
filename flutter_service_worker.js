'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4f605e54f7c2f7452fdfcba52a5fe233",
"index.html": "009a6ae6171c399a0c7967bcc65c5c9f",
"/": "009a6ae6171c399a0c7967bcc65c5c9f",
"main.dart.js": "c8c41c07d3773371dd437ec5fb4da59f",
"README.md": "ef41aa8f652d5f68c37f7386155e1792",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-29.png": "cc6e5efd200b3f06cfa11fd5fff778fb",
"icons/icon-16.png": "ef32f7807168376638abfc69ec676a15",
"icons/icon-256.png": "298c3e47fced76630776d20920c74c23",
"icons/icon-120.png": "320589d392a7694ee2d9072e6055dbec",
"icons/icon-88.png": "e9a441f6a7375b8994667433800fe290",
"icons/icon-144.png": "73a3ee80b3c14ab10263148d2dc03bd0",
"icons/icon-76.png": "596d511d4b6ce1c07392e8997060d9e4",
"icons/icon-60.png": "81a8adfd7ce0295bdba7c1d84807de43",
"icons/icon-48.png": "4f42e708612aba23713168a8d549a689",
"icons/icon-1024.png": "76831d5e4fd37cc6b80b82fdeb1e74c5",
"icons/icon-152.png": "8d40ece4c2a44b4d43fe337be74446a6",
"icons/icon-180.png": "4daa0f27bd6b9bd9cd4c294657a61cb9",
"icons/icon-64.png": "de52c525562655bcde07f310db1dc1cf",
"icons/icon-58.png": "e04a1d00d0626cdadf46461b67150b5a",
"icons/icon-72.png": "bdad60c3e023d6c51fba626af09d0fce",
"icons/icon-196.png": "e72a33016d3c4cc4b7e51a76f8845e97",
"icons/icon-80.png": "5d63f0860ee6061ebf5d32742bfc54f2",
"icons/icon-57.png": "12e9e04d9c9105e87af1d70f7c6eeac9",
"icons/icon-55.png": "369cb6ea834ebbcc72f60ef668962cfd",
"icons/icon-172.png": "9f1e9896f49e07ef65531b210d927f4a",
"icons/icon-167.png": "b455045a2dbe7369a73299ef84c2c6b2",
"icons/icon-40.png": "bf6a779fa04fec4e6745071aa62b3d67",
"icons/icon-50.png": "d8ace7d27aaeab254e67572fdd550873",
"icons/icon-87.png": "c0afa6cb051af5b7a5a8453e10e805c8",
"icons/icon-216.png": "969c53b9c24d99f59cf1f35f1536cd03",
"icons/Icon-20.png": "2dd7e57fed276423e5c4983318ee777c",
"icons/icon-128.png": "55777183852ff878ef419e98b0740f5e",
"icons/icon-100.png": "99e8439dc93d9865d89a0f72af4bbc06",
"icons/icon-114.png": "173bf1828855d3b6f1ecc6cc15d49949",
"icons/icon-32.png": "f616b9e895024e00fb6d5bfaab36cefd",
"manifest.json": "6eb8857967e9be73511e57486beec3a9",
".git/ORIG_HEAD": "f3bb5340f53f01b9c1fc47dcbd56e89d",
".git/config": "0285e4284742c72da063f80d7087829d",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/7ebfeb728d96ad056c6516413d6dce54d6fac3": "93987e86cf65e9816a9984b25f64b341",
".git/objects/3b/3b7f79531734a3dfee87a4f951741f1dd14ca6": "0bd84adcefa46ce8084a1172355288f5",
".git/objects/6a/fe23793124ae073f52b664e25e2bdf3d729ea7": "e87540e266bc8c7612b93f70a96b269e",
".git/objects/32/08e7a997d910e3cf5930b776c67d02d64f76b3": "abf5c37860f6befb7833b1a308e8d854",
".git/objects/0b/ee0086d05b7f84990d59d3746cf4f91c26c596": "edbbe6aedc40abdcb85dbbfa74314d47",
".git/objects/34/c28c148417e4e33068c19cf72ec8964644826d": "01a0b0fbedea180148d36754071c5f1e",
".git/objects/05/ac7f7d709ce86118e8ccf666201889977c609a": "dc2e4d7497920d2f7210e765c97e6045",
".git/objects/b2/c63675ec9c431057471ce325c5e43ff9baddd5": "154e3ad7946fb45baa0478477845c8e5",
".git/objects/d9/a611eaf0d9eaf18fd2c3c9d6417272f6a771cc": "4f4edec4b10d92d82a6a25cc20003b7b",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/698f496cc4df366701c8e8eecdad2123de1a77": "3203d5df69ee9470a4de8b663f144fd7",
".git/objects/f4/9a1909191a9a6ef8b08e1feb802a4ade320b60": "e20505fb2de62347847fb3fb5b218ea2",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/da32916db8b871d2430806395e3478f0e4b87d": "0211995eeafb2c4ec3450b0fc4eba54e",
".git/objects/c1/0dbfa1c8787a390613757344c7160284a05433": "01be6e28e70bf9ed9736480ea5ffe02e",
".git/objects/ec/61198806fc8fc9c435c7bcc67ab85a64eb899f": "48d0208c67cd45aa77918d73cc9545ff",
".git/objects/4e/309031a8677b189863f5f146adae05a3d35a44": "b9d0968b327fd569ca61a2f3afc6763c",
".git/objects/20/917c31f24a0e6674e42ad4d34db2a573fe9255": "6f5be3fad1404df40c81face147ebed6",
".git/objects/20/d70fa40d3b22c405aaf63f9c92224743cea7b8": "491f6b9d178be0e57db4df723ec64b83",
".git/objects/4b/8a4c8dfb3cacd4111b86f41e23c2d37965209e": "869dc1933cd69a598fef67125576c273",
".git/objects/73/be2c52aa8625b728be8fb1177022fb2b6290b1": "5d940c9552736cb57d72be59c70ee150",
".git/objects/73/9ef5e8c609ae4ea8f4911a2f69f36bb5b991ac": "4724a05cde9748d09e25a99b8bd3b056",
".git/objects/80/9abe022571b80751e6e6ad6c1c70f6b2d33751": "ecd700aa339976f823c43687d5028da2",
".git/objects/17/c1fe425d76b95d6d64c0c3fb312be2d47c48dc": "4e05a6c88798b905610ca2f7e00ed887",
".git/objects/7b/18f427c1cb7b08577fa7ca7f154962141fea8c": "e1866a436508f7c0c10a836967ac88a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/cb29675d2c6bfff2ad41549c582f6f3e290c24": "4bebe5b56a272b41287dbd24004ef8ba",
".git/objects/2a/ab27f178884f6d7ae7ebc5b6cc45a3ee0f4c27": "dc32d020eaf4293e20cd2b813538795e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/bbb81313918a59857c25f2f5da84f8d3b61115": "482385beeffa2c219d0acc6239c889b1",
".git/objects/5d/9ef57a2eb01a3bf5df6e73f07644c4b5808f63": "2aea96a85b08d9c3c346fe8a070bc1f5",
".git/objects/62/552deef039daa72b17838d0d597c1b08b40c1d": "4f4acb28219165d239289c77d97b72db",
".git/objects/54/c8c552e63b0f0ebf7255e3dbd03a30e45c9219": "1fc09c9627c5a98587021cc781369ae3",
".git/objects/5b/393f3312379ab0eadb6866662f911040657ac3": "af6f6e9a9a29f2ebfee022841b3d0322",
".git/objects/08/a2b207ee3387f461594ef62d5491b00310714b": "2dbbb9fb9bf99f7675e94e3f15a18a3e",
".git/objects/6c/94c9a77f46730c66ae3b0b3539e4202389b094": "d7fa40b31d7f68c17b4356b2dd33c2d2",
".git/objects/63/b4100508dc3f8af1b52f85604a3757352c608f": "50f2640fae2341718842d7d2ae950475",
".git/objects/b6/2bff12b986d2933dec435732e245e8aaa329b9": "4944435a0652dd0513420b1ad7d60830",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/af/61934c6ee51baf2c65667cc572da85b2384ed7": "09179956ae023e2aee1c4b849827e8b9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/839a88e13946676a9cd0a6a9442d99bf7c4c6c": "f7c6c0d6c7ff9ace8cc545ed835ee50d",
".git/objects/ea/f80c19f36dcdb25a65edd06c6faef9878fdd2d": "d9b4f0626c2c124c39a2e026872d978a",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f9/4390c707421410219214c5768c368cb1a79418": "b2e18d14ddbca5f7cd1e3ef08186c076",
".git/objects/ff/658f2d0e721449916b0a9ccb04e0c3113fc582": "df367c954cc5ae378743950aa25bdeae",
".git/objects/46/e0bae8df76893ce3e31b5414c800628670d1d3": "0515ffe432f908d364ff213c3d71228f",
".git/objects/79/06f8f53211d76474d8710cf88a227a6ccce4c5": "76bc22227b4bef9d88338041882888db",
".git/objects/85/79fd89d0cca092c5df5aaabd7350692f43de44": "cca31ea9e9eb902d6e0fcfaa6e9a1f6c",
".git/objects/1c/5bf436852a32a45da9f1fa054b6594eec15730": "a205dfc633e64d4054eaadd2cba9c265",
".git/objects/8b/dd1be5ccebdca62d4e36b0cfaa4d7b4fec01d5": "0575d206bbf8a7890bf66f352c8e19a8",
".git/objects/8b/9ec31a8c93c10deeb25d615633931e7d29c0e9": "e492c101b45b01e20cad582037871de6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2bfc8502b3a1536afc87e8a8f51f14a",
".git/logs/refs/heads/master": "d2bfc8502b3a1536afc87e8a8f51f14a",
".git/logs/refs/remotes/origin/master": "eac2ac74237608f7b27acd3b3f7b2cbb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/master": "d107cac8099742f05bc4f32d2d1c8c73",
".git/refs/remotes/origin/master": "d107cac8099742f05bc4f32d2d1c8c73",
".git/index": "d3496209665da5cb425c419683463116",
".git/COMMIT_EDITMSG": "2832e21254f4d3b0ed755a827d07ce58",
".git/FETCH_HEAD": "d92f5ae0f7ddd8aa1caa7acfb04e0629",
"assets/AssetManifest.json": "b8f0db8c623275ee08fcdd9b1765cd2a",
"assets/NOTICES": "c71cbb6a570e020b1a342a11b0374b9a",
"assets/FontManifest.json": "3389c3b448a978a7a50ea32a9b0427eb",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/locale/localization_hin.json": "f216313194f8f1e25d3d5b7673f78400",
"assets/assets/locale/localization_en.json": "e143ec7b95228c85f21e39ce741ec9a4",
"assets/assets/images/favicon.ico": "d940665709dbaba340d7c1ceab46fdce",
"assets/assets/images/microphone.svg": "2608631f1577b2df12720abe44000854",
"assets/assets/images/ic_check_circle.svg": "1199d79228142f5860b2c24f5490ce09",
"assets/assets/images/discount.svg": "322e43ddee9bc85ffd3460f6899bf822",
"assets/assets/images/video_quality_1.svg": "ba634ef26b632a8686011effcb3c75ca",
"assets/assets/images/Group_16.png": "c5b6a935e0121b98a062c51679225f6b",
"assets/assets/images/Group_17.png": "89f7cd47d7e71888e57aeec9fd8be7d4",
"assets/assets/images/left-arrow.svg": "a53d22b20175132b9d580c1d175141a4",
"assets/assets/images/whatsapp.svg": "5e2bb8cf3c50df53346f85a77ec2bee7",
"assets/assets/images/ic_launcher.png": "2d85d887ccae8182cea55aaba1b82f58",
"assets/assets/images/calendar.svg": "c3d6eca735bf26d6904344758cea7034",
"assets/assets/images/video_quality_active.svg": "4a23eedf0735e8eb8d7dec658263b2f5",
"assets/assets/images/notch.png": "d2b6895ec14b7b86218812986937cb97",
"assets/assets/images/stage_logo_7_draft_white_01.png": "48a0e044130c68a8fb301ec84fe2e67f",
"assets/assets/icons/Stage.ttf": "99713a0ae4e08cf37082b83051a76a0d"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
