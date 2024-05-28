<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Tab 1" name="first">
      <!--      <Chart :data="data"/>-->
      <!--      Teleport 目标节点1-->
      <div id="tabPanefirst"></div>
      <div>Content of Tab Plan 1</div>
    </el-tab-pane>
    <el-tab-pane label="Tab 2" name="second">
      <!--      <Chart :data="data"/>-->
      <!--      Teleport 目标节点2-->
      <div id="tabPanesecond"></div>
      <div>Content of Tab Plan 2</div>
    </el-tab-pane>
    <el-tab-pane label="Tab 3" name="third">
      <!--      <Chart :data="data"/>-->
      <!--      Teleport 目标节点3-->
      <div id="tabPanethird"></div>
      <div>Content of Tab Plan 3</div>
    </el-tab-pane>
  </el-tabs>

  <Teleport :to="teleportTo" v-if="showChart">
    <Chart  :data="data"/>
  </Teleport>
</template>
<script setup>
import Chart from "@/views/tabs/Chart.vue";
import {ref} from "vue";
function handleClick(tab, event) {
  console.log(tab, event)
}
import {onMounted,shallowRef,computed} from 'vue'
const data = shallowRef([])
// 记录当前Tab
const activeName = shallowRef('first')
const showChart = shallowRef(false)
// 计算 TelePort 需要渲染到那个节点
const teleportTo = computed(()=>`#tabPane${activeName.value}`)
// 模拟请求数据
const fetchData = async () =>{
  console.log('开始 chart 请求了')
//   模拟请求
  const res = await  Promise.resolve(
      new Array(6).fill(0).map((_,index)=>({
        title:`这是 Chart 组件内内容 ${index}`
      }))
  )
  data.value = res

  showChart.value = true
  console.log('结束 chart 请求了')
}

onMounted(()=>{
  fetchData()
})
</script>
<style>

</style>