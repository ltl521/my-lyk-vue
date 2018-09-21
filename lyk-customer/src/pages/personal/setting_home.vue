<template>
<div class="personal-container">
  <home-header></home-header>

  <div class="personal-top">
    <div class="personal-top-content">
      <div class="personal-card">
        <span class="card-img"></span>
        <div class="card-num">卡号:<span id="cardNo">1111</span></div>
      </div>
      <div class="personal-money">
        <span class="personal-money-num" id="lyCoin">5555.00</span>
        <div>零用币</div>
      </div>
    </div>
  </div>
  <div class="personal-list">
    <router-link class="personal-item" to="/certification" tag="div">
      <img class="item-icon" src="../../assets/img/shrz-tp.png" alt="">
      <span class="item-title">身份认证</span>
    </router-link>
    <router-link class="personal-item" to="/message" tag="div">
      <img class="item-icon" src="../../assets/img/news-tp.png" alt="">
      <span class="item-title">消息中心</span>
    </router-link>
    <router-link class="personal-item" to="/service" tag="div">
      <img class="item-icon" src="../../assets/img/cus-tp.png" alt="">
      <span class="item-title">客服中心</span>
    </router-link>
    <router-link class="personal-item" to="/security" tag="div">
      <img class="item-icon" src="../../assets/img/save-tp.png" alt="">
      <span class="item-title">安全设置</span>
    </router-link>
    <router-link class="personal-item" to="/transaction" tag="div">
      <img class="item-icon" src="../../assets/img/fukuanma.png" alt="">
      <span class="item-title">交易记录</span>
    </router-link>
    <router-link class="personal-item" to="/coupon" tag="div">
      <img class="item-icon" src="../../assets/img/my-yhq-p.png" alt="">
      <span class="item-title">我的优惠券</span>
    </router-link>
  </div>
  <div class="log-off" onclick="showLocal()">退出登录</div>



  <!--错误提示弹框-->
  <remind-modal></remind-modal>
  <!--认证提示弹框-->
  <certification-modal></certification-modal>

  <log-off-modal></log-off-modal>

  <home-footer></home-footer>
</div>
</template>

<script>
  import homeHeader from '@/pages/common/header'
  import homeFooter from '@/pages/common/footer'
  import remindModal from '@/pages/common/remind_modal'
  import certificationModal from '@/pages/common/certification_modal'
  import logOffModal from '@/pages/common/log_off_modal'
export default {
	name: 'personal',
  components: {
		homeHeader,
    homeFooter,
    remindModal,
    certificationModal,
    logOffModal
  }
}
</script>

<style lang="less" scoped>
.personal-container{
  .personal-top{
    width: 100%;
    height: 8.96rem;
    background: url(../../assets/img/Rectangle-userBg.png) center top no-repeat;
    background-size: cover;
    padding-top: 2.816rem;
    .personal-top-content{
      width: 14.677333333333333rem;
      height: 5.546666666666667rem;
      margin: 0 auto;
      padding: 0.6rem 0.8rem;
      background: url(../../assets/img/Rectangle7Copy4.png) center center no-repeat;
      background-size: cover;
      .personal-card{
        float:left;
        min-width:45%;
        max-width: 60%;
        text-align: center;
        .card-img{
          display: block;
          width: 2.9013333333333335rem;
          height: 2.9013333333333335rem;
          margin: 0 auto;
          background:url(../../assets/img/MaskCopy2.png) no-repeat;
          background-size:100% 100%;
        }
        .card-num{
          font-size: 0.5973333333333334rem;
          color: #FF7901;
          /*overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;*/
        }
      }
      .personal-money{
        float:right;
        min-width: 40%;
        padding-top: 0.5rem;
        font-size: 0.5973333333333334rem;
        color: #FF7901;
        text-align:center;
        .personal-money-num{
          font-size: 1.536rem;
          margin-bottom: 0.6rem;
        }
      }
    }
  }
  .personal-list{
    .personal-item{
      display:flex;
      width: 100%;
      height: 1.8773333333333333rem;
      background: #fff;
      padding: 0 0.512rem;
      box-shadow: 0 0.042666666666666665rem 0.08533333333333333rem 0 #E3E3E3;
      border-bottom:1px solid #f5f5f5;
      font-size: 0.5973333333333334rem;
      color: #222;
      align-items:center;/*垂直居中*/
      .item-icon{
        display:inline-block;
        width: 0.6826666666666666rem;
        height: 0.6826666666666666rem;
        margin-right:0.5rem;
      }
      .item-title{
        flex:1;
      }
    }
    .personal-item::after{
      content: "";
      display: block;
      width: 0.3413333333333333rem;
      height: 0.6826666666666666rem;
      background: url(../../assets/img/arrow-1-gj.png) center center no-repeat;
      background-size: cover;
    }
  }
  .log-off{
    background: #FFFFFF;
    box-shadow: 0 0.08533333333333333rem 0.17066666666666666rem 0 #E3E3E3;
    width: 100%;
    line-height: 1.8773333333333333rem;
    font-size: 0.5973333333333334rem;
    color: #FF7901;
    letter-spacing: 0;
    text-align: center;
    margin-top: 0.6826666666666666rem;
  }
}
</style>
