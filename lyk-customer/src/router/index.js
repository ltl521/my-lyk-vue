import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/card_home'
import personal from '@/pages/personal/setting_home'
import share from '@/pages/share/card_share'
import repayment from '@/pages/repayment/card_loan_history'
import repaymentDetail from '@/pages/repayment/card_loan_details'
import certification from '@/pages/certification/certification'
import message from '@/pages/message/message_history'
import messageDetail from '@/pages/message/message_detail'
import service from '@/pages/service/service_center'
import security from '@/pages/security/security'
import confirmPhone from '@/pages/user/confirm_phone'
import changePwd from '@/pages/user/change_password'
import login from '@/pages/user/login'
import register from '@/pages/user/register'
import agreement from '@/pages/user/agreement'
import transaction from '@/pages/transaction/transaction_record'
import transactionDetail from '@/pages/transaction/transaction_detail'
import coupon from '@/pages/coupon/coupon'
import couponRecord from '@/pages/coupon/coupon_used_record'
import couponOverdue from '@/pages/coupon/coupon_overdue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    /*分享页*/
    {
      path: '/share',
      name:'share',
      component: share
    },
   /*我的*/
    {
      path: '/personal',
      name:'personal',
      component: personal
    },
    /*还款*/
    {
      path: '/repayment',
      name:'repayment',
      component: repayment
    },
    /*还款详情*/
    {
      path: '/repaymentDetail',
      name:'repaymentDetail',
      component: repaymentDetail
    },
    /*身份认证*/
    {
      path: '/certification',
      name:'certification',
      component: certification
    },
    /*消息中心*/
    {
      path: '/message',
      name:'message',
      component: message
    },
    /*消息详情*/
    {
      path: '/message_detail',
      name:'messageDetail',
      component: messageDetail
    },
    /*客服中心*/
    {
      path: '/service',
      name:'service',
      component: service
    },
    /*安全设置*/
    {
      path: '/security',
      name:'security',
      component: security
    },
    /* 修改登录密码--验证手机号*/
    {
      path: '/confirmPhone',
      name:'confirmPhone',
      component: confirmPhone
    },
    /* 修改登录密码*/
    {
      path: '/changePwd',
      name:'changePwd',
      component: changePwd
    },
    /*登录*/
    {
      path: '/login',
      name:'login',
      component: login
    },
    /*注册*/
    {
      path: '/register',
      name:'register',
      component: register
    },
    /*协议*/
    {
      path: '/agreement',
      name:'agreement',
      component: agreement
    },
    /*交易记录*/
    {
      path: '/transaction',
      name:'transaction',
      component: transaction
    },
    /*交易记录详情*/
    {
      path: '/transactionDetail',
      name:'transactionDetail',
      component: transactionDetail
    },
    /*我的优惠券*/
    {
      path: '/coupon',
      name:'coupon',
      component: coupon
    },
    /*优惠券记录*/
    {
      path: '/couponRecord',
      name:'couponRecord',
      component: couponRecord
    },
    /*过期优惠券*/
    {
      path: '/couponOverdue',
      name:'couponOverdue',
      component: couponOverdue
    }
  ]
})
