
<template>
  <div>
    <section>
        <section>
          <div class="tixian-boss-gj" id="data_host" v-for="(items) in order" >
            <div class="tx-jilu-list">
              <a   @click="jump('/card_order_detail?sn='+items.orderSn)">
                <dl class="tx-data-gj">
                  <dt>时间</dt>
                  <dd>{{items.time | toDate}}</dd>
                </dl>
                <dl class="state-money-gj">
                  <dt>已完成</dt>
                  <dd>¥{{items.lyCoin | toMoney}}</dd>
                </dl>
              </a>
            </div>
          </div>
          <div class="wjl">
            <img src="static/img/wjl.png" alt="">
            <div>暂无记录</div>
          </div>
        </section>
      <div class="wjl">
        <img src="static/img/wjl.png" alt="">
        <div>暂无记录</div>
      </div>
    </section>
    <foot></foot>
    <div class="modal-gj ifeles" id="renzhen" v-if="showAuthenticationMsg">
      <div class="modal-content" style=" width: 12.8rem;height:7.68rem;">
        <div class="close" @click="hideAuthentication"></div>
        <div class="con-boss-gj" >
          <span class="message message-wx" style="font-size: .6rem;">温馨提示<br />您还未进行认证！</span>
        </div>
        <button class="sure btn-wx">去认证</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import '../../assets/css/index-gj.css';
  @import "../../assets/css/xzStyle-gj.css";
</style>
<script>
  import axios from 'axios'
  import foot from '@/pages/common/foot'

  var merchantId = sessionStorage.getItem('merchantId');
  export default {
    name: 'Home',
    data:function () {
      return {
        isAuthenticationMsg:false,
        showAuthenticationMsg:false,
        order:[],
      }
    },
    components: {
      foot: foot
    },
    methods:{
      getOrder:function () {
        var _this=this;
        axios({
          method:'get',
          url:'/static/mock/card_order_detail.json?id='+merchantId,
        }).then(
          function (data) {

            if (data.data.code == 200) {
                _this.order=data.data.data
            }
            return _this.order
          }
        )
      },
      isAuthentication:function () {
        var _this=this
        axios({
          method: 'get',
          url: '/static/mock/user_info.json?id='+merchantId,
          dataType: 'json',
        }).then(function (data) {
          console.log(data)
          if(data.data.code==200){
            let isVerified = data.data.data.verified;
            if(isVerified != 0){
              _this.isAuthenticationMsg=true;
            }
            else if(isVerified == 0){
              _this.isAuthenticationMsg=false;
            }
          }
        });
      },
      cardPayee:function (str) {
        if( this.isAuthenticationMsg){
          this.$router.push(str)
        }else{
          this.showAuthenticationMsg=true;
        }
      },
      hideAuthentication:function () {
        this.showAuthenticationMsg=false;
      },
      toCarddetail:function () {
          this.$router.push()
      },
      jump:function (str) {
        this.$router.push(str)
      }




    },

    mounted:function () {
      this.getOrder();
    }
  }
</script>
