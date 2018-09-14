import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/Home'
import cardShare from '@/pages/cardshare/cardShare'
import login from '@/pages/login/login'
import forget from '@/pages/forget/forget'
import register from '@/pages/register/register'
import card_payee_scan from '@/pages/payeeScan/card_payee_scan'
import card_order_history from '@/pages/orderHistory/card_order_history'
import card_order_detail from '@/pages/orderHistory/card_order_history_detail'
import setting_home from '@/pages/setting_home/setting_home'
import setting_qrcode from '@/pages/setting_qrcode/setting_qrcode'
import certification from '@/pages/certification/certification'
import draw_cash_pwd from '@/pages/drawCash/setting_exchange_password'
import draw_cash from '@/pages/drawCash/card_exchange'
import draw_cash_input from '@/pages/drawCash/card_exchange_input'
import card_exchange_history from '@/pages/drawCash/card_exchange_history'
import card_exchange_detail from '@/pages/drawCash/card_exchange_detail'
import message_history from '@/pages/message/message_history'
import message_detail from '@/pages/message/message_detail'
import setting_kefu from '@/pages/service/setting_kefu'
import setting_security from '@/pages/security/setting_security'
import setting_login_password from '@/pages/security/setting_login_password'
import setting_phone from '@/pages/security/setting_phone'


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
    /*收款二维码*/
    {
      path: '/setting_qrcode',
      name: 'setting_qrcode',
      component: setting_qrcode
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
    /*订单历史纪录详情*/
    {
      path: '/card_order_detail',
      name: 'card_order_detail',
      component: card_order_detail
    },
    /*我的*/
    {
      path: '/setting_home',
      name: 'setting_home',
      component: setting_home
    },
    /*商户认证*/
    {
      path: '/certification',
      name: 'certification',
      component: certification
    },
    /*提现设置*/
    {
      path: '/draw_cash_pwd',
      name: 'draw_cash_pwd',
      component: draw_cash_pwd
    },
    /*提现*/
    {
      path: '/draw_cash',
      name: 'draw_cash',
      component: draw_cash
    },
  /*  提现输入*/
    {
      path: '/draw_cash_input',
      name: 'draw_cash_input',
      component: draw_cash_input
    },
    /*  提现记录*/
    {
      path: '/card_exchange_history',
      name: 'card_exchange_history',
      component: card_exchange_history
    },
    /*  提现记录详情*/
    {
      path: '/card_exchange_detail',
      name: 'card_exchange_detail',
      component: card_exchange_detail
    },
    /*消息中心*/
    {
      path: '/message_history',
      name: 'message_history',
      component: message_history
    },
    /*消息详情*/
    {
      path: '/message_detail',
      name: 'message_detail',
      component: message_detail
    },
    /*客服中心*/
    {
      path: '/setting_kefu',
      name: 'setting_kefu',
      component: setting_kefu
    },
    /*安全设置*/
    {
      path: '/setting_security',
      name: 'setting_security',
      component: setting_security
    },
    /*安全设置--修改登录密码*/
    {
      path: '/setting_login_password',
      name: 'setting_login_password',
      component: setting_login_password
    },
    /*安全设置--更改绑定手机号码*/
    {
      path: '/setting_phone',
      name: 'setting_phone',
      component: setting_phone
    }
  ]
})
