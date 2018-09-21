<template>
  <div class="share-footer">
    <div>
      <img src="../../assets/img/share2.png" alt="">
      <br>
      <span>分享能赚钱</span>
    </div>
    <div>
      <img src="../../assets/img/fkm2.png" alt="">
      <br>
      <span>我的付款码</span>
    </div>
  </div>
</template>

<script>
export default {
	name: 'shareFooter'
}
</script>

<style lang="less" scoped>
.share-footer{
  position: fixed;
  bottom: 3.2186666666666666rem;
  width: 100%;
  left: 0px;
  div{
    width: 50%;
    text-align: center;
    float: left;
    font-size: 0.512rem;
    color: #888888;
    letter-spacing: 0;
    img{
      width: 2.1333333333333333rem;
      height: 2.1333333333333333rem;
      margin-bottom: 0.4266666666666667rem;
    }
  }
}
</style>
