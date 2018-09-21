<template>
<div class="certification">
  <form class="form" action="">
    <div class="form-item">
      <input class="item-ipt" type="text" placeholder="请输入姓名" id="customer_name" >
    </div>
    <div class="form-item">
      <input class="item-ipt" type="text" placeholder="请输入身份证号码" id="id_card">
    </div>
    <button type="button" class="login-btn submit" @click="submit">提交</button>
  </form>

  <share-footer></share-footer>
</div>
</template>

<script>
  import shareFooter from '@/pages/common/share_footer'
export default {
	name: 'certification',
  components:{
    shareFooter
  },
  methods:{
    submit:function(){
    	this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
  input:-ms-input-placeholder {
    color: #A8A8A8;
    font-size: 0.5973333333333334rem;
  }

  input:-moz-placeholder {
    color: #A8A8A8;
    font-size: 0.5973333333333334rem;
  }

  input::-webkit-input-placeholder {
    color: #A8A8A8;
    font-size: 0.5973333333333334rem;
  }
.certification{
  .form{
    width: 100%;
    margin-top: 0.8533333333333334rem;
    margin-bottom: 0.8533333333333334rem;
    .form-item{
      display:flex;
      width:100%;
      height: 1.8773333333333333rem;
      line-height: 1.8773333333333333rem;
      background: #fff;
      font-size: 0.5973333333333334rem;
      color: #222222;
      border-bottom: 1px solid #F3F3F3;
      /*padding-left: 1.28rem;*/
      .item-ipt{
        flex:1;
        height: 100%;
        padding:0 1.28rem;
        font-size: 0.5973333333333334rem;
        color: #222222;
      }
    }
    .login-btn{
      display: block;
      width: 11.52rem;
      height: 1.7066666666666668rem;
      margin: auto;
      text-align: center;
      line-height: 1.7066666666666668rem;
      font-size: 0.6rem;
      margin-top: 0.8533333333333334rem;
      margin-bottom: 1.5573333333333332rem;
      opacity: 0.99;
      background: #D5D5D5;
      border-radius: 100px;
      color: #222222;
      cursor: pointer;
    }
  }
}
</style>
