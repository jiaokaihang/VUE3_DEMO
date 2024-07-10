<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
    securityJsCode: "8b4d42a6dc38c5669662c8a60d0d98af",
};
let map = null;


function initAMap() {
    AMapLoader.load({
        key: "7f9b7ef24d625033e3e7b6a1fe9c918e", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
        Loca: {
            version: '2.0',
        }
    }).then((AMap) => {
        map = new AMap.Map('container');
        var map = new AMap.Map('container', {
            center: [114.316914, 30.581078],
            zoom: 11,
            viewMode: '3D',  // 地图设置成 3D 模式，否则图层会失去高度信息
            mapStyle: 'amap://styles/dark', // 使用高德地图的浅色模式
        });
        // 创建 Loca 实例
        var loca = new Loca.Container({
            map: map
        });
        console.log('Loca', loca)


    // 高德地图网格热力图层
    loca.ambLight = {
          intensity: 0.3,
          color: '#fff',
      };
      loca.dirLight = {
          intensity: 1.2,
          color: '#fff',
          target: [0, 1, 0],
          position: [0, -1, 1],
      };
      loca.pointLight = {
          color: 'rgb(100,100,100)',
          position: [114.2517, 30.552128, 20000],
          intensity: 1.6,
          // 距离表示从光源到光照强度为 0 的位置，0 就是光不会消失。
          distance: 100000,
      };

      var geo = new Loca.GeoJSONSource({
          url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/wh_car.json',
      });

      var ll = new Loca.GridLayer({
          // loca,
          zIndex: 10,
          opacity: 1,
          visible: true,
          zooms: [2, 22],
          acceptLight: true,
          // shinniness: 0,
          // cullface: 'none',
          // depth: true,
          // hasSide: true,
      });

      var colors = ['#FAE200', '#D27E37', '#C53634', '#C12B6E', '#A92E9A', '#67238A', '#211A50', '#18244E'].reverse();
      var heights = [100, 200, 400, 600, 800, 1400, 1800, 4000];
      ll.setSource(geo);
      ll.setStyle({
          unit: 'meter',
          radius:66,
          gap: 0,
          altitude: 100,
          height: function (index, feature) {
              var ranks = feature.coordinates && feature.coordinates.length || 0;
              return ranks < 5 ?
                  heights[0] : ranks < 10 ?
                      heights[1] : ranks < 20 ?
                          heights[2] : ranks < 30 ?
                              heights[3] : ranks < 50 ?
                                  heights[4] : ranks < 80 ?
                                      heights[5] : ranks < 100 ?
                                          heights[6] : heights[7];
          },
          topColor: function (index, feature) {
              var ranks = feature.coordinates && feature.coordinates.length || 0;
              return ranks < 5 ?
                  colors[0] : ranks < 10 ?
                      colors[1] : ranks < 20 ?
                          colors[2] : ranks < 30 ?
                              colors[3] : ranks < 50 ?
                                  colors[4] : ranks < 80 ?
                                      colors[5] : ranks < 100 ?
                                          colors[6] : colors[7];
          },
          sideTopColor: function (index, feature) {
              var ranks = feature.coordinates && feature.coordinates.length || 0;
              return ranks < 5 ?
                  colors[0] : ranks < 10 ?
                      colors[1] : ranks < 20 ?
                          colors[2] : ranks < 30 ?
                              colors[3] : ranks < 50 ?
                                  colors[4] : ranks < 80 ?
                                      colors[5] : ranks < 100 ?
                                          colors[6] : colors[7];
          },
          sideBottomColor: function (index, feature) {
              var ranks = feature.coordinates && feature.coordinates.length || 0;
              return ranks < 5 ?
                  colors[0] : ranks < 10 ?
                      colors[1] : ranks < 20 ?
                          colors[2] : ranks < 30 ?
                              colors[3] : ranks < 50 ?
                                  colors[4] : ranks < 80 ?
                                      colors[5] : ranks < 100 ?
                                          colors[6] : colors[7];
          }
      });
      loca.add(ll);

      // 图例
      var lengend = new Loca.Legend({
          loca: loca,
          title: {
              label: '车辆密度(辆)',
              fontColor: 'rgba(255,255,255,0.4)',
              fontSize: '16px',
          },
          style: {
              backgroundColor: 'rgba(255,255,255,0.1)',
              left: '20px',
              bottom: '40px',
              fontSize: '12px',
          },
          dataMap: [
              { label: 100, color: colors[7] },
              { label: 80, color: colors[6] },
              { label: 50, color: colors[5] },
              { label: 40, color: colors[4] },
              { label: 30, color: colors[3] },
              { label: 20, color: colors[2] },
              { label: 10, color: colors[1] },
              { label: 5, color: colors[0] },
          ],
      });

      // 控制条
      var dat = new Loca.Dat();
      dat.addLight(loca.ambLight, loca, '环境光');
      dat.addLight(loca.dirLight, loca, '平行光');
      dat.addLight(loca.pointLight, loca, '点光');
      dat.addLayer(ll, '车辆图层');


    })
        .catch((e) => {
            console.log(e);
        });
}
onMounted(() => {
    initAMap()

});

onUnmounted(() => {
    map?.destroy();
});
</script>

<template>
    <div id="container" style="height: 750px"></div>
</template>

<style scoped>
#container {
    width: 100%;
    height: 750px;
}
</style>

