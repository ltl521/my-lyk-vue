/**
 * Created by wangxiang on 2018/8/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new  Vuex.Store({
  state:{
    merchantId:1
  },
  actions:{
    getMerchantId:function (ctx,merchantId) {
      ctx.commit('getMerchantId',merchantId)
    }
  },
  mutations:{
    getMerchantId:function (state,merchantId) {
      state.merchantId=merchantId
    }
  }

})
