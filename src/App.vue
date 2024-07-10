<template>
  <!-- <dv-full-screen-container> -->
  <div ref="appRef" class="app">
    <el-container class="layout-container-demo" style="height: 100vh" v-if="($route.path !=='/login' && $route.path !== '/404')  ">
      <el-aside width="collapse" style="
      background: #242424;" >
        <el-scrollbar>
          <SideMenu></SideMenu>
        </el-scrollbar>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <TopHeader></TopHeader>

        </el-header>
        <el-card>
          <Breadcrumb/>
        </el-card>
        <el-main>
          <Content />
        </el-main>
      </el-container>
    </el-container>

    <template v-else>
      <router-view ></router-view>
    </template>
  </div>
  <!-- </dv-full-screen-container> -->
</template>

<script scope setup>
import DevicePixelRatio from '../src/utils/evicePixelRatio.js'
import {provide,ref,nextTick,onMounted,onUnmounted} from 'vue'
import _ from 'lodash'
import SideMenu from './componts/sideMenu/SideMenu'
import TopHeader from './componts/topHeader/TopHeader'
import Content from './componts/content/Content'
import Breadcrumb from "@/componts/layout/Breadcrumb.vue";


onMounted(() => {
  new DevicePixelRatio().init();
})

const isCollapse = ref(false);
provide("isCollapse", isCollapse)

const appRef = ref(null);
let scale = ref(1);
let translate = ref('');

// 响应窗口大小变化的函数
// const handleResize = _.debounce(() => {
//   const docHeight = document.body.clientHeight;
//   const docWidth = document.body.clientWidth;
// console.log('docHeight',docHeight,'docWidth',docWidth)
//   const standardScale = '100%' / '100%';

//   if (docWidth < 1920) {
//     const currentScale = docHeight / docWidth;
// console.log('currentScale',currentScale)
//     if (currentScale < standardScale) {
//       scale.value = docHeight / 1080;
//       const shouldWidth = 1920 * scale.value;
//       const offsetWidth = docWidth - shouldWidth;

//       translate.value = offsetWidth > 0 ? `translate(${offsetWidth / 2}px, 0)` : '';
//     } else {
//       scale.value = docWidth / 1920;
//       const shouldHeight = 1080 * scale.value;
//       const offsetHeight = docHeight - shouldHeight;
//       translate.value = offsetHeight > 0 ? `translate(0, ${offsetHeight / 2}px)` : '';
//     }
//   } else {
//     scale.value = 1;
//     translate.value = '';
//   }

//   applyStyles();
// }, 300);
// if(document.createEvent){
//   var event = document.createEvent("HTMLEvents");
//   event.initEvent("resize", true, true);
//   window.dispatchEvent(event);
// }else{
//   window.fireEvent("onresize");
// }

// // 应用样式到 DOM 元素
// const applyStyles = () => {
//   if (appRef.value) {
//     appRef.value.style.cssText = `

//           min-width: 100vw;
//           min-height: 98vh;
//         `;
//   }
// };

// 组件挂载后执行的逻辑
onMounted(async () => {
  await nextTick();
  window.addEventListener('resize', handleResize);
  // applyStyles(); // 确保在组件挂载后调用



  handleResize(); // 初始调用以应用样式
});

// 组件卸载前执行的清理逻辑
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});


</script>

<style >
body{
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100vh;
}
* {
  margin: 0px;
  padding: 0px;
}
.app{

}

.layout-container-demo .el-header {
  position: relative;



}

.layout-container-demo .el-aside {

}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
