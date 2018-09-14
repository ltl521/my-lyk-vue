<template>
  <div class="share-code">
    <div class="share-code-container">
      <dl>
        <dt>我的分享码</dt>
        <dd><img src="../../assets/img/1510130551copy.png" alt="" id="my_qrcode"/></dd>
      </dl>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.share-code{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width: 100%;
  background: url(../../assets/img/Rectangle3Copy.png) center top no-repeat;
  background-size: cover;
  padding-top: 1.408rem;
  height: 100%;
  padding-bottom: 2.5rem;
  .share-code-container{
    width: 15.530666666666667rem;
    background: url(../../assets/img/Group12.png) center top no-repeat;
    background-size: contain;
    min-height: 14.933333333333334rem;
    margin: 0 auto;
    padding-bottom: 0.64rem;
    dl {
      width: 100%;
      text-align: center;
      padding-top: 2.56rem;
      dt {
        font-size: 0.5973333333333334rem;
        color: #292929;
        margin-bottom: .4rem;
      }
      dd img {
        margin: 0 auto;
        width: 9.5rem;
        height: 9.5rem;
      }
    }
  }
}
</style>
