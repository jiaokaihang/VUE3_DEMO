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
            center: [116.397428, 39.90923],
            zoom: 10,
            viewMode: '3D',  // 地图设置成 3D 模式，否则图层会失去高度信息
            mapStyle: 'amap://styles/dark', // 使用高德地图的浅色模式
        });
        // 创建 Loca 实例
        var loca = new Loca.Container({
            map: map
        });
        console.log('Loca', loca)


    // 高德地图线图层
    var geo = new Loca.GeoJSONSource({
            url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/bj_bus.json',
        });

        var ll = new Loca.LineLayer({
            loca,
        });
        var colors = ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'].reverse();
        ll.setSource(geo, {
            color: function (index, prop) {
                var i = index % colors.length;
                return colors[i];
            },
            lineWidth: (index, prop) => {
                var i = index % colors.length;
                return i * 0.1 + 2;
            },
            altitude: function (index, feature) {
                var i = index % colors.length;
                return 100 * i;
            },
            dash: [10, 4, 10, 2],
        });


        var dat = new Loca.Dat();
        dat.addLayer(ll);


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

