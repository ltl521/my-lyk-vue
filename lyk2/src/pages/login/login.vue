<template>
  <div id="login">
    <div class="logo-wx"></div>
    <div class="logo-title">商户版</div>
    <div class="form login">
      <div>
        <b class="small-logo phone"></b>
        <input type="number" placeholder="请输入您的手机号" class="input-phone" v-model="phone">
      </div>
      <div>
        <b class="small-logo pwd"></b>
        <input :type="Ispwd?'password':'text'" placeholder="请输入登录密码" class="input-psd" maxlength="10" minlength="6"  v-model="password">
        <span class=" right-logo eye" :class="{active:!Ispwd}" @click="togglePassword"></span>
      </div>
    </div>
    <a class="login-btn denglu active" @click="login">登录</a>
    <div class="foot-nav">
      <dl class="xda-btn-gj clearfix">
        <dt>快速登录</dt>
        <dd :class="{'rember-me-btn':remberbtn}" @click="changeBtnRember"></dd>
      </dl>
      <span>
        <router-link to="/forget">
            <a href="" class="wjmm">忘记密码</a>
        </router-link>
        <a href="register" class="ac">立即注册</a>
      </span>
    </div>
    <modal :message="message"  v-show="showMessage"></modal>
  </div>
</template>
<script>
  import axios from 'axios'
  import modal from '@/pages/common/tips';

  export default {
    name: 'login',
    data:function () {
      return {
          phone:'18235412101',
          password:'123qwe',
          Ispwd:true,
          remberbtn:true,
          message:'123',
          showMessage:false
      }
    },
    components:{
      modal:modal
    },
    methods:{
      togglePassword:function () {
          this.Ispwd=!this.Ispwd;
      },
      changeBtnRember:function () {
        this.remberbtn=!this.remberbtn;
      },
      showModal:function (str) {
        this.showMessage=true;
        this.message=str
        var _this=this;
        setTimeout(function () {
          _this.showMessage=false;
        },1000)
      },
      login:function () {
        let ret = vaidPhone(this.phone);

        if (ret == 1){
          this.showModal('请输入手机号')
          return;
        }
        else if (ret == 2){
          this.showModal("请输入正确的手机号");
          return;
        }

        let ret2 = vaidPassword(this.password);
        if (ret2 == 1){
          this.showModal('请输入密码');
          return;
        }
        else if (ret2 == 2){
          this.showModal("请输入符合规则的密码");
          return;
        }

        this.showModal("正在登录");
        var _this=this;
        axios({
          method: 'get',
          url: '/static/mock/login.json',
          data: {
            phone: this.phone,
            password: this.password
          }
        }).then(function (data) {
            if(data.data.code==300){

              console.log(data.data.data.merchantId)
              sessionStorage.setItem('merchantId', data.data.data.merchantId);
              _this.$store.dispatch('getMerchantId',data.data.data.merchantId)
              console.log( _this.$store.state.merchantId)
              _this.$router.push('/');

            }else{
              _this.showModal("网络错误");
            }

        });
      }


    }
  }


</script>

<style scoped>
  @import '../../assets/css/login.css';

</style>


