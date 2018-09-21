<template>
<div class="coupon-header">
  <ul class="header-list">
    <li class="header-item header-item-active" @click="jumpUnused">未使用</li>
    <li class="header-item" @click="jumpHistory">使用记录</li>
    <li class="header-item" @click="jumpOverdue">已过期</li>
  </ul>
</div>
</template>

<script>
export default {
	name: 'couponHeader',
  methods:{
    jumpUnused:function(){
    	this.$router.push('/coupon')
    },
    jumpHistory:function(){
      this.$router.push('/couponRecord')
    },
    jumpOverdue:function(){
      this.$router.push('/couponOverdue')
    }
  }
}
</script>

<style lang="less" scoped>
.coupon-header{
  position: fixed;
  top: 0px;
  left:0;
  width: 16rem;
  background: #fff;
  padding: 0.5546666666666666rem 0.4266666666666667rem;
  z-index:2;
  .header-list{
    display:flex;
    height: 1.7066666666666668rem;
    border: 1px solid #FF7901;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    .header-item{
      flex:1;
      height: 1.7066666666666668rem;
      line-height: 1.7066666666666668rem;
      border-right: 1px solid #FF7901;
      font-size: 0.6826666666666666rem;
      color: #FF7901;
    }
    .header-item:last-child{
      border:none;
    }
    .header-item-active{
      background: #FF7901;
      color: #fff;
    }
  }
}
</style>
