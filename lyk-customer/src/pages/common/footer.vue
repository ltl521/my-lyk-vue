<template>
<div class="footer">
  <ul class="footer-list">
    <li class="footer-item footer-item-active">
      <router-link to="/" tag="div">
        <i class="footer-icon icon4"></i>
        <span>零用卡</span>
      </router-link>
    </li>
    <li class="footer-item">
      <router-link to="/personal" tag="div">
        <i class="footer-icon icon3" ></i>
        <span>我的</span>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
	name:'homeFooter'
}

</script>

<style lang="less" scoped>
.footer{
  overflow: hidden;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  width: 100%;
  background: #fff;
  padding: 0.256rem 0 0.256rem;
  border-top: 1px solid #efefef;
  z-index: 2;
  .footer-list{
    display:flex;
    .footer-item{
      flex:1;
      text-align: center;
      color: #868686;
      font-size: 0.4693333333333333rem;
      font-family: pingfang sc;
      cursor: pointer;
      .footer-icon{
        display: block;
        width: 0.9386666666666666rem;
        height: 0.9386666666666666rem;
        margin:0 auto .1rem;
      }
      .icon4{
        background: url(../../assets/img/nav4.png) center center no-repeat;
        background-size: contain;
      }
      .icon3{
        background: url(../../assets/img/nav3.png) center center no-repeat;
        background-size: contain;
      }
    }
    .footer-item:first-child{
      border-right: 1px solid #ddd;
    }
    .footer-item-active{
      color: #FF7901;
      .icon4{
        background: url(../../assets/img/nav4-1.png) center center no-repeat;
        background-size: contain;
      }
      .icon3{
        background: url(../../assets/img/nav3-1.png) center center no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
