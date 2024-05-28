<template>
 <div class="not_container">
   <img src="../../assets/404.png" alt="">
   <el-button type="primary" class="not_btn" @click="handelContentHome">点击返回首页</el-button>
 </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
function handelContentHome(){
  router.push('/')
}
</script>

<style scoped lang="less">
.not_container {
  display: flex;

  overflow: hidden;
 justify-content: center;
  align-items: center;
  img{
    width: 1000px;
    margin-top: 40px;
  }
  .not_btn{
    position: absolute;
    top:760px;
}
}
</style>