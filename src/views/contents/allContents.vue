<template>
  <div class="body">
    <h3>vue学习项目</h3>
    <div class="main-body">
      <ul class="nav">
        <li :key="index" v-for="(item,index) in navList" @click="onShow(index)">
          <h4>{{item.title}}</h4>
          <div v-show="item.showFlag">
            <p v-for="(items,contentIndex) in item.navContent" :key="contentIndex">
              <router-link @click.native.stop="stopShow" :to="items.url">{{items.title}}</router-link>
            </p>
          </div>
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
    name: "allContents",
    data() {
      return {
        navList: [
          {
            title: '路由',
            showFlag: false,
            navContent: [
              {title: '动态路由匹配', url: '/dynamicMatching'},
              {title: '编程式导航', url: '/routerNav'},
              {title: '命名视图', url: '/namedViews'},
              {title: '重定向和别名', url: '/redirectAndAlias'},
            ]
          },
          {
            title: '基础',
            showFlag: false,
            navContent: [
              {title: '模板语法', url: '/baseDemo/vueSyntax'},
            ]
          },
        ]
      }
    },
    methods:{
      onShow(val){
        this.navList[val].showFlag=!this.navList[val].showFlag;
      },
      stopShow(){
        console.log('触发了事件并阻止冒泡')
      },
    },
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
    h4:hover{
      cursor pointer
      color blue
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
