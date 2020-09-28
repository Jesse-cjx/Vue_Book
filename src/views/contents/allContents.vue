<template>
  <div class="body">
    <h3>vue学习项目</h3>
    <div class="main-body">
      <ul class="nav">
        <li>
          <h4>Vue Router</h4>
          <p><router-link to="">动态路由</router-link></p>
          <p><router-link to="/routerNav">编程式导航</router-link></p>
          <p><router-link to="/namedViews">命名视图</router-link></p>
          <p><router-link to="/redirectAndAlias">重定向和别名</router-link></p>
          <p><router-link to="">路由组件传参</router-link></p>
        </li>
      </ul>
      <div class="realize">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "allContents"
  };
</script>

<style lang="stylus" scoped>
  .body {
    width 1200px
    margin 0 auto
  }

  .main-body {
    display flex
    justify-content space-between;
    min-height 80vh
  }

  .nav {
    width 190px
    box-shadow: 0px 0px 5px #888888;
    margin 0
    padding 0
    margin-right 10px

    h4 {
      margin 10px 0 0 0
    }

    p {
      margin 10px
      box-shadow: 0px 0px 5px #888888;
    }

    li {
      list-style none;
    }
  }

  .realize {
    width 1000px
    box-shadow: 0px 0px 5px #888888;
  }
</style>
