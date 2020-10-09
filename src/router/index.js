import Vue from "vue";
import VueRouter from "vue-router";
// import XXX from "@/router/routerDemoRouter";

Vue.use(VueRouter);

/*路由配置*/

const routes = [
  {
    path: "/",
    name: "allContents",
    component: () => import("@/views/contents/allContents"),
    children:[
        // ...XXX,
        ...require('@/router/routerDemoRouter').default,

        ...require('./baseDemoRouter').default,
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
  {//当前面的路由都匹配不到的情况，跳转到公用的主页，需要放在路由的最后面
    path:'*',
    redirect:'/'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
//
router.beforeEach((to,from,next)=>{
  console.log('前置路由守卫');
  console.log(to.matched);
  if(to.path=='/destination4/props/dd'){
    //阻断路由
    // next(false)
    //重新定向
    next({path:'/'})
  }else {
    next();
  }
});
router.afterEach((to,form)=>{
  console.log('后置路由守卫')
})

export default router;
