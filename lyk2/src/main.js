// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store/index.js'
import common from 'assets/js/common.js'
import user from '../static/js/user.js'
import 'assets/css/base.css'
Vue.use(user)



Vue.config.productionTip = false

Vue.filter('toDate', function (value) {
  return Date1(value )
});
Vue.filter('toMoney', function (value) {
  return  parseFloat(value/100).toFixed(2)
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,

  },
  template: '<App/>',

})


