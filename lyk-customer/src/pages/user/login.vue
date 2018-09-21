<template>
<div class="login-container">
  <logo></logo>
  <form class="form" action="">
    <div class="form-item">
      <div class="item-img"><b class="phone"></b></div>
      <div class="item-content">
        <input class="ipt1 input-phone" type="number" placeholder="请输入您的手机号">
      </div>
    </div>
    <div class="form-item">
      <div class="item-img"><b class="pwd"></b></div>
      <div class="item-content">
        <input class="ipt1 input-psd" type="password" placeholder="请输入登录密码"  maxlength="10" minlength="6">
        <span class="eye"></span>
      </div>
    </div>
    <button class="next-btn" @click="loginClick">登录</button>
    <div class="quick-login">
      <span>快速登录</span>
      <span class="quick-btn"></span>
    </div>
    <div class="jump-line">
      <a class="forget" @click="jumpForget">忘记密码</a>
      <a class="register" @click="jumpRegister">立即注册</a>
    </div>
  </form>
  <remind-modal></remind-modal>
</div>
</template>

<script>
  import remindModal from '@/pages/common/remind_modal'
  import logo from '@/pages/common/logo'
  export default {
    name:'login',
    components:{
      remindModal,
      logo
    },
    methods:{
      loginClick:function(){
        this.$router.push('/personal')
      },
      jumpForget:function(){
      	this.$router.push('/confirmPhone')
      },
      jumpRegister:function(){
      	this.$router.push('/register')
      }
    }
  }
</script>
<style>
  body{
    background:#fff;
  }
</style>
<style lang="less" scoped>
  input:-ms-input-placeholder {
    color: #A8A8A8;
    font-size: 0.5973333333333334rem;
  }

  input:-moz-placeholder {
    color: #A8A8A8;
    font-size: 0.5973333333333334rem;
  }

  input::-webkit-input-placeholder {
    color: #A8A8A8;
    font-size: 0.5973333333333334rem;
  }
.login-container{
 /* .logo{
    width: 5.504rem;
    height: 2.8586666666666667rem;
    background: url(../../assets/img/logo.png) no-repeat;
    background-size: 100% 100%;
    margin: auto;
    margin-top: 2.1333333333333333rem;
    margin-bottom: 0.9386666666666666rem;
  }
  .logo-title{
    font-size: 0.8533333333333334rem;
    color: #FF7901;
    text-align: center;
    margin-bottom: 2.1333333333333333rem;
  }*/
  .form{
    width: 13.44rem;
    margin: auto;
    .form-item{
      display:flex;
      width:100%;
      height: 1.152rem;
      /*padding-right: 0.384rem;*/
      margin-bottom: 1.4933333333333334rem;
      .item-img{
        display:flex;
        /*justify-content:center;*/
        align-items:center;
        width:1rem;
        b.phone{
          width: 0.5973333333333334rem;
          height: 0.9813333333333333rem;
          background: url(../../assets/img/phone.png);
          background-size: 100% 100%;
        }
        .pwd{
          width: 0.6826666666666666rem;
          height: 0.9813333333333333rem;
          background: url(../../assets/img/pwd.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      .item-content{
        flex:1;
        display:flex;
        align-items:center;
        border-bottom: 1px solid #efefef;
        .ipt1{
          flex:1;
          height: 100%;
          line-height: 1.1306666666666667rem;
          padding:0 0.5333333333333333rem;
          font-size: 0.5973333333333334rem;
          margin-top:-.2rem;
        }
        .eye{
          width: 0.938666666666667rem;
          height: 0.384rem;
          background: url(../../assets/img/eye.png) no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          margin-right:.5rem;
        }
        .eye.active {
          background: url(../../assets/img/eyed.png) no-repeat;
          width: 0.938666666666667rem;
          height: 0.555rem;
          background-size: 100% 100%;
        }
      }
    }
    .next-btn{
      display: block;
      width: 11.52rem;
      height: 1.7066666666666668rem;
      margin: auto;
      font-size: 0.6rem;
      margin-bottom: 1.5573333333333332rem;
      opacity: 0.99;
      background: #D5D5D5;
      border-radius: 100px;
      color: #222222;
      cursor: pointer;
    }
    .quick-login{
      width: 11.52rem;
      margin:0 auto 2rem;
      font-size: 0.5973333333333334rem;
      color: #222;
      line-height: 1.408rem;
      .quick-btn{
        float: right;
        width: 2.048rem;
        height: 1.408rem;
        background: url(../../assets/img/switch-close.png) center center;
        background-size: cover;
        cursor: pointer;
      }
      .quick-btn.quick-active-btn{
        background: url(../../assets/img/switch-open.png) center center;
        background-size: cover;
      }
    }
    .jump-line{
      overflow:hidden;
      width:13.44rem;
      margin:auto;
      a{
        float:left;
        font-size: 0.5546666666666666rem;
        color: #FC9511;
      }
      .register{
        float:right;
        color: #868686;
      }
    }
  }
}
</style>
