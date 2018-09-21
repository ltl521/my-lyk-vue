<template>
<div class="yz-phone">
  <form class="form" action="">
    <div class="form-item">
      <input type="text" class="ipt1" placeholder="请输入您的手机号">
    </div>
    <div class="form-item">
      <input type="text" class="ipt1" placeholder="请输入收到的验证码">
      <button class="get-yzm">发送验证码</button>
    </div>
    <button class="next-btn" @click="jumpChangePwd">下一步</button>
  </form>
  <remind-modal></remind-modal>
</div>
</template>

<script>
  import remindModal from '@/pages/common/remind_modal'
  export default {
    name:'confirmPhone',
    components:{
      remindModal
    },
    methods:{
      jumpChangePwd:function(){
        this.$router.push('/changePwd')
      }
    }
  }
</script>

<style lang="less"  scoped>
@import '../../assets/css/form.less';
</style>
