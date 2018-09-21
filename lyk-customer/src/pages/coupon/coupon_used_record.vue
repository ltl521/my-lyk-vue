<template>
  <div class="coupon-container">
    <coupon-header></coupon-header>
    <div class="coupon-list">
      <div class="coupon-item">
        <div class="coupon-item-left">
          <p>优惠券1</p>
          <p>122</p>
          <!-- <p>1</p>
           <p>1</p>-->
          <span>9.20~10.1</span>
        </div>
        <div class="coupon-item-right">
          <p>立即<br>使用</p>
          <span class="icon-used"></span>
        </div>
      </div>
      <div class="coupon-item">
        <div class="coupon-item-left">
          <p>优惠券1</p>
          <p>122</p>
          <!-- <p>1</p>
           <p>1</p>-->
          <span>9.20~10.1</span>
        </div>
        <div class="coupon-item-right bj">
          <p>立即<br>使用</p>
        </div>
      </div>
    </div>
    <blank-record></blank-record>
  </div>
</template>

<script>
  import couponHeader from './coupon_header'
  import blankRecord from '@/pages/common/blank_record'
  export default {
    name:'couponRecord',
    components:{
      couponHeader,
      blankRecord
    }
  }
</script>

<style lang="less" scoped>
  .coupon-container{
    .coupon-list{
      width:100%;
      padding-top:3.4rem;
      .coupon-item{
        display:flex;
        overflow: hidden;
        width: 14.805333333333333rem;
        margin: auto;
        margin-bottom: 0.576rem;
        .coupon-item-left{
          width: 9.941333333333333rem;
          height: 4.266666666666667rem;
          background: url(../../assets/img/yhqLeft.png) no-repeat;
          background-size:100% 100%;
          padding-left: 1.2373333333333334rem;
          padding-top: 0.6826666666666666rem;
          p{
            font-size: 0.768rem;
            color: #FF7901;
            letter-spacing: 0;
            line-height: 0.8106666666666666rem;
            margin-bottom: 0.256rem;
          }
          span{
            font-size: 0.512rem;
            color: #898989;
            letter-spacing: 0;
            position: relative;
            top:-0.4266666666666667rem;
          }
        }
        .coupon-item-right{
          position:relative;
          display:flex;
          justify-content:center;
          align-items:center;
          width: 4.864rem;
          height: 4.266666666666667rem;
          background: url(../../assets/img/yhqRight2.png) no-repeat;
          background-size: 100% 100%;
          font-size: 0.768rem;
          color: #FEFEFE;
          cursor: pointer;
          .icon-used{
            position:absolute;
            width:2.56rem;
            height:2.56rem;
            background:url(../../assets/img/ysy2.png) no-repeat;
            background-size:100% 100%;
            bottom:0;
            left:-2.56rem;
          }
        }
      }
    }
  }
</style>
