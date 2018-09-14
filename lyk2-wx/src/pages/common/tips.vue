
<template>
  <div class="modal">
    <div class="modal-content">{{this.message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props:{
        message:String
    }
  }
</script>
