<template>
  <div id="register">
    <div class="logo-wx"></div>
    <div class="logo-title">商户版</div>
    <div class="form ">
      <div>
        <input type="number" placeholder="请输入您的手机号" class="input-phone" v-model="phone">
        <span class=" right-logo empty"></span>
      </div>
      <div>
        <input type="text" placeholder="请输入收到的验证码" class="input-yzm" v-model="code">
        <button class=" right-logo btn-yzm" @click="sendSms">{{btnTxt}}</button>
      </div>
      <div>
        <input :type="Ispwd?'password':'text'" placeholder="请输入登录密码" class="input-psd" maxlength="10" minlength="6"  v-model="password">
        <span class=" right-logo eye" :class="{active:!Ispwd}" @click="togglePassword"></span>
      </div>
      <div>
        <input :type="Ispwd2?'password':'text'" placeholder="确认密码" class="input-psd" maxlength="10" minlength="6"  v-model="passwordconfirm">
        <span class=" right-logo eye" :class="{active:!Ispwd2}" @click="togglePassword2"></span>
      </div>
    </div>
    <div class="foot-form">
      <b class="duihao" :class="{active:isAgree}" @click="agree"></b>
      <span>我已阅读并同意 <a href="license">《零用卡商户服务协议》</a></span>
    </div>
    <a class="login-btn active" @click="register">立即注册</a>
    <div class="foot-nav">
      <span>已经有账号？<a href="login">马上登录</a></span>
    </div>

    <modal :message="message"  v-show="showMessage"></modal>

  </div>
</template>

<script>

  import axios from 'axios'
  import modal from '@/pages/common/tips';

  export default{
    "name": 'register',
    components: {
      modal: modal
    },
    data: function () {
      return {
        Ispwd:true,
        Ispwd2:true,
        phone: '18235412101',
        code: '',
        message: '123',
        showMessage: false,
        btnClose: false,
        btnTxt: '发送验证码',
        passwordconfirm: '',
        password: "",
        isAgree:false
      }
    },
    methods:{
      agree:function () {
        this.isAgree=! this.isAgree
      },
      togglePassword:function () {
        this.Ispwd=!this.Ispwd;
      },
      togglePassword2:function () {
        this.Ispwd2=!this.Ispwd2;
      },
      showModal: function (str) {
        this.showMessage = true;
        this.message = str
        var _this = this;
        setTimeout(function () {
          _this.showMessage = false;
        }, 1000)
      },
      sendSms: function () {
        this.btnClose = true;
        let ret = vaidPhone(this.phone);
        if (ret == 1) {
          this.showModal('请输入手机号')
          return;
        }
        else if (ret == 2) {
          this.showModal("请输入正确的手机号");
          return;
        }
        var _this = this;
        axios({
          method: 'get',
          url: '/static/mock/sendMessage.json',
          data: {
            phone: this.phone
          }
        }).then(function (data) {
          console.log(data)
          if (data.data.code == 200) {
            _this.countDown()
          }

        });
      },
      countDown: function () {
        this.btnTxt = "60s";
        let time = 60;
        var _this = this;
        let init = setInterval(function () {
          time--;
          if (time > 0) {
            _this.btnTxt = time + "s";
          } else {
            clearInterval(init)
            _this.btnTxt = '重新发送';
            _this.btnClose = false;
            time = 60;
          }

        }, 1000)

      },
      register:function () {

        var phone = this.phone;
        var code = this.code;
        var pwd = this.password;
        var spwd = this.passwordconfirm;

        /*验证手机号*/
        var ret = vaidPhone(phone);

        if (ret == 1) {
          this.showModal('请输入手机号');
          return;
        }
        else if (ret == 2) {
          this.showModal("手机号码格式不正确");
          return;
        }

        /*校验 验证密码*/
        if (code == '') {
          this.showModal('请输入验证码');
          return
        }

        /*验证密码*/
        var ret = vaidPassword(pwd);
        if (ret == 1) {
          this.showModal('请输入密码');
          return;
        }
        else if (ret == 2) {
          this.showModal("请输入符合规则的密码");
          return;
        }

        /*验证确认密码*/
        if (spwd == '') {
          this.showModal('请输入确认密码');
          return
        }
        if (!(spwd == pwd)) {
          this.showModal("两次密码不一致");
          return
        }

        /*验证协议*/
        if (!this.isAgree) {
          this.showModal("请您同意协议");
          return
        }

      var _this=this;
       axios({
          method: 'get',
          url: "/static/mock/register.json",
          data: {
            phone: phone,
            code: code,
            password: pwd,
            spassword: spwd
          },
        }).then(function (data) {
         console.log(data)
            if(data.data.code==200){
              sessionStorage.setItem('merchantId', data.data.data.id);
              _this.$router.push('/')
            }else{
                _this.showModal(data.data.message)
            }


       /*   _this.$router.push('/')*/
       });

      }
    }
  }
</script>
<style scoped>
  @import '../../assets/css/login.css';
</style>
