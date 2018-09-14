<template>
  <section>
    <nav class="lyc-nav-boss">
      <ul class="nav-li-gj">
        <li><router-link class="active-nav-gj" to="/"><i class="nav-tp1"></i><span>收款</span></router-link></li>
        <li><router-link  to="/setting_home"><i class="nav-tp3"></i><span>我的</span></router-link></li>
      </ul>
    </nav>
  </section>

</template>
<script>
  export default{
      name:'foot',
  }


</script>

<style scoped>
  @import '../../assets/css/index-gj.css';
</style>

