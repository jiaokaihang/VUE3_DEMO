<script setup>
import {defineProps, getCurrentInstance, onMounted} from 'vue'
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
const props = defineProps([
  'id',
  'text',
    'XAxisType',
    'XAxisData',
    'YAxisType',
    'YAxisData',
    'SeriesData'
])

onMounted(()=>{
  const echart = document.getElementById(props.id)
  const chart = echarts.init(echart)
  const option = {
    title:{
       text:props.text,
      left:'center'
    },
    tooltip:{},
    xAxis:{
      type:props.XAxisType,
      data:props.XAxisData,
    },
    yAxis:{
      type:props.YAxisType,
      data:props.YAxisData?props.YAxisData:''
    },
    series:[
      {
        data:props.SeriesData,
        type:'bar'
      }
    ]
  }
  chart.setOption(option)
})
</script>


<template>
<div>
  <div
      :id="id"
      :style="{ width: '100%', height: '350px' }">

  </div>
</div>
</template>


<style>

</style>