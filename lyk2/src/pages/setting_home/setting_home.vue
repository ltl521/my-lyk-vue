<template>
  <div>
    <router-link id="card" to="/card_share">
      <img src="../../assets/img/share3.png" alt="">分享
    </router-link>
    <router-link  id="scan" to="/card_payee_scan">
      收款
      <img src="../../assets/img/fkm3.png" alt="">

    </router-link >

    <section>
      <div class="user-msg-gj">
        <div class="u-m-second">
          <dl class="sunfu-cis1">
            <dt><img src="../../assets/img/MaskCopy2.png" alt="" /></dt>
            <dd>编号：<span id="cardNo">1</span></dd>
          </dl>
          <dl class="sunfu-cis2">
            <dt>当日预期收益<span id="todayMoney">111</span></dt>
            <!--<dd class="user-name-gj" id="merchant_name"></dd>-->
            <dd class="card-edu-gj">零用币<span id="money">1</span></dd>
          </dl>
        </div>
      </div>
      <div class="user-service-gj">
        <ul>
          <li><router-link to="/certification" class="My-tp1-gj"  id="My-tp1-gj-id">商户认证<i class="" id="verified">{{IsVerified}}</i></router-link></li>
          <li><a class="My-tp2-gj" id="My-tp2-gj">提现<i class="" id="verified2">{{verified}}</i></a></li>
          <li><router-link class="My-tp3-gj" to="/message_history" id="My-tp3-gj">消息中心<i class="news-tp-gj"></i></router-link></li>
          <li class="add-mar1-gj"><router-link class="My-tp4-gj" to="/setting_kefu" id="add-mar1-gj">客服中心</router-link></li>
          <li><router-link class="My-tp5-gj" to="/setting_security" >安全设置</router-link></li>
        </ul>
        <div class="tcdl" onclick="showLocal()">
          退出登录
        </div>
      </div>
    </section>
    <section>
      <nav class="lyc-nav-boss">
        <ul class="nav-li-gj">
          <li><a href="card_payee_home"><i class="nav-tp1" id="nav-tp1"></i><span>收款</span></a></li>
          <li><a class="active-nav-gj" href="" id="active-nav-gj"><i class="nav-tp3"></i><span>我的</span></a></li>
        </ul>
      </nav>
    </section>
    <!--错误提示-->
    <modal :message="message"  v-show="showMessage"></modal>

    <div class="modal-gj ifeles" style="display: none" id="tuichu">
      <div class="modal-content">
        <div class="con-boss-gj" style="padding-top:2rem;padding-bottom: 2rem">
          <span class="message message-wx" style="font-size: .8rem;">确定要退出吗</span>
        </div>
        <button class="sure btn-wx" onclick="removeLocal()">确认</button>
        <button class="cancel btn-wx" style="opacity: 0.99;background: #D6D6D6;color: #222222;" onclick="hideLocal()">取消</button>
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
  </div>

</template>

<script>
  import axios from 'axios'
  import modal from '@/pages/common/tips';
  var merchantId = sessionStorage.getItem('merchantId');
  export default{
        "name":'setting_home',
        components:{
            modal
        },
        data:function () {
          return {
            message:'',
            showMessage:false,
            isAuthenticationMsg:false,
            showAuthenticationMsg:false,
            verified:'未设置',
            IsVerified:'未认证',
            merchantName:"",
            IsVerified2:false,
            money:0,
            todayMoney:0,
            cardNo:""

          }
        },
        methods:{
          showModal:function (str) {
            this.showMessage=true;
            this.message=str
            var _this=this;
            setTimeout(function () {
              _this.showMessage=false;
            },1000)
          },
          isAuthentication:function () {
            var _this=this
            axios({
              method: 'get',
              url: '/static/mock/user_info.json?id=',
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
          hideAuthentication:function () {
            this.isAuthenticationMsg=false;
          },
          /*判断商户是否认证*/
          IsMearchantVerified:function () {
              var _this=this
            axios({
              method : 'get',
              url : 'merchant/info_id?id=' + merchantId,
            }).then(function (data) {
              if (data.code == 200) {
                _this.merchantName=data.data.data.name
                sessionStorage.setItem('verified',data.data.data.verified)
                //获取商户认证状态
                if (data.data.data.verified == 1) {
                  _this.IsVerified='已认证';
                  _this.IsVerified2=true;
                }else if (data.data.verified == 0) {
                  _this.IsVerified='未认证';
                  _this.IsVerified2=false;
                }else if (data.data.verified == 2) {
                  _this.IsVerified="待认证"
                }
              }
            });
          },
          /*获取商户额度*/
          getMeanchantLycoin:function () {
              var _this=_this;
            axios({
              method : 'get',
              url :   'merchant/card_id?id=' + merchantId,
              success : function(data) {
                if (data.code == 200) {
                  $('#money').html((data.data.lyCoin / 100).toFixed(2));
                  $('#todayMoney').html(((data.data.lyCoin / 100) * 0.05 / 365).toFixed(3));
                  //获取卡号
                  $('#cardNo').html(data.data.cardNo);
                }
              }
            }).then(function (data) {
              _this.money=(data.data.data.lyCoin / 100).toFixed(2);
              _this.todayMoney=((data.data.data.lyCoin / 100) * 0.05 / 365).toFixed(3);
              _this.cardNo=data.data.data.cardNo
            });
          }

        },
      mounted:function () {
        this.isAuthentication()
        this.IsMearchantVerified()
        this.getMeanchantLycoin()
      }
    }
</script>

<style scoped>
  @import '../../assets/css/index-gj.css';
  @import "../../assets/css/xzStyle-gj.css";
  #money{
    font-size: 0.5973333333333334rem;
  }
</style>
