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
    "revision": "d245632696740d8b809ca2c641b30e3c"
  },
  {
    "url": "about.html",
    "revision": "396f9c54cf5c76560bd7b52ac5b47b3a"
  },
  {
    "url": "assets/css/0.styles.115de216.css",
    "revision": "8dee46266db69095cd0fbf84f4896ec7"
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
    "url": "assets/js/10.14b372e1.js",
    "revision": "4f3b5914dcba467cc4faeea0c0b988d5"
  },
  {
    "url": "assets/js/11.f5149abd.js",
    "revision": "12a03e166440d9c9a5af4645d66e5ee6"
  },
  {
    "url": "assets/js/12.46a7296b.js",
    "revision": "41da933b264b3f3e8930fef65af5b529"
  },
  {
    "url": "assets/js/13.f71e374f.js",
    "revision": "6a0fa51bcadf1c57b19e80ac89e4ba05"
  },
  {
    "url": "assets/js/2.40329d79.js",
    "revision": "8f7fb876e0356886009febfd03425129"
  },
  {
    "url": "assets/js/3.cea67af0.js",
    "revision": "99db20414adafc7e65d6a3d15555c515"
  },
  {
    "url": "assets/js/4.4629b026.js",
    "revision": "953bbbead452825bf8d34dcd5b3dd072"
  },
  {
    "url": "assets/js/5.c7139467.js",
    "revision": "1efa822bb78e7c68dd7e39cb70530811"
  },
  {
    "url": "assets/js/6.0c929886.js",
    "revision": "e87c9cd3eb50fd4ac8ec6c08d93a5ae7"
  },
  {
    "url": "assets/js/7.26941273.js",
    "revision": "5a97baa8fe79b5e67d8d408e0c49e21d"
  },
  {
    "url": "assets/js/8.acf034b0.js",
    "revision": "62e60cc80a1d759ba6d14ca29c57dbee"
  },
  {
    "url": "assets/js/9.859b03af.js",
    "revision": "99b306a977f82f80db2a368e990ef9c1"
  },
  {
    "url": "assets/js/app.a2303317.js",
    "revision": "a54003362c8acd9122f86c541dde17af"
  },
  {
    "url": "css/index.html",
    "revision": "6d59f3d1f2f3384b000d482e6e6797dc"
  },
  {
    "url": "css/one.html",
    "revision": "5dc6400e4bab7ebc789ed6cf6087f609"
  },
  {
    "url": "icons/lufei.jpg",
    "revision": "3c6ab47ccb6b798c75722f69fc5c05ec"
  },
  {
    "url": "index.html",
    "revision": "ec54468b44a59e2ef59af90f25503f66"
  },
  {
    "url": "logo.jpg",
    "revision": "74b19f515c3bc1c1196f076290c2450b"
  },
  {
    "url": "tool/index.html",
    "revision": "2fd930e22cb61b070b4139c7adfe2f77"
  },
  {
    "url": "tool/nvm.html",
    "revision": "8c0a18e4d9e1558e13894d31f175c8e9"
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
