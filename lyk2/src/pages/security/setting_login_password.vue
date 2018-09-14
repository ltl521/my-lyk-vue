<template>
  <div>
    <form class="form" action="">
      <div class="form-item">
        <input class="ipt1" type="password" placeholder="请输入密码（6-10位英文+数字组合)" id="password1" maxlength="10" minlength="6">
        <span class="eye"></span>
      </div>
      <div class="form-item">
        <input class="ipt1" type="password" placeholder="确认密码" id="password2">
        <span class="eye"></span>
      </div>
      <button class="login-btn denglu" @click="onLogin()">登录</button>
    </form>
    <!--错误提示-->
    <modal></modal>
  </div>
</template>

<script>
  import modal from '@/pages/common/tips'
export default {
	name: 'setLoginPwd',
  components:{
		modal
  },
  methods: {
    onLogin:function () {
    	this.$router.push('/login')
    }
  }
}
</script>
<style>
  @import '../../assets/css/common.css'
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
  .form{
    margin-top:1.5rem;
    width: 16rem;
  .form-item{
    display:flex;
    width:100%;
    height:2rem;
    background: #fff;
    border-bottom: 1px solid #efefef;
  .ipt1{
    flex:1;
    padding:0 0.5333333333333333rem 0 1rem;
    font-size: 0.5973333333333334rem;
  }
  .eye{
    background: url(../../assets/img/eye.png) no-repeat;
    width:0.938666666666667rem;
    height:0.384rem;
    background-size: 100% 100%;
    cursor: pointer;
    margin-right:0.5rem;
    margin-top:0.808rem;
  }
  .eye.active{
    background: url(../../assets/img/eyed.png) no-repeat;
    width:0.938666666666667rem;
    height:0.555rem;
    background-size: 100% 100%;
  }
  }
  .login-btn{
    display:block;
    width: 11.52rem;
    height: 1.7066666666666668rem;
    margin: auto;
    font-size: 0.6rem;
    opacity: 0.99;
    background: #D5D5D5;
    border-radius: 100px;
    color: #222222;
    margin-top:1.7493333333333334rem;
    margin-bottom: 0.6266666666666667rem;
  }
  }
</style>
