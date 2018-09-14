<template>
  <div class="footer-box">
    <ul class="footer-list">
      <li class="footer-item footer-item-active">
        <router-link to="/" tag="div">
          <i class="footer-icon footer-icon1"></i>
          <span>收款</span>
        </router-link>
      </li>
      <li class="footer-item">
        <router-link to="/setting_home" tag="div">
          <i class="footer-icon footer-icon3"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
  <!--<div class="lyc-nav-boss">
    <ul class="nav-li-gj">
      <li>
        <router-link class="active-nav-gj" to="/"><i class="nav-tp1"></i><span>收款</span></router-link>
      </li>
      <li>
        <router-link to="/setting_home"><i class="nav-tp3"></i><span>我的</span></router-link>
      </li>
    </ul>
  </div>-->
</template>
<script>
  export default{
    name:'foot',
  }


</script>

<style lang="less" scoped>
  .footer-box{
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  width:100%;
  border-top: 1px solid #efefef;
  background: #fff;
  padding: 0.256rem 0 0.256rem;
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
      .footer-icon1{
        background: url(../../assets/img/nav1.png) center center no-repeat;
        background-size: contain;
      }
      .footer-icon3{
        background: url(../../assets/img/nav3.png) center center no-repeat;
        background-size: contain;
      }
    }
    .footer-item:first-child{
      border-right: 1px solid #ddd;
    }
    .footer-item-active{
      color: #FF7901;
      .footer-icon1{
        background: url(../../assets/img/nav1-1.png) center center no-repeat;
        background-size: contain;
      }
      .footer-icon3{
        background: url(../../assets/img/nav3-1.png) center center no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>

