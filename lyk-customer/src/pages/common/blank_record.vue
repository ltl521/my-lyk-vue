<template>
  <div id="blank-record">
    <img src="../../assets/img/wjl.png" alt="">
    <div>暂无记录</div>
  </div>
</template>

<script>
  export default {
    name: 'blankRecord'
  }
</script>

<style lang="less" scoped>
  #blank-record{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    text-align: center;
    font-size: .7rem;
    color: #898989;
    display: none;
    img{
      margin-bottom: .5rem;
      width: 3.84rem;
    }
  }

</style>
