<template>
<div class="password">
  <form class="form" action="">
    <div class="form-item">
      <input type="password" class="ipt1" placeholder="请输入密码（6-10位英文+数字组合)">
      <span class="eye"></span>
    </div>
    <div class="form-item">
      <input type="text" class="ipt1" placeholder="确认密码">
      <span class="eye"></span>
    </div>
    <button class="next-btn" @click="jumpLogin">登录</button>
  </form>
  <remind-modal></remind-modal>
</div>
</template>

<script>
  import remindModal from '@/pages/common/remind_modal'
  export default {
    name:'changePassword',
    components:{
      remindModal
    },
    methods:{
      jumpLogin:function(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/css/form.less';
</style>
