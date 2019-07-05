let config = { // eslint-disable-line no-unused-vars
  assets: [
    '/favicon.ico',
    '/robots.txt',
    '/index.html',
    '/assets/app-icon.png',
    '/assets/fontello.svg',
    '/assets/styles.css',
    '/assets/styles.css.map',
    '/assets/styles.css',
    '/assets/js/app.js',
    '/assets/js/vendor.js',
    '/offline-redirect/',
  ],
  paths: {
    api: 'https://api.fullstackweekly.com/wp-json',
    remote: 'https://api.fullstackweekly.com/',
    client: 'http://localhost:3000/',
  },
  cacheNames: {
    assetCache: 'vwpCacheAsset',
    remoteCache: 'vwpCacheRemote',
  },
}
