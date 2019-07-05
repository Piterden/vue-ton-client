import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  LoginPage,
  WalletPage,
  WalletDetailsTab,
  WalletSendTab,
  WalletRequestTab,
} from '../pages'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletPage,
      children: [
        {
          path: 'details',
          name: 'details',
          component: WalletDetailsTab,
        },
        {
          path: 'send',
          name: 'send',
          component: WalletSendTab,
        },
        {
          path: 'request',
          name: 'request',
          component: WalletRequestTab,
        },
      ],
    },
    {
      path: '*',
      name: 'home',
      redirect: '/login',
    },
  ],
})

export default router
