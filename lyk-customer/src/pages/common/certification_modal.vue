<template>
  <div class="rz-modal" id="renzhen">
    <div class="rz-modal-content" style=" width: 12.8rem;height:7.68rem;">
      <div class="close" @click="hideRzModal"></div>
      <div class="rz-remind" >
        <p>温馨提示</p>
        <p>您还未进行认证！</p>
      </div>
      <button class="btn-rz" @click="jumpCertification" >去认证</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'certificationModal',
    methods: {
      hideRzModal: function () {
        alert('关闭认证提示弹框')
      },
      jumpCertification: function () {
        this.$router.push('/certification')
      }
    }
  }
</script>

<style lang="less" scoped>
  .rz-modal{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0,0,0,0.6);
    z-index: 9999;
    display:none;
    .rz-modal-content{
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      -moz-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      -o-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      border-radius: 8px;
      width: 12.8rem;
      height: 7.68rem;
      background: #FFFFFF;
      text-align: center;
      .close{
        position: absolute;
        top: 0.556rem;
        right: 0.4713333333333333rem;
        font-size: 0.5973333333333334rem;
        color: #292929;
        line-height: 0.8533333333333334rem;
        cursor: pointer;
        background: url(../../assets/img/CombinedShapeCopy4.png) center center no-repeat;
        background-size:100% 100%;
        width: 0.5973333333333334rem;
        height: 0.5973333333333334rem;
      }
      .rz-remind{
        padding-top: 1.2rem;
        text-align: center;
        padding-bottom: 0.8rem;
        font-size: .6rem;
        color: #292929;
        line-height:1.2rem;
      }
      .btn-rz{
        background-image: linear-gradient(-180deg, #FFB102 0%, #FF7901 100%);
        border-radius: 100px;
        width: 6.144rem;
        height: 1.8773333333333333rem;
        color: #fff;
        font-size: 0.768rem;
        cursor: pointer!important;
      }
    }
  }
</style>
