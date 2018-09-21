<template>
<div class="service">
  <ul>
    <li>
      <p>微信公众号</p>
      <span>重信零用卡</span>
    </li>
    <li>
      <p>客服热线</p>
      <span class="orange">400-860-8858</span>
    </li>
    <li>
      <p>客服邮箱</p>
      <span>lyd@lingyongdai.com</span>
    </li>
  </ul>
  <share-footer></share-footer>
</div>
</template>

<script>
  import shareFooter from '@/pages/common/share_footer'
export default {
	name:'serviceCenter',
  components:{
    shareFooter
  }
}
</script>

<style lang="less" scoped>
.service{
  width: 100%;
  margin-top: 0.512rem;
  background: #fff;
  li{
    overflow:hidden;
    width: 100%;
    line-height: 0.9386666666666666rem;
    padding: 0.4266666666666667rem 0.6826666666666666rem;
    font-size: 0.5973333333333334rem;
    color: #222;
    border-bottom: 1px solid #F2F2F2;
    p{
      float:left;
    }
    span{
      float:right;
    }
    .orange{
      color: #FF7901;
    }
  }
}
</style>
