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


    // 高德地图脉冲线层
           window._loca = loca;

            var geo = new Loca.GeoJSONSource({
                url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/bj_bus.json',
            });

            var layer = new Loca.PulseLineLayer({
                // loca,
                zIndex: 10,
                opacity: 1,
                visible: true,
                zooms: [2, 22],
            });

            var headColors = ['#EFBB51', '#7F3CFF', '#4CC19B', '#0B5D74', '#E06AC4', '#223F9B', '#F15C1A', '#7A0FA6'];

            console.log('geo', geo);
            layer.setSource(geo);
            layer.setStyle({
                altitude: 0,
                lineWidth: 2,
                // 脉冲头颜色
                headColor: (_, feature) => {
                    return headColors[feature.properties.type - 1];
                },
                // 脉冲尾颜色
                trailColor: 'rgba(128, 128, 128, 0.5)',
                // 脉冲长度，0.25 表示一段脉冲占整条路的 1/4
                interval: 0.25,
                // 脉冲线的速度，几秒钟跑完整段路
                duration: 5000,
            });
            loca.add(layer);
            loca.animate.start();

            // 图例
            var lengend = new Loca.Legend({
                loca: loca,
                title: {
                    label: '公交类型',
                    fontColor: 'rgba(255,255,255,0.4)',
                    fontSize: '16px'
                },
                style: {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    left: '20px',
                    bottom: '40px',
                    fontSize: '12px'
                },
                dataMap: [
                    { label: 'A类型', color: headColors[7] },
                    { label: 'B类型', color: headColors[6] },
                    { label: 'C类型', color: headColors[5] },
                    { label: 'D类型', color: headColors[4] },
                    { label: 'E类型', color: headColors[3] },
                    { label: 'F类型', color: headColors[2] },
                    { label: 'G类型', color: headColors[1] },
                    { label: 'H类型', color: headColors[0] },
                ],
            });

            loca.animate.start();
            var dat = new Loca.Dat();
            dat.addLayer(layer, '公交');



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

