<template>
  <div class="message-center" id="data_host">
    <div class="line-wrapper" @click="jumpDetail">
      <div class="line-scroll-wrapper">
        <div class="line-normal-wrapper">
          <div class="newsCont-box">
            <dl class="clearfix">
              <dt class="addDots-wd">付款成功</dt>
              <dd>2017.11.28.10:37</dd>
            </dl>
            <p>您向商户支付了xx元</p>
          </div>
        </div>
        <div class="line-btn-delete">
          删除
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'certification',
    methods: {
      jumpDetail: function () {
        this.$router.push('/message_detail')
      }
    }
  }
</script>

<style lang="less" scoped>
  .clearfix:after {
    content: ".";
    display: block;
    overflow: hidden;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .message-center {
    width: 100%;
    margin-top: 0.8533333333333334rem;
    overflow: hidden;
    box-shadow: 0 0.042666666666666665rem 0.08533333333333333rem 0 #E3E3E3;
    .line-wrapper {
      width: 100%;
      background: #fff;
      overflow: hidden;
      font-size: 1.3em;
      position: relative;
      margin-bottom: 1px;
      height: 3.5133333333333336rem;
      .line-scroll-wrapper {
        white-space: nowrap;
        width: 20.2rem;
        .line-normal-wrapper {
          display: inline-block;
          float: left;
          width: 16rem;
          .newsCont-box {
            padding: 0.5rem 0.7rem;
             dl {
              margin-bottom: 0.7rem;
              dt {
                display: inline-block;
                float: left;
                font-size: 0.5973333333333334rem;
                color: #222222;
                position: relative;
              }
              dd {
                display: inline-block;
                float: right;
                font-size: 0.5973333333333334rem;
                color: #898989;
              }
            }
            p {
              font-size: 0.5973333333333334rem;
              color: #898989;
            }
          }
        }
        .line-btn-delete {
          float: left;
          width: 4.2rem;
          height: 3.5133333333333336rem;
          line-height: 3.5133333333333336rem;
          background: #E00202;
          font-size: 0.768rem;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
</style>
