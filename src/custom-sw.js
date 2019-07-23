// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
//workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
/*eslint no-restricted-globals: ["error"]*/

import * as precaching from 'workbox-precaching';
import {registerRoute} from 'workbox-routing/registerRoute.mjs';
import {CacheFirst, NetworkFirst} from 'workbox-strategies';
import {Plugin as ExpirationPlugin} from 'workbox-expiration/Plugin.mjs';

if ('serviceWorker' in navigator) {
  self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
  self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
}

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
//precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
registerRoute("/", new NetworkFirst());

registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
); 
