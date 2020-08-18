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
    "revision": "8b9365bcddf4843df298b91af5a1d925"
  },
  {
    "url": "about.html",
    "revision": "a3034e59c447fe49ee5ac6ac431ebd68"
  },
  {
    "url": "assets/css/0.styles.b0b555f9.css",
    "revision": "9340ad1286d9a4e52b1d92fcc34ca72d"
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
    "url": "assets/js/10.46f8fa50.js",
    "revision": "888bde9b6f588f165e83c771610ff9ec"
  },
  {
    "url": "assets/js/11.57b7c73a.js",
    "revision": "108b77d5d3056e567c062d4f7bd84833"
  },
  {
    "url": "assets/js/12.3e2e0772.js",
    "revision": "013ee117d0aa79b02671f803fbfccb27"
  },
  {
    "url": "assets/js/13.2cf049be.js",
    "revision": "8cf0a7b3da53e3bcf758b96e06febad2"
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
    "url": "assets/js/4.6127dbed.js",
    "revision": "51c028e7eae2d9743b176a21ba9c4c5f"
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
    "url": "assets/js/8.7cbd02f9.js",
    "revision": "30a7573af525f4c401aea0d36413b9ae"
  },
  {
    "url": "assets/js/9.57e8aa50.js",
    "revision": "ad02c3f12e05efa0f1fa12ff49309fe0"
  },
  {
    "url": "assets/js/app.3ac2b1fd.js",
    "revision": "5403f5b51c7b82cc9999bad8bd08c86f"
  },
  {
    "url": "css/index.html",
    "revision": "885286731b1c9af141af613d9e2b3962"
  },
  {
    "url": "css/one.html",
    "revision": "563d6dfddc5ee93dc22a4a2a5a73a73c"
  },
  {
    "url": "icons/lufei.jpg",
    "revision": "3c6ab47ccb6b798c75722f69fc5c05ec"
  },
  {
    "url": "index.html",
    "revision": "2951563895bf48764ebf4f9fb82ab3f8"
  },
  {
    "url": "logo.jpg",
    "revision": "74b19f515c3bc1c1196f076290c2450b"
  },
  {
    "url": "tool/index.html",
    "revision": "48b50dd6fc53fa815d3f148ff8aea327"
  },
  {
    "url": "tool/nvm.html",
    "revision": "11120622e6aa859550ba1112546302a8"
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
