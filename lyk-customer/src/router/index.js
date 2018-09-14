import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/card_home'
import personal from '@/pages/personal/setting_home'
import share from '@/pages/share/card_share'
import repayment from '@/pages/repayment/card_loan_history'


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
    }
  ]
})
