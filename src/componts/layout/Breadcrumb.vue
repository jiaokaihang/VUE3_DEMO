<script  setup>
import {useRouter,useRoute} from 'vue-router'
import { onMounted, ref, watch} from "vue";
const router = useRouter()
const route = useRoute()
console.log('router',router)
const routers = ref([])
let getMatched = (route) =>{
  console.log('打印路径数组',route.matched)

  // routers.value = route.matched.filter(item=>item.meta&&item.meta.title)
   const matched = route.matched
  console.log('matched',matched)
  routers.value = matched
}

onMounted(()=>{
  getMatched(route)
})

watch(() => route.path,(newValue,oldValue)=>{
//   监听路由路径是否发生变化，之后更改面包屑
})
  routers.value = route.matched.filter(item=>item.meta && item.meta.title)

function  handleLink(item) {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect)
    return
  }
  router.push(path)
}
const onLinkClick = item => {
  console.log('item',item)
  // console.log(item)
  router.push(item.path)
}



</script>

<template>
<!--  </el-breadcrumb>-->
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in routers" :key="item.path">
        <a v-if="index === routers.length-1">{{item.meta.title}}</a>
        <a :href="item.path" v-else @click.prevent="onLinkClick(item)">  {{item.meta.title}}</a>

      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>

</template>

