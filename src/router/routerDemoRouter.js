const routerNav= () => import("@/views/routerDemo/routerNav");
const namedViews=()=> import("@/views/routerDemo/namedViews");
const redirectAndAlias=()=>import("@/views/routerDemo/redirectAndAlias");
const dynamicMatching=()=>import("@/views/routerDemo/dynamicMatching");
const destination1 = () => import("@/views/routerDemo/destination1");
const destination2 = () => import("@/views/routerDemo/destination2");
const destination3 = () => import("@/views/routerDemo/destination3");
const destination4 = () => import("@/views/routerDemo/destination4");
export default [
  {//编程式的导航
    path: "/routerNav",
    name: "routerNav",
    component: routerNav,
    children: [
      //嵌套路由实现用例
      {
        path: "/destination1",
        //命名路由实现
        name: "destination1",
        component: destination1,
      },
    ]
  },
  {//命名视图
    path: "/namedViews",
    name: "namedViews",
    component:namedViews,
    children: [
      {
        path: "/namedViewsExp",
        name: "namedViewsExp",
        components:{
          default:destination1,
          a:destination2
        },
      }
    ]
  },
  {
    path: "/redirectAndAlias",
    name: "redirectAndAlias",
    component:redirectAndAlias,
    children:[
      {
        path: "/destination3",
        name: "destination3",
        component:destination3,
        //路由别名
        alias:'/alias'
      },
      {
        path: "/redirect",
        name: "redirect",
        //路由重定向三种方式
        // redirect:'/destination3',
        // redirect:{name:'/destination3'},
        /*redirect : function () {//和to是一样的，但不会引起eslint的未调用校验报错
          return {name:'/destination3'}
        }*/
        redirect : to => {//如果启用了eslint的未调用校验，to 会报错需要关闭："no-unused-vars":"off"
          return '/destination3'
        }
      }
    ]
  },
  {
    path:"/dynamicMatching",
    name:"dynamicMatching",
    component:dynamicMatching,
    //独享的路由守卫
    beforeEnter:(to,from,next)=>{
      console.log('独享的路由守卫实现');//其子路由跳转回本路由时，不触发
      next();
    },
    children:[
      {//动态路由配置与路由传参
        path:"/destination4/:firstVal/:secondVal",//id是变量名，可以修改,可多段动态
        name:'destination4',
        component:destination4,
        //props布尔类型，如果props被设置为true，route.params将会被设置为组件属性
        // props:true
        //props对象类型,只能是静态的
        // props:{firstVal:'xixixi',secondVal:'lalala'}
        //props函数类型
        props:(route)=>({firstVal:route.query.age,secondVal:route.query.name})
      }
    ]
  }
]
