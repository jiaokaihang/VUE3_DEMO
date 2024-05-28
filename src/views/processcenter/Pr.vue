<script setup>
import { getCurrentInstance, onBeforeMount, reactive, onUnmounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader';
import car from "@/assets/car.png";
import axios from 'axios'
import { mapJson } from '@/api/map'

// 地图加载之前的loading状态
const mapSet = reactive({
  loading: true
})
defineOptions({
  name: "Amap"
});
let map;
// eslint-disable-next-line no-unused-vars
let MarkerCluster;
// 地图创建完成(动画关闭)
const complete = () => {
  if (map) {
    map.on("complete", () => {
      mapSet.loading = false;
    });
  }
};
const instance = getCurrentInstance()
console.log('instance', instance.appContext.config.globalProperties)
onBeforeMount(() => {
  // console.log('instance',instance.appContext.config.globalProperties.$config)
  const { MapConfigure } = instance.appContext.config.globalProperties.$config
  console.log('MapConfigure', MapConfigure)
  const { options, viewMode, Version } = MapConfigure
  AMapLoader.load({
    key: MapConfigure.amapKey,
    viewMode: viewMode,
    version: '2.0',
    // plugins: ["AMap.MarkerCluster"],
    plugins: ["AMap.MarkerCluster", 'Amap.StationSearch', 'AMap.Scale', 'Amap.object3DLayer', 'Amap.0bject3D']

  }).then(Amap => {
    console.log('Amap>>>>>>>>>>>>>>>>>>>', Amap)
    // 创建标准图层
    let layer = new AMap.createDefaultLayer({
      zooms: [3, 20], //可见级别
      visible: true,//是否可见
      opacity: 1,//透明度
      zIndex: 0,//叠加层级
    });

    // 创建楼快图层
    var buildings = new AMap.Buildings({
      
      zooms: [17, 20],
      zIndex: 10,
      heightFactor: 2, //2倍于默认高度（3D 视图下生效）
    });
    // 将楼快涂层添加到地图

    // 创建地图实例
    // instance.refs.mapview, options, ----添加上就是2D模式,删除就是3D模式
    map = new AMap.Map('mapview', {
      mapStyle: 'amap://styles/whitesmoke',
      layers: [layer, buildings],//地图图层的数组
      viewMode: '3D',
      pitch: 60,//俯仰角
      rotation: -35,//地图旋转角度
      showLabel: true,//是否显示地图文字标记
      showBuildingBlock: true,//是否显示地图建筑物
      // zoom: 9, //地图级别
      zoom: 18,
      showBuildingBlock: false,
      showIndoorMap: true, //是否自动展示室内地图
    })


    //监听地图 indoor_create 事件，室内地图图层创建回调中可获取室内地图图层实例
    map.on("indoor_create", function () {
      map.indoorMap.showIndoorMap("B000A8VT15", 4); //显示指定 POI 的室内地图,第一个参数为建筑物 POIID，第二个参数为楼层
    });
    // 设置地图样式
    map.setMapStyle('amap://styles/whitesmoke')
    // 设置地图要素选择性
    map.setFeatures(['road', 'point', 'building']);
    //地图中添加地图操作ToolBar插件
    map.plugin(["AMap.ToolBar", "AMap.MapType"], () => {
      map.addControl(new AMap.ToolBar());
      //地图类型切换
      map.addControl(
        new AMap.MapType({
          defaultType: 0
        })
      );
    });
    MarkerCluster = new AMap.MarkerCluster(map, [], {
      // 聚合网格像素大小
      gridSize: 80,
      maxZoom: 18,

      renderMarker(ctx) {
        const { marker, data } = ctx;
        if (Array.isArray(data) && data[0]) {
          const { driver, plateNumber, orientation } = data[0];
          const content = `<img style="transform: scale(1) rotate(${360 - Number(orientation)
            }deg);" src='${car}' />`;
          marker.setContent(content);
          marker.setLabel({
            direction: "bottom",
            //设置文本标注偏移量
            offset: new AMap.Pixel(-4, 0),
            //设置文本标注内容
            content: `<div> ${plateNumber}(${driver})</div>`
          });
          marker.setOffset(new AMap.Pixel(-5, -5));
          marker.on("click", ({ lnglat }) => {
            map.setZoom(13); //设置地图层级
            map.setCenter(lnglat);
          });
        }
      }
    });
    // 获取模拟车辆信息
    axios.get('/get-map-info').then(({ data }) => {
      console.log('11', data)
      const points = data.data.map(v => {
        return {
          lnglat: [v.lng, v.lat],
          ...v
        };
      });
      if (MarkerCluster) MarkerCluster.setData(points);
    })
      .catch(err => {
        console.log("err:", err);
      });

    complete();
  })
    .catch(() => {
      // mapSet.loading = false;
      throw "地图加载失败，请重新加载";

    })

})
onUnmounted(() => {
  if (map) {
    // 销毁地图实例
    map.destroy() && map.clearEvents("click");
  }
});
</script>

<template>
  <div>
    <div id="mapview" ref="mapview" />
  </div>
</template>

<style scoped>
#mapview {
  height: calc(100vh - 86px);
}

:deep(.amap-marker-label) {
  border: none !important;
}
</style>