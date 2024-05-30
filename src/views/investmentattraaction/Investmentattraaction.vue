<script setup>
import { onMounted, onUnmounted, } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

let map = null
onMounted(() => {
  AMapLoader.load({
    key: "5641e5d33d9db1bd3f622a595406b3b5",//申请好的Web端开发者Key，首次调用时load必填
    version: "2.1Beta", //指定要加载的JSAPI的版本，缺省时默认为1.4.15
    viewMode: '3D',
    plugins: ['Amap.StationSearch', 'AMap.Scale', 'Amap.object3DLayer', 'Amap.0bject3D'] //需要使用的插件列表，如比例尺‘AMap.Scale’等
  })
      .then((AMap) => {
        console.log('AMAp', AMap)
        // 创建图层楼块
        let buildings = new AMap.Buildings({
          zooms:[17,20],
          zIndex:10,
          heightFactor:2,//2倍于默认高度(3D试图下生效)
     
        })
        // 将楼快涂层添加到地图
        map = new AMap.Map('container', {
          //设置地图容器Id
          pitch: 50,//地图俯仰角度，有效范围0度 - 83度
          viewMode: '3D', //是否为3D地图模式
          terrain: true,//开启地形图
          rotateEnable: true,//是否开启地图旋转交互 ，鼠标右键+鼠标画圈移动
          pitchEnable: true,//是否开启地图倾斜交互 ，鼠标右键+鼠标上下移动
          zoom: 18,//初始化地图级别
          rotation: -15,//初始地图顺时针旋转的角度
          zooms: [2, 20],//地图显示的缩放级别范围
          center: [116.594292, 38.073902], //初始化地图中心店设置
          layers:[buildings],//地图图层数组
          showBuildingBlock:false,//是否显示楼快
          showIndoorMap:true,//是否自动展示室内地图
        })
        // 监听地图indoor_create事件,室内地图图层创建回调中可获取室内地图图层实例
        map.on("indoor_create",function(){
          map.indoorMap.showIndoorMap('B000A8VT15',4);//显示指定POI的室内地图,第一个参数为参照物,第二个参数为楼层
        })
        AMap.plugin(['AMap.ControlBar', 'AMap.ToolBar', 'Amap.object3DLayer', 'Amap.0bject3D'], function () { //异步加载插件
          _nowStatus=true;//强制刷新后plugin并没有添加上'Object3DLayer'和'Object3D',执行再次刷新地图解决
          var object3Dlayer = new AMap.Object3DLayer({zIndex:1});
          map.add(object3Dlayer)
          var controlBar = new AMap.ControlBar({ //控制地图旋转插件
            position: {
              right: '10px',
              top: '10px',
            }
          });
          map.addControl(controlBar);
          var toolBar = new AMap.ToolBar({ //地图缩放插件
            position: {
              right: '40px',
              top: '110px'
            }
          });
          object3Dlayer = new AMap.object3Dlayer()
          console.log('object3Dlayer', object3Dlayer)
          map.add(object3Dlayer)
          prism = new AMap.Object3D.Prise({
            path: bounds,
            height: 500,
            color: 'rgba(100,150,230,0.7)'
          })
          map.addControl(toolBar)
        });

      }).catch((e) => {


    console.log(e)
  });


})


onUnmounted(() => {
    map?.destroy()
})
</script>


<template>
    <div id="container">

    </div>
</template>

<style scoped>
#container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 1000px;
    margin-top: 10px;
}
</style>