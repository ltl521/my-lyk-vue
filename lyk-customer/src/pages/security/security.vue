<template>
<div class="security">
  <ul>
    <li @click="jumpConfirmPhone"><!--<a href="forget.html">-->修改登录密码</li>
    <li><!--<a class="My-tp1-gj"  id="My-tp1-gj-id" onclick="onClick()" href="setting_phone.html">-->更改绑定手机号码<!--<i class="" id="verified" >1111</i>--><!--</a>--></li>
  </ul>

  <share-footer></share-footer>
</div>
</template>

<script>
  import shareFooter from '@/pages/common/share_footer'
  export default {
    name:'security',
    components:{
      shareFooter
    },
    methods:{
      jumpConfirmPhone:function(){
      	this.$router.push('/confirmPhone')
      }
    }
  }
</script>

<style lang="less" scoped>
.security{
  width: 100%;
  margin-top: 0.9386666666666666rem;
  background: #fff;
  li{
    position:relative;
    width: 100%;
    line-height: 0.9386666666666666rem;
    padding: 0.4266666666666667rem 0.512rem;
    font-size: 0.5973333333333334rem;
    color: #222;
    border-bottom: 1px solid #F2F2F2;
  }
  li::after{
    content: "";
    display: block;
    width: 0.3413333333333333rem;
    height: 0.6826666666666666rem;
    background: url(../../assets/img/arrow-1-gj.png) center center no-repeat;
    background-size: cover;
    position: absolute;
    right: 0.512rem;
    top: 0.512rem;
  }
}
</style>
