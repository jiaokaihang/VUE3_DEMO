import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css'
import routers from "@/router/router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import Particles from 'vue3-particles'
import * as echarts from 'echarts'
// 配置国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import dataV from '@jiaminghi/data-view'
import weather from 'vue3-mini-weather'
import 'windi.css'
// import "default-passive-events";
import pinia  from "../src/store/index";
import App from "./App.vue";
import { getPlatformConfig } from "./config";
import '../mock/map/index'
// import VueParticles from 'vue-particles'

const app = createApp(App);
// 全局挂载echarts
app.config.globalProperties.$echarts = echarts

getPlatformConfig(app).then(async config => {
  app.use(routers);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.use(ElementPlus);
  app.use(routers); //使用路由
  app.use(weather)
  app.use(Particles)
  app.use(pinia);
  app.use(dataV)
  console.log(pinia)
  app.use(ElementPlus, {
    locale: zhCn,
  })
  app.mount("#app");
});