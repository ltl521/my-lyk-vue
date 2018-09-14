
<template>
  <div>
    <section>
      <div class="user-sk-boss">
        <router-link id="card" to="/card_share">
          <img src="../../assets/img/share3.png" alt="">分享
        </router-link>
        <router-link  id="scan" to="/card_payee_scan">
          收款
          <img src="../../assets/img/fkm3.png" alt="">

        </router-link >

        <div class="user-nm-box">
          <p id="merchant_name"></p>
          <dl>
            <dt>¥<span id="lycoin">{{lycoin}}</span></dt>
            <dd>账户余额</dd>
          </dl>
        </div>
        <div class="user-msg-boss">
          <dl class="jyjl-box-gj">
            <router-link  tag="dt" to="/card_order_history"><img src="../../assets/img/jyjl2.png" alt="" /></router-link>
            <router-link tag="dd" to="/card_order_history"><a  id="card_order_history" >交易记录</a></router-link >
          </dl>
          <ul>
            <li @click="cardPayee('/card_payee_input')">
              <a  id="card_payee_input">
                <img src="../../assets/img/Group7Copy.png" alt=""/>
                <span>卡号收款</span>
              </a>
            </li>
            <li @click="cardPayee('/card_payee_scan')">
              <a  id="card_payee_scan">
                <img src="../../assets/img/Group8Copy.png" alt=""/>
                <span>扫码收款</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div class="modal-gj ifeles"  id="renzhen" v-show="isAuthenticationMsg">
        <div class="modal-content" style=" width: 12.8rem;height:7.68rem;">
          <div class="close" @click="hideAuthentication"></div>
          <div class="con-boss-gj" >
            <span class="message message-wx" style="font-size: .6rem;">温馨提示<br />您还未进行认证！</span>
          </div>
          <button class="sure btn-wx" onclick="location.href='certification'">去认证</button>
        </div>
      </div>
    </section>
    <foot></foot>
  </div>
</template>

<script>
  import axios from 'axios'
  import foot from '@/pages/common/foot'



export default {
  name: 'Home',
  data:function () {
    return {
      lycoin:"0.00",
      isAuthenticationMsg:false,
      showAuthenticationMsg:false
    }
  },
  components: {
    foot: foot
  },
  methods:{
      getLycoin:function () {
          var _this=this;
          console.log(this.$store.state.merchantId)
        axios({
          method:'get',
          url:'/static/mock/getLycoin.json?id=',
        }).then(
            function (data) {
                console.log(data)
              if (data.data.code == 200) {
                    console.log(data.data.data.lyCoin )
                   _this.lycoin=(data.data.data.lyCoin / 100).toFixed(2)
              }
            }
        )
      },
      isAuthentication:function () {
          var _this=this
        axios({
          method: 'get',
          url: '/static/mock/user_info.json?id=',
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
              this.isAuthenticationMsg=true;
          }
      },
      hideAuthentication:function () {
        this.isAuthenticationMsg=false;
      },
      test:function(){
        axios({
          method: 'get',
          url: '/api/activity/test',
        }).then(function (data) {
            console.log(223)
            console.log(data)
        })
      }

  },
  created:function () {
     this.getLycoin();
     this.isAuthentication()
     this.test()
  }
}
</script>

<style scoped>
  @import '../../assets/css/index-gj.css';
  @import "../../assets/css/xzStyle-gj.css";
</style>
