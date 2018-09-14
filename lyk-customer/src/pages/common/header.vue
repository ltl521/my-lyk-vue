<template>
<div class="header">
  <router-link class="header-item" id="card" to="/share" tag="div">
    <img src="../../assets/img/share3.png" alt="">分享
  </router-link>
  <router-link class="header-item" id="scan" to="/" tag="div">
    收款<img src="../../assets/img/fkm3.png" alt="">
  </router-link>
</div>
</template>

<script>
export default {
	name:'homeHeader'
}
</script>

<style lang="less" scoped>
.header{
  position: absolute;
  top:0.5546666666666666rem;
  left: 0px;
  right:0;
  width:100%;
  height: 1.7066666666666668rem;
  padding:0 0.512rem;
  font-size: 0.5973333333333334rem;
  color: #fff;
  cursor: pointer;
  .header-item{
    float:left;
    height: 1.7066666666666668rem;
    img{
      width: 1.7066666666666668rem;
      height: 1.7066666666666668rem;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  #card{
    img{
      margin-right:0.21333333333333335rem;
    }
  }
  #scan{
    float:right;
    img{
      margin-left:0.21333333333333335rem;
    }
  }
}
</style>
