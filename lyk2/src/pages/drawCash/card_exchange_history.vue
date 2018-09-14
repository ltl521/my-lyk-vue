<template>
<div class="draw-cash-history">
  <div class="tixian-boss-gj" id="data_host">
    <div class="tx-jilu-list" @click="onJumpDetail()">
      <a>
        <dl class="tx-data-gj">
          <dt>时间</dt>
          <dd>2018.9.13</dd>
        </dl>
        <dl class="state-money-gj">
          <dt>处理中</dt>
          <dd>555.00</dd>
        </dl>
      </a>
    </div>
    <div class="tx-jilu-list">
      <a>
        <dl class="tx-data-gj">
          <dt>时间</dt>
          <dd>2018.9.13</dd>
        </dl>
        <dl class="state-money-gj">
          <dt>处理中</dt>
          <dd>555.00</dd>
        </dl>
      </a>
    </div>
  </div>
  <!-- 无记录-->
  <blank-record></blank-record>
</div>
</template>

<script>
  import blankRecord from '@/pages/common/blank_record'
export default {
	name: 'drawCashHistory',
  components: {
    blankRecord:blankRecord
  },
  methods:{
    onJumpDetail:function(){
    	this.$router.push('/card_exchange_detail')
    }
  }
}
</script>

<style>
@import '../../assets/css/index-gj.css'
</style>
