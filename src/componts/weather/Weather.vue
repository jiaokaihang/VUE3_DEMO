<script setup>
import { vMiniWeather, vMiniWeatherIcon } from 'vue3-mini-weather'
</script>


<template>
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
</template>


<style scoped>
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