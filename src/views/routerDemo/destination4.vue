<template>
  <div>
    已跳转到目的地：{{this.$route.params.firstVal || '无数据'}},{{this.$route.params.secondVal || '无数据'}}<br>
    params:{{threeVal || '无数据'}}<br>
    props:{{firstVal || '无数据'}},{{secondVal || '无数据'}}<br>
  </div>
</template>

<script>
  export default {
    name: "destination4",
    props:['firstVal','secondVal','threeVal'],
    beforeRouteEnter(to,from,next){
      //不是取用组件实例this，因为在实例创建前调用了这个守卫,有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候不会激发
      console.log('调用了组件内前置守卫');
      next();
    },
    beforeRouteUpdate(to,from,next){
      //复用组件且改变路由的情况，例如：对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候
      console.log('调用了组件内数据更新守卫');
      next();
    },
    beforeRouteLeave(to,from,next){
      //有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候不会激发
      console.log('调用了组件内离开守卫');
      next();
    },
  }
</script>

<style scoped lang="stylus">
  div{
    color $bgColor;
  }
</style>
