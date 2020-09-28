<template>
  <div>
    已跳转到目的地：{{this.$route.params.id || '动态匹配失败'}},{{this.$route.params.text || '动态匹配失败'}}
  </div>
</template>

<script>
  export default {
    name: "destination4"
  }
</script>

<style scoped lang="stylus">
  div{
    color $bgColor;
  }
</style>
