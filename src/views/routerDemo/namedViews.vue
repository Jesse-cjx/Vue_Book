<template>
  <div>
    <h3>命名视图实现</h3>
    <router-link to="/namedViews">复原</router-link> |
    <router-link to="/namedViewsExp">展示</router-link>
    <div class="show-main">
      <div class="global-show2">
        <router-view ></router-view>
      </div>
      <div>
        <router-view name="a"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "namedViews"
  }
</script>

<style scoped lang="stylus">
  .show-main{
    display flex
    justify-content space-between
    >div{
      width 400px
      height 400px
      border black solid 1px
      margin 10px
    }
  }
</style>
