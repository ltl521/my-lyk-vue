<template>
<div class="register">
  <logo></logo>
  <form class="form" action="">
    <div class="form-item">
      <div class="item-content">
        <input class="ipt1 input-phone" type="number" placeholder="请输入您的手机号">
      </div>
    </div>
    <div class="form-item">
      <div class="item-content">
        <input class="ipt1 input-psd" type="text" placeholder="请输入收到的验证码">
        <button class="get-yzm">发送验证码</button>
      </div>
    </div>
    <div class="form-item">
      <div class="item-content">
        <input class="ipt1 input-psd" type="password" placeholder="请输入密码（6-10位英文+数字组合)" maxlength="10" minlength="6">
        <span class="eye"></span>
      </div>
    </div>
    <div class="form-item">
      <div class="item-content">
        <input class="ipt1 input-psd" type="password" placeholder="确认密码" maxlength="10" minlength="6">
        <span class="eye"></span>
      </div>
    </div>
    <div class="protocol"><span class="read"></span>我已阅读并同意<a class="agreement" @click="jumpAgreement">《零用卡商户服务协议》</a></div>
    <button class="next-btn" @click="registerClick">立即注册</button>
    <div class="go-login">已经有账号？<a @click="jumpLogin">马上登录</a></div>
  </form>
</div>
</template>

<script>
  import remindModal from '@/pages/common/remind_modal'
  import logo from '@/pages/common/logo'
  export default {
    name:'register',
    components:{
      remindModal,
      logo
    },
    methods:{
      registerClick:function(){
        this.$router.push('/')
      },
      jumpAgreement:function(){
        this.$router.push('/agreement')
      },
      jumpLogin:function(){
        this.$router.push('/login')
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
  .register {
    .form {
      width: 13.44rem;
      margin: auto;
      .form-item{
        display:flex;
        width:100%;
        height:1.7066666666666668rem;
        margin-bottom:0.64rem;
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
            /*margin-top:-.2rem;*/
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
          .get-yzm{
            width: 3.84rem;
            height: 1.28rem;
            font-size: 0.512rem;
            color: #222222;
            background: #F3F3F3;
            border-radius: 2px;
            margin-right:.5rem;
          }
        }
      }
      .protocol{
        display:flex;
        font-size: 0.512rem;
        align-items:center;
        justify-content:center;
        margin-bottom: 2.56rem;
        .read{
          width: 0.4266666666666667rem;
          height: 0.426666666666667rem;
          background: url(../../assets/img/check.png) no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          margin-right:.2rem;
        }
        .readed{
          background: url(../../assets/img/checked.png) no-repeat;
          background-size: 100% 100%;
        }
        .agreement{
          color: #1a9bff;
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
      .go-login{
        text-align: center;
        font-size: 0.5546666666666666rem;
        color: #686868;
        a{
          color: #FC9511;
        }
      }
    }
  }
</style>
