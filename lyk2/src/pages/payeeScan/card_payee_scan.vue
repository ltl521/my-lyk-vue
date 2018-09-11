<template>
  <section>
    <div class="shoukuan-boss-gj">
      <ul>
        <li>
          <b style="float: left;">¥ </b>
          <i style="display: inline-block;height: 100%; width:6rem;line-height: 2rem">
            <input type="number" placeholder="请输入金额" id="lyCoin" style="padding-left: 0.5rem;font-size: 1rem;width: 100%" autofocus="autofocus">
          </i>
        </li>
        <li class="cyje">
          <p>常用金额</p>
          <div class="local-btn">
            <button class='local'>5</button>
            <button class='local'>10</button>
            <button class='local'>15</button>
          </div>
          <div class="local-btn">
            <button class='local' >20</button>
            <button class='local'>25</button>
            <button class='local' >30</button>
          </div>
        </li>
        <li>
          <button type="button" onclick="onScan();">扫码</button>
        </li>
      </ul>

    </div>
    <foot></foot>
  </section>
</template>
<script>
  import foot from '@/pages/common/foot'
  export default{
      name:'card_payee_scan',
      components:{
            foot
      }
  }

</script>
<style scoped>
  @import '../../assets/css/index-gj.css';
  @import "../../assets/css/xzStyle-gj.css";
</style>
