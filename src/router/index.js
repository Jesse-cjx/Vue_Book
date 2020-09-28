import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/*路由配置*/
const allContents = () => import("@/views/contents/allContents");

const routes = [
  {
    path: "/",
    name: "allContents",
    component: allContents,
    children:[
        ...require('./routerDemoRouter').default,
    ]
  },
    //项目自带的
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Home",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
