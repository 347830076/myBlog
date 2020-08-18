/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4f13777e7aa87dfcbced038a538f7c51"
  },
  {
    "url": "about.html",
    "revision": "fb7ceb1b7be2cb6a0ae89aaa201b20de"
  },
  {
    "url": "assets/css/0.styles.b0b555f9.css",
    "revision": "9340ad1286d9a4e52b1d92fcc34ca72d"
  },
  {
    "url": "assets/img/github1.jpg",
    "revision": "eea6ace8760fee9f8a2274204dcfd2a9"
  },
  {
    "url": "assets/img/github2.jpg",
    "revision": "ad7e06cbc684fcdc132dfecff0e9974a"
  },
  {
    "url": "assets/img/github3.jpg",
    "revision": "96cea60c51b1af50f9f29fa610799bdb"
  },
  {
    "url": "assets/img/github4.jpg",
    "revision": "a7c49f028c822cbfec8ec73a26e70ace"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "74b19f515c3bc1c1196f076290c2450b"
  },
  {
    "url": "assets/img/nvm.jpg",
    "revision": "5342c372d864070f09763165d0d859dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1f0a17d6.js",
    "revision": "28b6009597bca9b902d179976ab12ed4"
  },
  {
    "url": "assets/js/11.57b7c73a.js",
    "revision": "108b77d5d3056e567c062d4f7bd84833"
  },
  {
    "url": "assets/js/12.7393c807.js",
    "revision": "5d81d3140bcd946485af2f2177d1027f"
  },
  {
    "url": "assets/js/13.6a656e7f.js",
    "revision": "195ffa06cd579b2b21b510d32a705a73"
  },
  {
    "url": "assets/js/14.514540ee.js",
    "revision": "2fbd8371d640f1ca7b6cc9bf6f6ed25b"
  },
  {
    "url": "assets/js/2.207249c7.js",
    "revision": "638d65439fb58dd8b30edf647511f962"
  },
  {
    "url": "assets/js/3.30840aa6.js",
    "revision": "d225bbac011e415279d41ef6cdff51eb"
  },
  {
    "url": "assets/js/4.fe415adb.js",
    "revision": "72fc671bae8f03da12c070fd3358befa"
  },
  {
    "url": "assets/js/5.85b3d15c.js",
    "revision": "7f70cf7d48a4139c12495f4c473024bd"
  },
  {
    "url": "assets/js/6.ba12ce18.js",
    "revision": "1042560f5e277a4222d4cd9f2bfb07a5"
  },
  {
    "url": "assets/js/7.cf15739c.js",
    "revision": "e34402115251898109804693f7979295"
  },
  {
    "url": "assets/js/8.5c2d5177.js",
    "revision": "62188eec300fe1810746209fba031a52"
  },
  {
    "url": "assets/js/9.03a87dc7.js",
    "revision": "9667a9eb646cb06903d454d7c1d258d3"
  },
  {
    "url": "assets/js/app.a6457ad2.js",
    "revision": "dac6507c442c28b6df7865582650e281"
  },
  {
    "url": "css/index.html",
    "revision": "2b15fb2aa6fdcbad413321bf65497a0c"
  },
  {
    "url": "css/one.html",
    "revision": "c8e023630461153b66306a3adbc43cea"
  },
  {
    "url": "icons/lufei.jpg",
    "revision": "3c6ab47ccb6b798c75722f69fc5c05ec"
  },
  {
    "url": "index.html",
    "revision": "fbbdbd0d3a0253c0da1a1dba4425e592"
  },
  {
    "url": "logo.jpg",
    "revision": "74b19f515c3bc1c1196f076290c2450b"
  },
  {
    "url": "tool/index.html",
    "revision": "194e1311f6c98927ba52f4f97cf6573d"
  },
  {
    "url": "tool/nvm.html",
    "revision": "aeafacbce80f8a558dd222109ab264c7"
  },
  {
    "url": "tool/sshkey.html",
    "revision": "a339c16cfcd4d581be6c5d05c5da23a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
