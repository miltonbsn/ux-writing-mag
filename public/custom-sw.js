// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
//workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
//workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst());

// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   }),
// ); 

 // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
//  workbox.routing.registerRoute(
//   /^https:\/\/fonts\.googleapis\.com/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'google-fonts-stylesheets',
//   }),
// );

// workbox.routing.registerRoute(
//   'https://ik.imagekit.io/uxmag/LRM_EXPORT_286222728089699_20190714_002343764_XCUp4b9hv.jpeg',
//   new workbox.strategies.CacheFirst()
// );


// 'https://ik.imagekit.io/uxmag/Yuval_Keshtcher_J38dCe4Mn.jpeg',
// 'https://ik.imagekit.io/uxmag/1_z55lSZpQj0NM7tbqc3v5yw_DYj9TAdfd.jpeg',
// 'https://ik.imagekit.io/uxmag/Screen_Shot_2019-07-14_at_01.01.42_LyJDZGNB6.png',
// 'https://ik.imagekit.io/uxmag/jo_o_W6Lmc8qwa.png',
// 'https://ik.imagekit.io/uxmag/1_vFhS2Lz6s1ezIHR65lBrdg_NLncXKwcL.jpeg',
// 'https://ik.imagekit.io/uxmag/tia461396092054709144_9gP3Bdsys.png',
// 'https://ik.imagekit.io/uxmag/588c32fb-2106-4447-827c-6c4523a61a09_lYeEFni3s.jpeg',
// 'https://ik.imagekit.io/uxmag/ux-mag1_vj2uMeZXS.jpg',
// 'https://ik.imagekit.io/uxmag/balao-unico-azul-com-uma-corda_53876-92777_BoRxK9SFp.jpg',
// 'https://ik.imagekit.io/uxmag/LRM_EXPORT_286402555051185_20190714_002643591_Fj-CROk2Q.jpeg',
// 'https://ik.imagekit.io/uxmag/LRM_EXPORT_286222728089699_20190714_002343764_XCUp4b9hv.jpeg',
// 'https://ik.imagekit.io/uxmag/588c32fb-2106-4447-827c-6c4523a61a09_lYeEFni3s.jpeg'