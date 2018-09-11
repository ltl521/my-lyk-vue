<template>
  <section>
    <div class="user-sk-boss">
      <div class="user-skm-box">
        <dl>
          <dt>我的分享码</dt>
          <dd><img  :src="ImagesUrl" alt="" id="my_qrcode"/></dd>
        </dl>
      </div>
      <!--<a href="" class="skjl-Btn-gj">收款记录</a>-->
      <!--<div class="skjl-boss-gj">-->
      <!--<a  class="skjl-Btn-gj" id="down">长按图片保存</a>-->
      <!--<a href="card_order_history" class="skjl-Btn-gj">收款记录</a>-->
      <!--</div>-->
    </div>
    <foot></foot>
    <modal :message="message"  v-show="showMessage"></modal>
  </section>
</template>
<style scoped>
  @import "../../assets/css/index-gj.css";
  @import "../../assets/css/xzStyle-gj.css";
</style>

<script>
  import foot from '@/pages/common/foot'
  import axios from 'axios'
  import modal from '@/pages/common/tips';
  //商户的id
  var merchantId = sessionStorage.getItem('merchantId');
export default {
  name: 'cardShare',
  components:{
    foot,
    modal
  },
  data:function () {
    return {
        ImagesUrl:'merchant/share_qrcode?id'+merchantId,
        message:'123',
        showMessage:false
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
    getlycoin:function () {
      axios({
        method : 'get',
        url : '/static/mock/card_id.json?id=' + merchantId,
      }).then(function (data) {
        if (data.code == 200) {
          return data.data.data.lyCoin;
        }
      });
      return 0;
    }
  },
  mounted:function () {

    var  lyCoin = this.getlycoin();
    var _this=this
    var timer = setTimeout(function() {
      if (_this.getlycoin() != lyCoin){
        timer = null;
        _this.showModal("收款成功！");
       _this.$router.push("setting_home")
      }
    }, 3000);
  }
}

</script>
