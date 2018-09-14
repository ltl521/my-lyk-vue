<template>
<div>
  <form  id="payForm" name="payForm" method="post">
    <input  type="hidden" name="P1_bizType" class="input_text" value="Transfer" id="P1_bizType"/>
    <input type="hidden" name="P2_orderId" class="input_text" value="" id="P2_orderId"/>
    <input type="hidden" name="P3_customerNumber" class="input_text" value="C1800001960" id="P3_customerNumber"/>
    <!--<input type="hidden" name="P4_amount" class="input_text" value="0.01" />-->

    <div class="cash-top">
      <span>提现金额（收取0.1%服务费）</span>
      <br>
      <div class="money">
        <span>￥</span><input  type="number" name="P4_amount" placeholder="请输入提现金额" id="P4_amount">
      </div>
      <span>零用币余额 <span id="total">999.00</span></span>
      <button id="allExchange">全部提现</button>
    </div>
    <div class="pwd-cash">
      <input type="password" placeholder="请输入提现密码" id="lyCoin_pwd">
      <span class=" right-logo eye"></span>
    </div>
    <div class="blank" >
      <img src="" alt="" class="blank-logo" style="opacity: 0">
      <span id="bankName">请选择银行卡</span>
      <img src="../../assets/img/arrow-1-gj.png" alt="" class="">
    </div>

    <div class="login-btn" @click="onExchange()">确定</div>

    <!--错误提示-->
    <modal></modal>


    <input type="hidden" name="P5_bankCode" class="input_text" value="CCB" id="P5_bankCode"/>
    <input type="hidden" name="P6_bankAccountNo" class="input_text" value="" id="P6_bankAccountNo"/>
    <input type="hidden" name="P7_bankAccountName" class="input_text" value="" id="P7_bankAccountName"/>
    <input type="hidden" name="P8_biz" class="input_text" value="B2C" id="P8_biz" />
    <input type="hidden" name="P9_bankUnionCode" class="input_text" value=""  id='P9_bankUnionCode'/>
    <input type="hidden" name="P10_feeType" class="input_text" value="PAYER" id="P10_feeType" />
    <input type="hidden" name="P11_urgency" class="input_text" value="true"  id="P11_urgency"/>
    <input type="hidden" name="P12_summary" class="input_text" value="零用卡-商户提现"  id="P12_summary"/>
    <input type="hidden" name="sign" class="input_text" value="" id="sign"/>
  </form>
</div>
</template>

<script>
  import modal from '@/pages/common/tips'
export default {
	name: 'drawCashInput',
  components: {
		modal
  },
  methods: {
    onExchange:function () {
    	this.$router.push('/setting_home')
    }
  }
}
</script>

<style>
@import '../../assets/css/withDra.css'
</style>
