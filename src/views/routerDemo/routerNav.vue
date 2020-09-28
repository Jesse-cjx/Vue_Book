<template>
  <div>
    <h3>路由跳转的2种方式</h3>
    <div>
      <router-link to="/routerNav">初始化</router-link> |
      <router-link to="/destination1">跳转(声明式1)</router-link> |
      <router-link :to="{ name: 'destination1' }">跳转(声明式2)</router-link> |
      <span @click="jump1">跳转(编程式1)</span> |
      <span @click="jump2">跳转(编程式2)</span> |
    </div>
    <div class="show-main">
        <router-view></router-view>
    </div>
    <p>效果展示</p>
  </div>
</template>

<script>
export default {
  name: "routerNav",
  methods: {
    jump1() {
      this.$router.push({ path: "/destination1" });
    },
    jump2() {
      this.$router.push({ name: "destination1" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.show-main {
  width 400px
  height 400px
  border black solid 1px
}
</style>
