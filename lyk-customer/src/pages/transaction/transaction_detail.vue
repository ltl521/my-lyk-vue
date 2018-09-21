<template>
  <div class="transaction-detail">
    <div class="detail-content">
      <h4 class="detail-number">
        消费<span>¥<i id="lyCoin">123</i></span>
      </h4>
      <ul class="detail-msg">
        <li>
          <p>类型</p>
          <span>消费</span>
        </li>
        <li>
          <p>时间</p>
          <span>1</span>
        </li>
        <li>
          <p>交易单号</p>
          <span>1</span>
        </li>
        <li>
          <p>商户名称</p>
          <span>1</span>
        </li>
      </ul>
    </div>
    <button class="back-btn" @click="backClick">返回</button>
    <share-footer></share-footer>
  </div>
</template>

<script>
  import shareFooter from '@/pages/common/share_footer'

  export default {
    name: 'transcationDetail',
    components: {
      shareFooter
    },
    methods:{
      backClick:function (){
      	this.$router.push('/')
      }
    }
  }
</script>

<style lang="less" scoped>
  .transaction-detail {
    .detail-content {
      width: 100%;
      height: 10.624rem;
      background: url(../../assets/img/mx-bg.png) center top no-repeat;
      background-size: cover;
      padding-top: 1.3226666666666667rem;
      margin-bottom: 0.8533333333333334rem;
      .detail-number {
        font-size: 0.768rem;
        color: #FF7901;
        line-height: 1.024rem;
        text-align: center;
        margin-bottom: 1.0666666666666667rem;
        span {
          margin-left: 0.5973333333333334rem;
          i {
            font-size: 1.28rem;
            letter-spacing: 0.008106666666666667rem;
          }
        }
      }
      .detail-msg {
        padding: 0.4266666666666667rem 1.152rem 0;
        li {
          /*overflow:hidden;*/
          font-size: 0.5973333333333334rem;
          color: #222;
          height: 0.9386666666666666rem;
          margin-bottom: 0.23466666666666666rem;
          p {
            float: left;
          }
          span {
            float: right;
          }
        }
      }

    }
    .back-btn {
      display: block;
      width: 12.8rem;
      height: 1.8773333333333333rem;
      background-image: linear-gradient(-180deg, #FFCE00 0%, #FF7901 100%);
      border-radius: 100px;
      font-size: 0.5973333333333334rem;
      color: #fff;
      margin: 0 auto;
    }
  }
</style>
