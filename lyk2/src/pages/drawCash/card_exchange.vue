<template>
<div class="draw-cash">
  <div class="tixian-boss-gj">
    <dl class="money-number-gj">
      <dt>零用币</dt>
      <dd>¥<span id="total_coin">555.00</span></dd>
    </dl>
    <dl class="btn-jilu-gj">
      <dt>
        <input type="number" id="ly_coin" hidden >
        <button type="button" @click="onExchange()">提现</button>
      </dt>
      <dd><a @click="onJumpRecord()" id="card_exchange_history">提现记录</a></dd>
    </dl>
  </div>
  <!--错误提示-->
  <modal></modal>
</div>
</template>

<script>
  import modal from '@/pages/common/tips'
export default {
	name: 'drawCash',
  components:{
		modal:modal
  },
  methods: {
    onExchange:function (){
    	this.$router.push('/draw_cash_input')
    },
    onJumpRecord:function(){
    	this.$router.push('/card_exchange_history')
    }
  }
}
</script>

<style>
@import '../../assets/css/index-gj.css'
</style>
