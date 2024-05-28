<script setup>

import { getCurrentInstance, onMounted } from 'vue';
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
// 折线图
onMounted(() => {
  const dom = document.getElementById('myChart');
  const myChart = echarts.init(dom); // 初始化echarts实例
  const option = {
    title: {
      text: '折线图',
      left: 'center'
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };
  // 设置实例参数
  myChart.setOption(option);
})
// 饼状图
onMounted(()=>{
  const bingtuDom = document.getElementById('bingtuChart');
  const bingChart = echarts.init(bingtuDom); // 初始化echarts实例
  const option = {
    title: {
      text: '饼型图',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '前端学习',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'js' },
          { value: 735, name: 'vue' },
          { value: 580, name: 'react' },
          { value: 484, name: 'css' },
          { value: 300, name: 'html' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  bingChart.setOption(option)
})


// 柱状图
onMounted(()=>{
  const zhuzhuang = document.getElementById('zhuzhuangtu')
  const ZhuChart = echarts.init(zhuzhuang); // 初始化echarts实例

   const  option = {
     title: {
       text: '柱状图',
       left: 'center'
     },
     tooltip:{},
    xAxis: {
      type: 'category',
      data: ['初一', '初二', '初三', '初四', '初五', '初六', '初七']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
  ZhuChart.setOption(option)
})
// 堆叠图
onMounted(()=>{
  const duidie = document.getElementById('duidietu') //获取id所在的节点
  const duiDieChart = echarts.init(duidie); // 初始化echarts实例
  const option = {  //图形配置
    title: {  //图形标题
      text: '堆叠图',
      left: 'center'
    },
    tooltip: { //鼠标移入时显示的数据
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: { //图例显示的位置：left，right,top,bottom
      bottom:0
    },
    grid: { //网格显示的位置，left，right,top,bottom
      left: '0%',
      right: '0%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: { //x轴的显示内容，可将data更换为接口中返回的数据
      type: 'category',
      data:[
        '0:00',
        '1:00',
        '2:00',
        '3:00',
        '4:00',
        '5:00',
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
      ]
    },
    yAxis: { //y轴显示的内容，可将data更换为接口中返回的数据
      type: 'value',
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [ //每一列的数据
      {
        name: '学习', //名称
        type: 'bar', //类型
        stack: 'total',
        label: {
          // show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320,400,656,765,345,234,123]
      },
      {
        name: '上班',
        type: 'bar',
        stack: 'total',
        label: {
          // show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210,213,345,213,345,123,345]
      },
      {
        name: '娱乐',
        type: 'bar',
        stack: 'total',
        label: {
          // show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310,876,345,123,234,345,111]
      },
      {
        name: '看电影',
        type: 'bar',
        stack: 'total',
        label: {
          // show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410,342,234,345,123,969,234]
      },
      {
        name: '逛街',
        type: 'bar',
        stack: 'total',
        label: {
          // show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320,234,456,456,234,123,100]
      }
    ]
  };
  duiDieChart.setOption(option) //加载echarts
})
// 南丁格尔图
onMounted(()=>{
  const nanding = document.getElementById('nandingtu')
  const nanDingChart = echarts.init(nanding); // 初始化echarts实例

  const  option = {
    title: {
      text: '南丁格尔图',
      left: 'center'
    },
    tooltip:{

    },
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [40, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'element-ui' },
          { value: 38, name: 'element+' },
          { value: 32, name: 'antd' },
          { value: 30, name: 'antd-vue' },
          { value: 28, name: 'iview' },
        ]
      }
    ]
  };
  nanDingChart.setOption(option)
})
// 动态图
onMounted(()=>{
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
   const dongtai = document.getElementById('dongtaitu')
  const dongtaiTu = echarts.init(dongtai)
  const option = {
    title:{
      text: '动态图',
      left: 'center'
    },

    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2 // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: '时势图',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      bottom:0,
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };
  function run() {
    for (var i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
      } else {
        data[i] += Math.round(Math.random() * 200);
      }
    }
    dongtaiTu.setOption({
      series: [
        {
          type: 'bar',
          data
        }
      ]
    });
  }
  setTimeout(function () {
    run();
  }, 0);
  setInterval(function () {
    run();
  }, 3000);
  dongtaiTu.setOption(option)
})
</script>

<template>
    <div class="container">
      <div class="card"> <el-card class="sun">
        <div
          id="myChart"
          :style="{ width: '100%', height: '350px' }">

        </div>
      </el-card>
      </div>
      <div class="card"> <el-card class="sun">
          <div
              id="bingtuChart"
              :style="{ width: '100%', height: '350px' }">
          </div></el-card></div>
      <div  class="card"> <el-card class="sun">
        <div
            id="zhuzhuangtu"
            :style="{ width: '100%', height: '350px' }">

        </div>
      </el-card></div>
      <div  class="card"> <el-card class="sun">
        <div
            id="duidietu"
            :style="{ width: '100%', height: '320px' }">

        </div>
      </el-card></div>
      <div  class="card"> <el-card class="sun">
        <div
            id="nandingtu"
            :style="{ width: '100%', height: '320px' }">

        </div>
      </el-card></div>
      <div  class="card"> <el-card class="sun">
        <div
            id="dongtaitu"
            :style="{ width: '100%', height: '320px' }">

        </div>
      </el-card></div>
    </div>
</template>

<style scoped lang="less">
.container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  //justify-content: center;
  align-items: center;
  .card{
    width: 530px;
    .sun{
      height: 360px;
    }

    margin-left: 25px;
    margin-bottom: 15px;

  }
}
</style>