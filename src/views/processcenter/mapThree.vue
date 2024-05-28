<template>
  <div class="map" ref="mapRef"></div>
</template>
<script>
const echarts = require('echarts');
// import mapJson from './assets/china.json';
// import mapJson from 'echarts/map/json/china.json';
export default {
  data() {
    return {
      option: {},
      mapRef: null
    };
  },
  created() {
    this.saveOption();
  },
  mounted() {
    this.mapRef = echarts.init(this.$refs.mapRef);
    echarts.registerMap('china', mapJson);
    this.getData();
    this.mapRef.on('click', params => {
      console.log('params', params);
      if (params.componentType === 'series') {
        const dataIndex = params.dataIndex;
        const seriesIndex = params.seriesIndex;
        const currentShowLabel = this.option.series[seriesIndex].data[dataIndex].label.show;
        console.log('currentShowLabel', currentShowLabel);
        this.option.series[seriesIndex].data[dataIndex].label.show = !currentShowLabel;
        this.mapRef.setOption(this.option, true);
      }
    });
    window.addEventListener('resize', this.echartsResize, false);
  },
  methods: {
    echartsResize() {
      this.mapRef.resize();
    },
    saveOption() {
      const option = {
        // echarts大小位置
        grid: {
          left: '0px',
          right: '80px',
          top: '10px',
          bottom: '10px'
        },
        geo: {
          map: 'china',
          zoom: 1,
          center: [102.848234, 32.82333],
          scaleLimit: {
            min: 1,
            max: 2
          },
          label: {
            color: '#fff',
            show: true
          },
          emphasis: {
            label: {
              color: '#fff',
              show: true
            },
            itemStyle: {
              areaColor: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#073684' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2B91B7' // 100% 处的颜色
                  }
                ]
              }
            }
          },
          roam: true,
          itemStyle: {
            areaColor: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#073684' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#061E3D' // 100% 处的颜色
                }
              ]
            },
            borderColor: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#00F6FF'
                  },
                  {
                    offset: 1,
                    color: '#87ADCB'
                  }
                ],
                false
            ),
            shadowColor: 'rgba(10,76,139,1)',
            shadowOffsetY: 0,
            shadowBlur: 60,
            borderWidth: 1
          },
          tooltip: {
            show: false
          }
        },
        // 要显示的散点数据
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
            },
            label: {
              show: true,
              color: '#fff'
            },
            symbol: 'pin', // 定位图标样式
            symbolSize: 40,
            // 点的名称和经纬度
            data: [
              {
                name: 'xxxx医院',
                value: [106.093437, 30.791804],
                // 单独修改圆环上的文字
                label: {
                  show: true,
                  position: 'top',
                  backgroundColor: '#153872',
                  padding: 10,
                  fontSize: 16,
                  overflow: 'break',
                  formatter: [
                    '{a|xxxx医院}',
                    '{b|开方数量：50次}',
                    '{b|开方收入：100000元}'
                  ].join('\n'), // 圆环显示文字
                  rich: {
                    a: {
                      color: '#d8a04c',
                      fontSize: 20,
                      lineHeight: 20
                    },
                    b: {
                      // backgroundColor: {
                      //   image: 'xxx/xxx.jpg'
                      // },
                      // height: 40
                      color: '#ffffff',
                      fontSize: 16,
                      lineHeight: 20
                    }
                  }
                },
                itemStyle: {
                  color: '#fe2321'
                }
              },
              {
                name: 'xxxx医院',
                value: [105.863126, 32.43237],
                // 单独修改圆环上的文字
                label: {
                  show: false,
                  position: 'top',
                  backgroundColor: '#153872',
                  padding: 10,
                  fontSize: 16,
                  overflow: 'break',
                  formatter: [
                    '{a|xxxx民医院}',
                    '{b|开方数量：99次}',
                    '{b|开方收入：200000元}'
                  ].join('\n'), // 圆环显示文字
                  rich: {
                    a: {
                      color: '#d8a04c',
                      fontSize: 20,
                      lineHeight: 20
                    },
                    b: {
                      // backgroundColor: {
                      //   image: 'xxx/xxx.jpg'
                      // },
                      // height: 40
                      color: '#ffffff',
                      fontSize: 16,
                      lineHeight: 20
                    }
                  }
                },
                itemStyle: {
                  color: '#fe2321'
                }
              }
            ]
          }
        ]
      };
      this.option = option;
    },
    getData() {
      this.mapRef.setOption(this.option);
    }
  }

};
</script>

