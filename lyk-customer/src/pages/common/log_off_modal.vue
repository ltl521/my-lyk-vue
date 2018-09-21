<template>
  <div class="log-off-modal" id="tuichu">
    <div class="log-off-modal-content">
      <div class="log-off-message">确定要退出吗</div>
      <button class="log-off-btn btn-sure" @click="logOffSure">确认</button>
      <button class="log-off-btn btn-cancel"  @click="logOffCancel">取消</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'logOffModal',
    methods: {
      logOffCancel: function () {
        alert('关闭退出提示弹框')
      },
      logOffSure: function () {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="less" scoped>
.log-off-modal{
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  display:none;
  .log-off-modal-content{
    width: 14.506666666666666rem;
    height: 9.26rem;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: #FFFFFF;
    text-align: center;
    .log-off-message{
      padding-top:2rem;
      padding-bottom: 2rem;
      font-size: .8rem;
      color: #292929;
    }
    .log-off-btn{
      background-image: linear-gradient(-180deg, #FFB102 0%, #FF7901 100%);
      border-radius: 100px;
      width: 6.144rem;
      height: 1.8773333333333333rem;
      color: #fff;
      font-size: 0.768rem;
      cursor: pointer!important;
    }
    .btn-cancel{
      opacity: 0.99;
      background: #D6D6D6;
      color: #222222;
    }
  }
}
</style>
