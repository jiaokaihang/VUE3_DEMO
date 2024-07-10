import { createRouter, createWebHistory } from "vue-router";
import {RouterView} from 'vue-router'
import {getToken} from '@/utils/token'
import Content from '@/componts/content/Content.vue'
import Home from "../views/home/Home.vue";
import Processcenter from "../views/processcenter/Processcenter";
import sortType from "../views/processcenter/sortablejs.vue";
import Map from '@/views/processcenter/Pr.vue'
import mapThree from "@/views/processcenter/mapThree.vue";
import threeMap from '@/views/investmentattraaction/Investmentattraaction.vue'
import Investmentattraaction from "..//views/investmentattraaction/Investmentattraaction";
import Productpara from "../views/productpara/Productpara";
import UploadImage from "../views/uploadImage/UploadImage";
import Watermark from "../views/watermark/Watermark";
import Calendar from "../views/calendar/Calendar";
import ButtonView from "../views/buttonview/ButtonView";
import PiniaDemo from "../views/piniademo/PiniaDemo";
import RadioDemo from "../views/radio/RadioDemo";
import User from '../views/System/user/User.vue'
import Juese from '../views/System/juese/Juese.vue'
import Menu from '../views/System/menu/Menu.vue'
import Bumen from '../views/System/bumen/Bumen.vue'
import Gangwei from '../views/System/gangwei/Gangwei.vue'
import Login from '../views/login/Login.vue'
import SetUp from '../views/setups/index.vue'
import Client from '../views/client/index.vue'

/*
*  @method 定义路由的方法
*  @name 设定路由的名字，一定要填写不然使用<keep-alive></keep-alive>
*  meta :{
*     title:'title'   //设定路由在侧边栏和面包屑中展示的名字
*     icon：‘svg-name’ //设置改路由的图标，对应路径src/assets.icons/svg
*     breadcrumb：false //如果设置为false，则不会再breadcrumb面包屑中显示
*     activeMenu:'/system/user' //当路由设置了改属性，则会高亮相对应的侧边栏
*     }
* */
const constRoutes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    name:"login",
    component: Login,
    meta:{needLogin:false}

  },
  {
    path: "/content/home",
    name:"Home",
    component: Home,
    meta:{title:'首页',needLogin:true}
  },
  {
    path: '/404',
    component: ()=>import('@/views/404/404.vue'),
    // meta:{title:'404'}
  },

  {
    path:'/basicdata',
    component: RouterView,
    meta:{title:'基础数据',roles:['sys:manger'],needLogin:false},
    children: [
      {
        path: "/basicdata/processcenter",
        name:"processcenter",
        component: RouterView,
        meta: { title:'表格封装',needLogin:true},
        children:[
          {
            path: "/basicdata/processcenter/table",
            name:"table",
            // component:()=> import('@/views/processcenter/Processcenter.vue'),
            component:Processcenter,
            meta:{title:'表格封装组件',needLogin:true}
          },
          {
            path: "/basicdata/processcenter/sortable",
            name:"sortable",
            component:sortType,
            meta:{title:'表格排序组件',needLogin:true}
          }
        ]
      },
      {
        path: "/basicdata/maps",
        name:"investmentattraction",
        component: RouterView,
        meta: { title:'地图信息',needLogin:true},
        children:[
          {
            path: "/basicdata/maps/map",
            name:"map",
            component:Map,
            meta:{title:'2D地图',needLogin:true}
          },
          {
            path: "/basicdata/maps/3Dmap",
            name:"3Dmap",
            component:threeMap,
            meta:{title:'3D地图',needLogin:true}
          },
          // {
          //   path: "/basicdata/maps/mapThree",
          //   name:"mapThree",
          //   component:mapThree,
          //   meta:{title:'中国地图'}
          // },
        ]
      },
      {
        path: "/basicdata/productpara",
        component: Productpara,
        meta: { title:'表单组件',needLogin:true},

      },
      {
        path: "/basicdata/upload",
        component: RouterView,
        meta: { title:'上传组件',needLogin:true},
        children:[
          {
            path: "/basicdata/upload/uploadImage",
            component: UploadImage,
            meta: { title:'上传组件',needLogin:true},
          },
          {
            path: "/basicdata/upload/uploadFile",
            component: ()=>import('../views/uploadFile/UploadFile.vue'),
            meta: { title:'文件分片上传',needLogin:true},
          }
        ]
      },
      {
        path: "/basicdata/watermark",
        component: Watermark,
        meta: { title:'水印组件',needLogin:true},
      },
      {
        path: "/basicdata/calendar",
        component: Calendar,
        meta: { title:'日历组件',needLogin:true},
      },
      {
        path: "/basicdata/buttonview",
        component: ButtonView,
        meta: { title:'按钮组件',needLogin:true},
      },
      {
        path: "/basicdata/setups",
        component: SetUp,
        meta: { title:'步骤条组件',needLogin:true},
      },
      {
        path: "/basicdata/client",
        component: Client,
        meta: { title:'上传身份证组件',needLogin:true},
      },
      {
        path: "/basicdata/piniaShili",
        component: PiniaDemo,
        meta: { title:'pinia组件',needLogin:true},
      },
      {
        path: "/basicdata/radioDemo",
        component: RadioDemo,
        meta: { title:'单选按钮组件',needLogin:true},
      },
      {
        path: "/basicdata/danmu",
        component: ()=>import('@/views/danmaku/index.vue'),
        meta: { title:'弹幕组件',needLogin:true},
      },
      {
        path: "/basicdata/Tabs",
        component: ()=>import('@/views/tabs/Tab.vue'),
        meta: { title:'Tabs组件',needLogin:true},
      },
      {
        path: "/basicdata/inputCopy",
        component: ()=>import('@/views/inputCopy/InputCopy.vue'),
        meta: { title:'文本复制组件',needLogin:true},
      },
      {
        path: "/basicdata/fanyi",
        component: ()=>import('@/views/fanyi/index.vue'),
        meta: { title:'翻译组件',needLogin:true},
      },
      {
        path: "/basicdata/qrcode",
        component: ()=>import('@/views/qrcode/qrcode.vue'),
        meta: { title:'二维码组件',needLogin:true},
      },
      {
        path: "/basicdata/kongtiao",
        component: ()=>import('@/views/kongtiao/index.vue'),
        meta: { title:'便携小空调组件',needLogin:true},
      },
      {
        path: "/basicdata/gaode",
        component: ()=>import('@/views/gaode/index.vue'),
        meta: { title:'高德地图飞线图组件',needLogin:true},
      },
      {
        path: "/basicdata/gaodeReli",
        component: ()=>import('@/views/gaodereli/index.vue'),
        meta: { title:'高德地图热力图组件',needLogin:true},
      },
      {
        path: "/basicdata/gaodexian",
        component: ()=>import('@/views/gaodexian/index.vue'),
        meta: { title:'高德地图线图组件',needLogin:true},
      },
      {
        path: "/basicdata/gaodemaichongxian",
        component: ()=>import('@/views/gaodemaichongxian/index.vue'),
        meta: { title:'高德地图脉冲线组件',needLogin:true},
      },
      {
        path: "/basicdata/gaodewanggeReli",
        component: ()=>import('@/views/gaodewanggeReli/index.vue'),
        meta: { title:'高德地图网格热力图组件',needLogin:true},
      },
    ]
  },

