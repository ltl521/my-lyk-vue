<template>
  <div class="repayment-detail">
    <div class="tixian-mx-gj">
      <h4 class="tx-m-number">消费<span>¥<i id="lyCoin">123</i></span></h4>
      <ul class="tx-mx-msg">
        <li>
          <p>类型</p>
          <span>消费</span>
        </li>
        <li>
          <p>时间</p>
          <span>2018.9.14</span>
        </li>
        <li>
          <p>交易单号</p>
          <span>1111</span>
        </li>
        <li>
          <p>商户名称</p>
          <span>冒菜</span>
        </li>
        <li class="orange">
          <p>到期还款日</p>
          <span>2018.10.14</span>
        </li>
      </ul>
    </div>
    <button class="sure-btn-gj" @click="jumpHistory">返回</button>

    <share-footer></share-footer>
  </div>
</template>

<script>
  import shareFooter from '@/pages/common/share_footer'
  export default{
    name: 'repaymentDetail',
    components:{
      shareFooter
    },
    methods:{
      jumpHistory:function(){
        this.$router.push('/repayment')
      }
    }
  }
</script>

<style lang="less" scoped>
.repayment-detail{
  .tixian-mx-gj{
    width: 100%;
    height: 10.624rem;
    background: url(../../assets/img/mx-bg.png) center top no-repeat;
    background-size: cover;
    padding-top: 1.3226666666666667rem;
    margin-bottom: 0.8533333333333334rem;
    .tx-m-number{
      font-size: 0.768rem;
      color: #FF7901;
      line-height: 1.024rem;
      text-align: center;
      margin-bottom: 1.0666666666666667rem;
      span{
        margin-left: 0.5973333333333334rem;
        i{
          font-style: normal;
          font-size: 1.28rem;
          letter-spacing: 0.008106666666666667rem;
        }
      }
    }
    .tx-mx-msg{
      width: 100%;
      padding: 0.4266666666666667rem 1.152rem 0;
      li{
        font-size: 0.5973333333333334rem;
        color: #222;
        height:0.9386666666666666rem;
        line-height: 0.9386666666666666rem;
        margin-bottom: 0.23466666666666666rem;
        p{
          float:left;
        }
        span{
          float:right;
        }
      }
      .orange{
        color: #FF7901;
      }
    }
  }
  .sure-btn-gj{
    display: block;
    width: 12.8rem;
    height: 1.8773333333333333rem;
    background-image: linear-gradient(-180deg, #FFCE00 0%, #FF7901 100%);
    border-radius: 100px;
    font-size: 0.5973333333333334rem;
    color: #fff;
    margin: 0 auto;
    line-height: 1.8773333333333333rem;
    text-align: center;
  }
}
</style>
