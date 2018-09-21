<template>
<div class="logo">
  <div class="icon-logo"></div>
  <div class="title-logo">用户版</div>
</div>
</template>

<script>
  export default {
    name:'logo'
  }
</script>

<style lang="less" scoped>
.logo{
  margin:2.1333333333333333rem auto 2.1333333333333333rem;
  .icon-logo{
    width: 5.504rem;
    height: 2.8586666666666667rem;
    background: url(../../assets/img/logo.png) no-repeat;
    background-size: 100% 100%;
    margin: auto;
    margin-bottom: 0.9386666666666666rem;
  }
  .title-logo{
    font-size: 0.8533333333333334rem;
    color: #FF7901;
    text-align: center;
  }
}
</style>
