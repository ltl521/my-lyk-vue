<template>
  <div class="modal-loding">
    <img src="../../assets/img/load.gif" alt="">
  </div>
</template>
<script>
  export default {
  	name: 'imgLoading'
  }
</script>
<style lang="less" scoped>
  .modal-loding{
    position: fixed;
    top:0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0,0,0,0.6);
    display: none;
    z-index: 99;
    img{
      position: absolute;
      top:50%;
      left: 50%;
      width: 5rem;
      height: 5rem;
      margin-top: -2.5rem;
      margin-left: -2.5rem;
      border-radius: 50%;
    }
  }
</style>
