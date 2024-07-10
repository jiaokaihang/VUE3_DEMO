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
            // center: [116.397428, 39.90923],
            zoom: 5,
            viewMode: '3D',  // 地图设置成 3D 模式，否则图层会失去高度信息
            mapStyle: 'amap://styles/dark', // 使用高德地图的浅色模式
        });
        // 创建 Loca 实例
        var loca = new Loca.Container({
            map: map
        });
        console.log('Loca', loca)


    //   热力图层
    var geo = new Loca.GeoJSONSource({
            url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/tsing.json',
        });
      

        // 热力图
        var heatmap = new Loca.HeatMapLayer({
            // loca,
            zIndex: 10,
            opacity: 1,
            visible: true,
            zooms: [2, 22],//设置图层可见的缩放范围
        });
        //    热力图层样式
        heatmap.setSource(geo, {
            radius: 9000,
            unit: 'meter',
            height: 9000,
            difference: true,
            gradient: {
                1: '#FF4C2F',
                0.8: '#FAA53F',
                0.6: '#FFF100',
                0.5: '#7DF675',
                0.4: '#5CE182',
                0.2: '#29CF6F',
            },
            value: function (index, feature) {
                return feature.properties.count;
            },
            opacity: [0, 1],
            heightBezier: [1, 3,1,4]
            // heightBezier: [0, 0.53, 0.37, 0.98]
        });

        loca.add(heatmap)
        map.on('click', () => {
            heatmap.addAnimate({
                key: 'radius',
                value: [0, 1],
                random: true,
                transform: 1000,
                delay: 6000,
                easing: 'BounceOut' //https://redmed.github.io/chito/example/easing.html
            });
        });


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

