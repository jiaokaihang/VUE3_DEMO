import { createRouter, createWebHistory } from "vue-router";
import {RouterView} from 'vue-router'
import Content from '@/componts/content/Content.vue'
import Home from "../views/home/Home.vue";
import Processcenter from "../views/processcenter/Processcenter";
import Productpara from "../views/productpara/Productpara";
import User from '../views/System/user/User.vue'
import Pr from '@/views/processcenter/Pr.vue'
import Java from '@/views/processcenter/Java.vue'
const constRoutes = [
    {
        path: "/",
        redirect: "/content/home",
    },
    // 首页
    {
        path: "/content/home",
        name:"Home",
        component: Home,
        meta:{title:'首页'}
    },
    // 基础数据
    {
        path:'/basicdata',
        meta:{title:'基础数据',roles:['sys:manger']},
        component: RouterView,
        children: [
            {
                path: "/basicdata/processcenter",
                name:"processcenter",
                component: RouterView,
                meta: { title:'表格封装'},
                children:[
                    {
                        path: "/basicdata/processcenter/map",
                        name:"pr",
                        component:Pr,
                        meta:{title:'地图展示',roles:['sys:dept']}
                    },
                    {
                        path: "/basicdata/processcenter/java",
                        name:"java",
                        component:Java,
                        meta:{title:'Java测试组件',roles:['sys:user']}
                    }
                ]
            },
            {
                path: "/basicdata/productpara",
                component: Productpara,
                meta: { title:'表单组件',roles:['sys:form']},

            },

        ]
    },

// 系统管理
    {
        path: "/netWork",
       name:'netWork',
        meta:{title:'系统管理',roles:['sys:sysetms']},
        children:[
            {
                path:'/network/user',
                component:User,
                meta: { title:'用户管理',roles:['sys:users']},
            },

        ]
    },

];

const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: constRoutes,
});

export default router;
