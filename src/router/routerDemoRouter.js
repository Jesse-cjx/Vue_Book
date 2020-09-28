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
    //路由重定向
    path: "/redirectAndAlias",
    name: "redirectAndAlias",
    component:redirectAndAlias,
    children:[
      {
        path: "/destination3",
        name: "destination3",
        component:destination3,
        alias:'/alias'
      },
      {
        path: "/redirect",
        name: "redirect",
        //重定向三种方式
        redirect:'/destination3',
        // redirect:{name:'/destination3'},
        /*redirect : function () {
          return {name:'/destination3'}
        }*/
      }
    ]
  },
  {

    path:"/dynamicMatching",
    name:"dynamicMatching",
    component:dynamicMatching,
    children:[
      {//动态路由配置
        path:"/destination4/:id/:text",//id是变量名，可以修改,可多段动态
        component:destination4,
      }
    ]
  }
]
