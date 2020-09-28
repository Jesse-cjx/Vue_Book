<template>
  <div>
    <h3>命名视图实现</h3>
    <router-link to="/redirectAndAlias">复原</router-link> |
    <router-link to="/redirect">重定向</router-link> |
    <router-link to="/alias">别名</router-link>
    <div class="show-content">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "redirectAndAlias"
  }
</script>

<style scoped lang="stylus">

</style>
