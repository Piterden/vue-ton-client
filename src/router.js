import Vue from 'vue'
import Router from 'vue-router'

import {
  LoginPage,
  WalletPage,
  WalletDetailsTab,
  WalletSendTab,
  WalletRequestTab
} from './views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletPage,
      children: [
        {
          path: 'details',
          name: 'details',
          component: WalletDetailsTab
        },
        {
          path: 'send',
          name: 'send',
          component: WalletSendTab
        },
        {
          path: 'request',
          name: 'request',
          component: WalletRequestTab
        }
      ]
    },
    {
      path: '*',
      name: 'home',
      redirect: '/login'
    }
  ]
})
