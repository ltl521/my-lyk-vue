<template>
  <div class="lyk-customer-home">
    <home-header></home-header>
    <div class="lyk-limit">
      <h5 class="lyk-limit-title">零用卡剩余额度</h5>
      <dl class="lyk-limit-content">
        <dt>¥<span id='lyCoin'>555</span></dt>
        <dd>零用卡状态:<span id="card_status">123</span></dd>
      </dl>
    </div>

    <div class="lyk-back-money">
      <ul class="lyk-back-list">
        <li class="lyk-back-item">
          <p>¥<i id='sum'>555</i></p>
          <span>未还金额</span>
        </li>
        <li class="lyk-back-item">
          <router-link to="/repayment" class="hk-btn" id="card_loan_history" tag="div">还款</router-link>
        </li>
      </ul>
    </div>
    <!-- <div class="zj-jine-box">
         <p>总计：<span id='sum'></span>元</p>
         <a href="card_loan_history" id="card_loan_history">还款</a>
     </div>-->
    <!--<div class="zj-hkBtn-box clearfix" >-->
     <button class="fk-btn" type="button"  id="saoma">扫码付款</button>
    <!--</div>-->

  <!--错误提示弹框-->
    <remind-modal></remind-modal>
    <!--认证提示弹框-->
    <certification-modal></certification-modal>

    <home-footer></home-footer>
  </div>
</template>

<script>
  import homeHeader from '@/pages/common/header'
  import homeFooter from '@/pages/common/footer'
  import remindModal from '@/pages/common/remind_modal'
  import certificationModal from '@/pages/common/certification_modal'
export default {
	name:'home',
  components: {
		homeHeader,
    homeFooter,
    remindModal,
    certificationModal
  }
}
</script>

<style lang="less" scoped>
.lyk-customer-home{
  width: 100%;
  background: url(../../assets/img/lyk-bg.png) center top no-repeat;
  background-size: cover;
  padding-top: 2.5173333333333333rem;
  padding-bottom: 2rem;
  .lyk-limit{
    width: 10.281333333333333rem;
    height: 10.281333333333333rem;
    background: url(../../assets/img/Group-userBg12.png) center center no-repeat;
    margin: 0 auto 1.3rem;
    text-align: center;
    padding-top: 2.9rem;
    background-size: contain;
    margin-bottom: 1.4293333333333333rem;
    .lyk-limit-title{
      text-align: center;
      font-size: 0.468rem;
      color: #fc7f28;
      line-height: 0.8106666666666666rem;
      margin-bottom: 0.3rem;
      font-weight: 400;
    }
    .lyk-limit-content{
      width: 100%;
      text-align: center;
      margin: 0 auto 1.3866666666666667rem;
      dt{
        font-size: 0.6826666666666666rem;
        color: #fd7923;
        margin-bottom: 0.2986666666666667rem;
        font-family: pingfang sc;
        letter-spacing: 0.08533333333333333rem;
        span{
          font-size: 1.4506666666666668rem;
        }
      }
      dd{
        font-size: 0.512rem;
        color: #3e3e3d;
        font-weight: 400;
      }
    }
  }
  .lyk-back-money{
    width: 14.677333333333333rem;
    height: 3.4133333333333336rem;
    background: #fff;
    box-shadow: 0 0.21333333333333335rem 0.21333333333333335rem 0 rgba(254, 169, 4, 0.2);
    border-radius: 8px;
    padding: 0.384rem 0;
    position: relative;
    z-index: 9;
    margin: 0 auto;
    .lyk-back-list{
      display:flex;
      align-items:center;/*垂直居中*/
      justify-content: center;/*水平居中*/
      .lyk-back-item{
        flex:1;
        text-align:center;

        p{
          font-size: 0.4693333333333333rem;
          color: #FF7901;
          i{
            font-size: 0.768rem;
            margin-left: 0.2rem;
          }
        }
        span{
          font-size: 0.5693333333333333rem;
          color: #868686;
        }
        .hk-btn{
          display: inline-block;
          width: 2.986666666666667rem;
          height: 1.28rem;
          border: 1px solid #FF7901;
          border-radius: 100px;
          font-size: 0.768rem;
          color: #FF7901;
          text-align: center;
          line-height: 1.1946666666666668rem;
        }
      }
      .lyk-back-item:first-child{
        border-right:1px dashed #c9c9c9;
        padding-top: 0.512rem;
      }
    }
  }
  .fk-btn {
    display:block;
    width: 12.885333333333334rem;
    height: 1.8773333333333333rem;
    background-image: linear-gradient(-180deg, #FFCE00 0%, #FF7901 100%);
    border-radius: 100px;
    text-align: center;
    font-size: 0.5973333333333334rem;
    margin:2.1333333333333333rem auto 0;
    margin-top: ;
    font-size: 0.768rem;
    color: #fff;
  }
}
</style>
