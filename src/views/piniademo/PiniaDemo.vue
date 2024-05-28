<script setup>
import { ref, onMounted, onUnmounted,watch,watchEffect,reactive } from 'vue'
import dayjs from 'dayjs'


const pdfParams = reactive({
  pageNumber:1,//当前页
  total:0  //总页数
})
//
//
// // 定义一个变量，不要定义成ref或者reactive格式，就定义成普通变量即可
// let pdfDoc = null
//
// // 这里必须使用异步去引用pdf文件，直接去import会报错，也不知道为什么
// onMounted(async()=>{
//   let pdfjs = await import('pdfjs-dist/build/pdf')
//   let pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry')
//   pdfjs.GlobaWorkerOptions.workerSrc = pdfjsWorker
// //  次文件位于assets
//   let url = ref('../../assets/pdfDemo.pdf')
//   console.log('url',url.value)
// })





import { vMiniWeather, vMiniWeatherIcon } from 'vue3-mini-weather'
const day = ref(dayjs().format('YYYY-MM-DD HH:mm'))
let intervalId = null
onMounted(() => {
  intervalId = setInterval(() => {
    day.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
  }, 1000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})


//测试watch函数

const count = ref(19)


/**
 * Vue的watch和watchEffect函数允许我们观察值的变化冰相应的做出反应，watch函数用于监视特定数据的变化
 * ，并在数据变化时执行回调函数，他接受两个参数：要监视的数据和回调函数。当监视的数据发生改变时，回调函数
 * 将被触发。watchEffect函数也用于监视数据的变化，但他不需要制定要监视的特定数据。相反，他会自动追踪在
 * 其函数体中使用的任何相应试数据，并在这些数据发生变化时触发回调函数。
 *
 *
 * 注：watch函数观察 某个值的变化，
 *   而watchEffect函数在每次选然后观察 某个 值
 *
 * */

watch(count,(newValue,oldValue)=>{
    console.log(`Count changed from ${oldValue} to ${newValue}`)
})

watchEffect(()=>{
  console.log(`count is ${count.value}`)
})

function handelButton(){
  count.value ++
}
const counts = ref(0)
const event = 'mouseenter'
function something(){
  console.log(`${event}执行了someThing`)
  counts.value ++

}
</script>

<template>
  <div>
    <h1>现在的时间是: {{ day }}</h1>
    <div>
      <vMiniWeather class="weather-info">
        <template #default="{weather, icon}">
          <!--插入图标-->
          <vMiniWeatherIcon :icon="icon" class="weather-icon"></vMiniWeatherIcon>
          <!--DIY内容-->
          <span class="weather-text">{{weather.cityname}}/{{weather.weather}}/{{weather.temp}}</span>
        </template>
      </vMiniWeather>
    </div>
    <div>watch:{{count}}</div>
    <div><button @click="handelButton">count+1</button></div>


<!--    pdf示例  -->
    <div class="box">
      <div class="tool-bar">
        <div>{{ pdfParams.pageNumber }} / {{ pdfParams.total }}</div>
        <button type="primary" :disabled="pdfParams.pageNumber == pdfParams.total" @click="nextPage">下一页
        </button>
        <button type="primary" :disabled="pdfParams.pageNumber == 1" @click="prevPage">上一页</button>
      </div>
      <canvas id="pdf-render"></canvas>
    </div>
    <el-button type="primary" @[event]="something">请点击我</el-button>
    <span>{{counts}}</span>
  </div>
</template>


<style>
.weather-info {
  display: flex;
  align-items: center;
}
/*修改图标样式*/
.weather-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
/*修改文本样式*/
.weather-text {
  color: #000;
}

</style>