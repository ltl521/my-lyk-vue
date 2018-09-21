<template>
<div class="transaction">
  <div class="transaction-list">
    <div class="transaction-item" @click="jumpDetail">
        <dl class="item-data">
          <dt>时间</dt>
          <dd >2017-10-27  10:20:30</dd>
        </dl>
        <dl class="item-money">
          <dt>金额</dt>
          <dd>-¥30.00</dd>
        </dl>
    </div>
    <div class="transaction-item">
      <dl class="item-data">
        <dt>时间</dt>
        <dd >2017-10-27  10:20:30</dd>
      </dl>
      <dl class="item-money">
        <dt>金额</dt>
        <dd>-¥30.00</dd>
      </dl>
    </div>
  </div>
  <blank-record></blank-record>
</div>
</template>

<script>
  import blankRecord from '@/pages/common/blank_record'
  export default {
    name: 'transactionRecord',
    components: {
      blankRecord
    },
    methods:{
      jumpDetail:function(){
      	this.$router.push('/transactionDetail')
      }
    }
  }
</script>

<style lang="less" scoped>
.transaction{
  .transaction-list{
    .transaction-item{
      display:flex;
      align-items:center;
      width: 94%;
      background: #FFFFFF;
      box-shadow: 0 0.042666666666666665rem 0.08533333333333333rem 0 #E3E3E3;
      border-radius: 4px;
      margin: 0.4266666666666667rem auto 0;
      padding: 0.768rem 0.3rem 0.4rem;
      font-size: 0.5973333333333334rem;
      color: #222;
      line-height:1rem;
      .item-data{
        width:60%;
      }
      .item-money{
        width:40%;
        text-align: right;
        padding-right:.5rem;
        dd{
          color: #FF7901;
        }
      }
      dt{
        margin-bottom:.3rem;
      }
    }
    .transaction-item::after{
      content:'';
      display: block;
      width: 0.3413333333333333rem;
      height: 0.6826666666666666rem;
      background: url(../../assets/img/arrow-1-gj.png) center center no-repeat;
      background-size: cover;
    }

  }
}
</style>
