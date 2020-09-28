<template>
  <div>
    <router-link to="/dynamicMatching">复原</router-link>|
    <router-link to="/destination4/jojo/aa">jojo</router-link>|
    <router-link to="/destination4/dio/bb">dio</router-link>
    <div class="show-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dynamicMatching"
  }
</script>

<style scoped lang="stylus">

</style>
