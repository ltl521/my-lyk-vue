<template>
<div class="header">
  <router-link id="card" to="/card_share" tag="div">
    <img class="header-img" src="../../assets/img/share3.png" alt="">分享
  </router-link>
  <router-link  id="scan" to="/card_payee_scan" tag="div">
    收款<img class="header-img" src="../../assets/img/fkm3.png" alt="">
  </router-link >
</div>
</template>

<script>
export default {
	name:'homeHeader'
}
</script>

<style scoped>
.header{
  position: absolute;
  top:0.5546666666666666rem;
  left:0;
  right:0;
  width:100%;
  height: 1.7066666666666668rem;
  font-size: 0.5973333333333334rem;
  color: #FFf;
}
.header #card{
  float:left;
  line-height: 1.7066666666666668rem;
  cursor: pointer;
}
.header #scan{
  float:right;
  line-height: 1.7066666666666668rem;
  cursor: pointer;
}
.header .header-img{
  width: 1.7066666666666668rem;
  height: 1.7066666666666668rem;
  border-radius: 50%;
  vertical-align: middle;
}
#card img{
  margin-left: 0.512rem;
  margin-right: 0.21333333333333335rem;
}
#scan img{
  margin-left: 0.21333333333333335rem;
  margin-right: 0.512rem;
}
</style>
