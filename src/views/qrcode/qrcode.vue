<script setup>
import {ref} from 'vue'
import QRCode from 'qrcode'


const url = 'https://blog.csdn.net/qq_65949679?type=blog'

const qrcode = ref('')

const handelGetQRCode = async() => {
  qrcode.value = await QRCode.toDataURL(url)
}

// 增强版
const qrcode2 = ref('')
const handleGetQRCode2 = async() => {
  const option = {
    errorCorrectionLevel: 'H',//可选,容错级别 值有 L(低),M(中), Q(高), H(最高)'
    type:'image/jpeg',//可选,生成的二维码的类型,默认是image/png
    quality: 0.3,//可选,二维码图片质量,默认是0.3
    margin:5,//可选,二维码图片边距,默认是10
    color:{
      dark:'#000000',//可选,二维码颜色,默认是黑色
      light:'#ffffff'//可选,二维码背景颜色,默认是白色
    }
  }
  QRCode.toDataURL(url, option, (error, resultUrl) =>{
    console.log('resultUrl',resultUrl)
    if(error){
      throw error
    }
    qrcode2.value = resultUrl

  })
}
</script>

<template>
   <el-button type="primary"  @click="handelGetQRCode">
       vue3获取qrcode生成的二维码-简单版
   </el-button>
  <div class="qrcode">
     <img :src="qrcode"/>
  </div>

  <el-button type="primary" @click="handleGetQRCode2">
    qrcode生成的二维码-增加配置版
  </el-button>
  <div class="qrcode">
    <img :src="qrcode2" />
  </div>

</template>

<style>

</style>