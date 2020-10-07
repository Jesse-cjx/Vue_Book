<template>

  <div>
    <h3>动态路由配置与路由传参</h3>
    <router-link to="/dynamicMatching">复原</router-link>|
    <router-link to="/destination4/props/aa">props-aa</router-link>|
    <!-- 一、params的值如果不是与动态路由的变量匹配的话，只在跳转时获取值，刷新页面时值就会消失，如threeVal；
         二、跳转使用PATH时，params的值是不会传的，即使有对应的动态路由的变量匹配，也不生效；-->
    <router-link :to="{name:'destination4',params:{firstVal:'props',secondVal:'bb',threeVal:'params'}}">params</router-link>|
    <router-link :to="{path:'/destination4/props/cc',query:{name:'我是谁',age:'26'}}">prop函数类型</router-link>
    <div class="show-content">
      <router-view></router-view>
    </div>
    <p>
      守卫触发顺序（官方）<br>
      导航被触发。<br>
      在失活的组件里调用 beforeRouteLeave 守卫。<br>
      调用全局的 beforeEach 守卫。<br>
      在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。<br>
      在路由配置里调用 beforeEnter。<br>
      解析异步路由组件。<br>
      在被激活的组件里调用 beforeRouteEnter。<br>
      调用全局的 beforeResolve 守卫 (2.5+)。<br>
      导航被确认。<br>
      调用全局的 afterEach 钩子。<br>
      触发 DOM 更新。<br>
      调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。</p>
  </div>
</template>

<script>
  export default {
    name: "dynamicMatching"
  }
</script>

<style scoped lang="stylus">

</style>
