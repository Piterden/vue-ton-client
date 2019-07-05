import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import { App } from './pages'
import store from './vuex/store'
import router from './router'

if (typeof window !== 'undefined') {
  window.IntersectionObserver = require(
    'intersection-observer-polyfill/dist/IntersectionObserver.global',
  )
}

const VueClazyLoad = require('vue-clazy-load')

sync(store, router)

Vue.use(VueClazyLoad)

const app = new Vue({
  router,
  store,
  ...App,
})

export { app, router, store }
