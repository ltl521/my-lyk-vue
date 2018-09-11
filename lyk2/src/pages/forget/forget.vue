<template>
  <div>
    <div class="form ">
      <div>
        <input type="number" placeholder="请输入您的手机号" class="input-phone" id="merchant_phone" v-model="phone">
        <span class=" right-logo empty"></span>
      </div>
      <div>
        <input type="text" placeholder="请输入收到的验证码" id="v_code" class="v_code" v-model="code" >
        <button class=" right-logo btn-yzm"  type="button" :disabled="btnClose" @click="sendSms">{{this.btnTxt}}</button>
      </div>

    </div>
    <a class="login-btn active">下一步</a>
    <modal :message="message"  v-show="showMessage"></modal>
  </div>

</template>

<script>


  import axios from 'axios'
  import modal from '@/pages/common/tips';


  function showModalErro(bol,msg) {
    bol=true;
  }

  export default{
    "name": 'forget',
    components: {
      modal: modal
    },
    data: function () {
      return {
        phone: '18235412101',
        code: '',
        message: '123',
        showMessage: false,
        btnClose: false,
        btnTxt: '发送验证码'
      }
    },
    methods: {
      showModal: function (str) {
        this.showMessage = true;
        this.message = str
        var _this = this;
        setTimeout(function () {
          _this.showMessage = false;
          this.btnClose = false;
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
      submit: function () {
          var _this=this;
        let ret = vaidPhone(this.phone);
        if (ret == 1) {
          this.showModal('请输入手机号');
          return;
        }
        else if (ret == 2) {
          this.showModal("请输入正确的手机号");
          return;
        }

        let ret2 = vaidPassword(this.code);
        if (ret2 == 1) {
          this.showModal('请输入收到的验证码');
          return;
        }
        axios({
          method: 'get',
          url: "/static/mock/forgetpassword.json",
          data: {
            phone: this.phone,
            code: this.code
          },

        }).then(function (data) {
            if(data.data.code==200){
              sessionStorage.setItem('merchantId', data.data.id);
              _this.$router.push('setting_login_password')
            }else{
                _this.showModal(data.data.message)
            }
        })
      }

    }
  }

</script>

<style scoped>
  @import '../../assets/css/login.css';

  @import '../../assets/css/forgetPwd.css';

</style>

