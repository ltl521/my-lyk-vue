<template>
  <div class="">
    <div class="nCenter-gj" id="data_host">
      <div class="line-wrapper" @click="onJumpDetail()">
        <div class="line-scroll-wrapper">
          <div class="line-normal-wrapper" value="" id="">
            <div class="newsCont-box">
              <dl class="clearfix">
                <dt class="addDots-wd">
                  付款成功<!--<b class="active">付款成功</b>-->
                </dt>
                <dd>2017.11.28.10:37</dd>
              </dl>
              <p>支付了xx元</p>
            </div>
          </div>
          <div class="line-btn-delete">删除</div>
        </div>
      </div>
      <div class="line-wrapper">
        <div class="line-scroll-wrapper">
          <div class="line-normal-wrapper" value="" id="">
            <div class="newsCont-box">
              <dl class="clearfix">
                <dt class="addDots-wd">
                  付款成功<!--<b class="active">付款成功</b>-->
                </dt>
                <dd>2017.11.28.10:37</dd>
              </dl>
              <p>支付了xx元</p>
            </div>
          </div>
          <div class="line-btn-delete">删除</div>
        </div>
      </div>
    </div>
   <!-- 无记录-->
    <blank-record></blank-record>
  </div>
</template>

<script>
  import blankRecord from '@/pages/common/blank_record'
export default {
	name: 'messageHistory',
  components: {
		blankRecord:blankRecord
  },
  methods:{
    onJumpDetail: function () {
    	this.$router.push('/message_detail')
    }
  }
}
</script>

<style>
@import '../../assets/css/xzStyle-gj.css'
</style>
