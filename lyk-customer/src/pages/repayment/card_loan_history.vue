<template>
<div class="repayment">
  <div class="repayment-choose-all">
    <input type="checkbox" id="Allseclet"/> <label for="Allseclet" class="agreeBtn">全选</label>
  </div>
  <div class="repayment-list" id="data_host">
    <div class="repayment-item" id="">
      <div class="item-choose">
        <input type="checkbox" class="item-choose-ipt" id="">
      </div>
      <div class="item-content">
        <div class="repayment-date">
          <p>
            <span>11</span>天
          </p>
          <p>11</p>
        </div>
        <div class="repayment-number">
          <p>消费金额 <span>¥<span class="money-je">222</span></span>
          </p>
          <p>需还服务费 <span>¥<span class="serve-money">222 </span></span>
          </p>
        </div>
      </div>
      <div class="item-detail" @click="jumpDetail"></div>
    </div>
  </div>

  <blank-record></blank-record>
  <remind-modal></remind-modal>

  <div class="repayment-foot">
    <div class="pay-total">
      <p class="pay-capital">需还本金：¥ <span id="all-money">0.00</span></p>
      <p class="pay-service">需还服务费：¥ <span id="all-serve">0.00</span></p>
    </div>
    <div class="pay-btns">
      <button>结清</button>
      <button>还服务费</button>
    </div>
  </div>
</div>
</template>

<script>
  import blankRecord from '@/pages/common/blank_record'
  import remindModal from '@/pages/common/remind_modal'
export default{
	name: 'repaymentHistory',
  components:{
    blankRecord,
    remindModal
  },
  methods:{
    jumpDetail:function(){
    	this.$router.push('/repaymentDetail')
    }
  }
}
</script>

<style lang="less" scoped>
.repayment{
  .repayment-choose-all{
    position: fixed;
    top: 0px;
    z-index: 9999;
    width: 100%;
    height: 1.8773333333333333rem;
    background: #FFFFFF;
    box-shadow: 0 0.042666666666666665rem 0.08533333333333333rem 0 rgba(227, 227, 227, 0.5);
    padding-left: 0.5546666666666666rem;
    margin-bottom: 0.512rem;
    input{
      width: 0.6826666666666666rem;
      height: 0.6826666666666666rem;
      border: 1px solid #eee;
      display: none;
    }
    .agreeBtn{
      display: inline-block;
      position: relative;
      padding-left: 1.152rem;
      font-size: 0.512rem;
      color: #868686;
      line-height: 1.8773333333333333rem;
    }
    .agreeBtn::before{
      content: "";
      display: block;
      width: 0.6826666666666666rem;
      height: 0.6826666666666666rem;
      position: absolute;
      left: 0;
      top: 0.5973333333333334rem;
      background: url(../../assets/img/Select-all.png) center center no-repeat;
      background-size: contain;
    }
  }
  .repayment-list{
    padding-top: 2.5rem;
    padding-bottom:3.8rem;
    .repayment-item{
      display:flex;
      width: 14.976rem;
      height: 3.4133333333333336rem;
      margin: 0 auto 0.4693333333333333rem;
      background: #FFFFFF;
      box-shadow: 0 0.042666666666666665rem 0.08533333333333333rem 0 #E3E3E3;
      border-radius: 4px;
      .item-choose{
        display:flex;
        height: 100%;
        width: 1.5rem;
        align-items:center;
        justify-content:center;
        .item-choose-ipt{
          display: block;
          width: 0.6826666666666666rem;
          height: 0.6826666666666666rem;
          background: url(../../assets/img/Select-all.png) center center no-repeat;
          background-size: contain;
        }
      }
      .item-content{
        flex:1;
        display:flex;
        justify-content:center;
        height: 100%;
        padding-top: 0.512rem;
        border-left: 1px dashed #e2e1e1;
        border-right: 1px dashed #e2e1e1;
        font-size: 0.5973333333333334rem;
        color: #222;
        .repayment-date{
          width: 43%;
          height:100%;
          text-align:center;
          p{
            span{
              font-size: 1.024rem;
              color: #FF7901;
            }
          }
          p:first-child{
            line-height: 0.8106666666666666rem;
            margin-bottom: 0.4266666666666667rem;
          }
        }
        .repayment-number{
          flex:1;
          text-align:right;
          padding-right: 0.4266666666666667rem;
          p{
            span{
              color: #FF7901;
            }
          }
          p:first-child{
            margin-bottom: 0.4266666666666667rem;
          }
        }
      }
      .item-detail{
        width: 1.1093333333333333rem;
        height: 3.4133333333333336rem;
        background: url(../../assets/img/arrow-1-gj.png) center center no-repeat;
        background-size: 40%;
      }
    }
  }
  .repayment-foot{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    .pay-total{
      display:flex;
      width: 100%;
      background: #fff;
      padding: 0 0.4693333333333333rem;
      height: 1.8773333333333333rem;
      line-height: 1.8773333333333333rem;
      font-size: 0.5973333333333334rem;
      color: #868686;
      border-top:1px solid rgba(227, 227, 227, 0.5);
      p{
        flex:1;
      }
      .pay-service{
        text-align:right;
      }
    }
    .pay-btns{
      display:flex;
      button{
        position:relative;
        width:50%;
        height: 1.8773333333333333rem;
        background-image: linear-gradient(-180deg, #FFCE00 0%, #FF7901 100%);
        box-shadow: 0 0.042666666666666665rem 0.08533333333333333rem 0 rgba(227, 227, 227, 0.5);
        font-size: 0.5973333333333334rem;
        color: #fff;
        border: none;
      }
      button:first-child::after{
        content: "";
        display: block;
        width: 0.021333333333333333rem;
        height: 100%;
        border-right: 1px solid #f3e7dc;
        opacity: 0.6;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
}
</style>
