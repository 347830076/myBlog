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
    "revision": "84e4422d5a9ddb9e3104dfeeeaf7628c"
  },
  {
    "url": "about.html",
    "revision": "bdc2e0372beb74e999c0b00cc1c828d5"
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
    "url": "assets/js/8.5c2d5177.js",
    "revision": "62188eec300fe1810746209fba031a52"
  },
  {
    "url": "assets/js/9.03a87dc7.js",
    "revision": "9667a9eb646cb06903d454d7c1d258d3"
  },
  {
    "url": "assets/js/app.ad76ff8b.js",
    "revision": "4ee8afbdfec4545e90a61eafb74f1860"
  },
  {
    "url": "css/index.html",
    "revision": "dbc57d4e9647b661cd9caa2474ca8ffc"
  },
  {
    "url": "css/one.html",
    "revision": "05fe36bedee57d1807f4ab7d2be9df51"
  },
  {
    "url": "icons/lufei.jpg",
    "revision": "3c6ab47ccb6b798c75722f69fc5c05ec"
  },
  {
    "url": "index.html",
    "revision": "70074293732dd87f9cf3955e8f3d70e1"
  },
  {
    "url": "logo.jpg",
    "revision": "74b19f515c3bc1c1196f076290c2450b"
  },
  {
    "url": "tool/index.html",
    "revision": "0a5e9f1ed0801ba9013e028d665c7e8a"
  },
  {
    "url": "tool/nvm.html",
    "revision": "d2af648ea9819bc5da7dac33ab59bc29"
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