// 系统管理
  {
    path: "/netWork",
    component: Content,
    meta:{title:'系统管理',roles:['sys:manger'],needLogin:true},
    children:[
      {
        path:'/network/user',
        component:User,
        meta: { title:'用户管理',needLogin:true},
      },
      {
        path:'/network/juese',
        component:Juese,
        meta: { title:'角色管理',needLogin:true},
      },
      {
        path:'/network/menu',
        component:Menu,
        meta: { title:'菜单管理',needLogin:true},
      },
      {
        path:'/network/bumen',
        component:Bumen,
        meta: { title:'部门管理',needLogin:true},
      },
      {
        path:'/network/gangwei',
        component:Gangwei,
        meta: { title:'岗位管理',needLogin:true},
      }
    ]
  },
  {
    path: "/account",
    component: Content,
    meta:{title:'账号管理',roles:['sys:manger'],needLogin:true},
    children: [
      {

        path: "/account/manageement",
        component: ()=>import('@/views/account/Account.vue'),
        meta: { title:'账号管理',needLogin:true},
      },
      // {
      //   title: "权限设置",
      //   path: "/account/settings",
      // },
    ],
  },
  {
    path:'/:pathMatch(.*)*',
    redirect: '/404',
    // meta: {title:'404'}
  }

];

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: constRoutes,
});

//全局守卫，登录拦截，本地没有存token，则跳转到登录页
 router.beforeEach((to, from, next) => {
    const token =getToken()
    if (to.meta.needLogin) {
        if(token){
          next()
        }else {
          if(to.path=='/login'){
            next()
          }else {
            next({path:'/login'})
          }
        }
    }else {
      next()
    }

 })

export default router;



