<template>
  <div class="order-history-detail">
      <div class="tixian-boss-gj" id="data_host">
        <div class="tixian-mx-gj">
          <h4 class="tx-m-number">交易金额<span>¥<i>555</i></span></h4>
          <div class="tx-mx-msg">
            <dl class="clearfix">
              <dt>类型</dt>
              <dd>收款</dd>
            </dl>
            <dl class="clearfix">
              <dt>时间</dt>
              <dd>2018.8.8</dd>
            </dl>
            <dl class="clearfix">
              <dt>交易单号</dt>
              <dd>123123</dd>
            </dl>
            <dl class="clearfix">
              <dt>收款账号</dt>
              <dd class="tx-zt-msg">123123</dd>
            </dl>
          </div>
        </div>
      </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from '@/pages/common/foot'
  export default {
	  name:'cardOrderDetail',
	  components:{
	  	foot
    }
  }
</script>

<style scoped>
@import '../../assets/css/index-gj.css';
</style>
