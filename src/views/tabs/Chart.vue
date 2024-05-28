<template>
<div class="chart-container">
   <div v-for="(item,index) in data" :key="index">
      {{item.title}}
   </div>
</div>
</template>

<script setup>
import {defineProps, onMounted} from 'vue'

defineProps(['data'])

onMounted(()=>{
  console.log('Chart 组件初始化了')
})
</script>

<style lang="less" scoped>
.chart-container{
  border: 1px solid black;
}

</style>