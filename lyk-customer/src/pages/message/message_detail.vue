<template>
<div class="message-detail">
  <dl>
    <dt>- <span id="money">555</span></dt>
    <dd>付款成功</dd>
  </dl>
  <ul>
    <li><i>收款方式</i><span>扫码收款</span></li>
    <li><i>交易单号</i><span id="orderSn">154546464</span></li>
    <li><i>交易时间</i><span id="time">2018.9.20</span></li>
  </ul>

  <share-footer></share-footer>
</div>
</template>

<script>
  import shareFooter from '@/pages/common/share_footer'
  export default {
    name: 'messageDetail',
    components:{
      shareFooter
    }
  }
</script>

<style lang="less" scoped>
.message-detail{
  width: 100%;
  margin-top: 0.8533333333333334rem;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 #E3E3E3;
  dl{
    width: 100%;
    text-align: center;
    padding-bottom: 0.9813333333333333rem;
    border-bottom: 1px solid #ddd;
    padding-top: 0.9rem;
    dt {
      font-size: 1.4506666666666668rem;
      color: #101010;
    }
    dd {
      font-size: 00.5973333333333334rem;
      color: #898989;
    }
  }
  ul {
    width: 100%;
    padding: 0.812rem 0.8533333333333334rem 0.4266666666666667rem;
    li {
      height: 0.8533333333333334rem;
      line-height: 0.8533333333333334rem;
      margin-bottom: 0.21333333333333335rem;
      i {
        font-style: normal;
        display: inline-block;
        float: left;
        font-size: 0.5973333333333334rem;
        color: #898989;
      }
      span {
        display: inline-block;
        float: right;
        text-align: right;
        font-size: 0.5973333333333334rem;
        color: #222222;
      }
    }
  }
}
</style>
