import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(App)
  /*render: function (createElement) {
    return createElement(App);
  }*/
  /*官方文档中是这样的，createElement 是 Vue.js 里面的 函数，
  这个函数的作用就是生成一个 VNode节点，render 函数得到这个 VNode 节点之后，
  返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
  ES6：render: createElement => createElement(App)
  然后用h代替createElement，使用箭头函数来写：render: h => h(App)
  */
}).$mount("#app");
