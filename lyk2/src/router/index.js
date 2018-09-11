import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/Home'
import cardShare from '@/pages/cardshare/cardShare'
import login from '@/pages/login/login'
import forget from '@/pages/forget/forget'
import register from '@/pages/register/register'
import card_payee_scan from '@/pages/payeeScan/card_payee_scan'
import card_order_history from '@/pages/orderHistory/card_order_history'
import setting_home from '@/pages/setting_home/setting_home'
import setting_qrcode from '@/pages/setting_qrcode/setting_qrcode'
import certification from '@/pages/certification/certification'

Vue.use(Router)

export default new Router({
  routes: [
    /*主页*/
    {
      path: '/',
      name: 'Home',
      component: home
    },
   /* 分享二维码*/
    {
      path: '/card_share',
      name: 'cardShare',
      component: cardShare
    },
    /*登录*/
    {
      path: '/login',
      name: 'login',
      component: login
    },
    /*忘记密码*/
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    /*注册*/
    {
      path: '/register',
      name: 'register',
      component: register
    },
    /*扫码收款*/
    {
      path: '/card_payee_scan',
      name: 'card_payee_scan',
      component: card_payee_scan
    },
    /*订单历史纪录*/
    {
      path: '/card_order_history',
      name: 'card_order_history',
      component: card_order_history
    },
    /*我的*/
    {
      path: '/setting_home',
      name: 'setting_home',
      component: setting_home
    },
    /*收款二维码*/
    {
      path: '/setting_qrcode',
      name: 'setting_qrcode',
      component: setting_qrcode
    },
    {
      path: '/certification',
      name: 'certification',
      component: certification
    },
  ]
})
