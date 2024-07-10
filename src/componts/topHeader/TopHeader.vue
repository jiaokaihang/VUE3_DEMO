<script setup>
import { ref,inject, onMounted  } from 'vue'
import http from '../../http/request.js'
import Date from '@/componts/date/date.vue'
import {useRouter} from 'vue-router'
import {deleteToken} from '@/utils/token'
import Dark from "@/componts/dark/Dark.vue";
import Weather from '@/componts/weather/Weather.vue'
//使用store
import { useUser } from '@/store/user/user.js'
import { storeToRefs } from 'pinia'
const useStore = useUser()
const url = ref('../../assets/user.png')
//如果直接解构出数据，这个数据不是响应式的，如果想要变成响应式的，需要调用storeToRefs方法
const { userName } = storeToRefs(useStore)

//修改state
// useStore.userName = 'admin'

//批量修改state
// useStore.$patch({
//     userName: 'hahah'
// })

//这种回调函数的形式适合修改集合类的数据，比如数组
useStore.$patch((state) => {
    state.userName = '哈哈哈哈哈'
})

//重置state
useStore.$reset()

const isCollapse = inject('isCollapse', ref(false))
function handelClick (){
  isCollapse.value = !isCollapse.value;
}


//退出登录

const router = useRouter()
function loginOut(){
   // 清楚token及用户信息  --以下为示例
      deleteToken()
   // 跳转到登录页面
      router.push('/login')

}
const text = ref('1111111')
// onMounted(() =>{
//   getText()
// })
// function getText(){

//   const data = {
//     ColaKey:"m6kOxlzmAfwnGE1715759327453ZWg8FHU0Eh"
//   }
//   // 发送请求
//   http({
//     // url: 'https://luckycola.com.cn/tools/yiyan',
//     url:'https://luckycola.com.cn/tools/yiyan',
//     method: 'post',
//    data
//   }).then(res =>{
//     console.log('res',res)
//     text.value = res.translation
//   })
// }
</script>

<template>
    <div style="display: flex;justify-content: space-between;">
   <div @click="handelClick" style="display: flex">
     <div style="margin-top: 20px;font-size: 18px;cursor: pointer" v-if="isCollapse == true">
       <el-icon>
         <Fold />
       </el-icon>
     </div>
     
     <div style="margin-top: 20px;font-size: 18px;cursor:pointer" v-else>
       <el-icon>
         <Expand />
       </el-icon>
     </div>
     <div style="margin-top: 20px;margin-left: 15px;">每日一言：{{text}}</div>
   </div>
   
<div style="padding-top: 10px"><Weather/></div>
        <div class="toolbar">


            <div style="margin-top: -8px;margin-right: 30px;">

               <span style="color: #242424;font-size: 16px;"> {{ userName }}</span>
              <div><Date></Date></div>

            </div>

            <div style="margin-top: -10px;vertical-align: middle;">
                <el-dropdown>
                    <el-badge value="10">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </el-badge>


                    <template #dropdown>
                        <el-dropdown-menu>
                            <!-- {{ useStore.loginOut }}直接使用getters -->
                            <el-dropdown-item @click="loginOut">{{ useStore.loginOut }}</el-dropdown-item>
                           <el-dropdown-item>暗黑模式：<Dark/></el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>


        </div>

    </div>
</template>

<style>
.toolbar {
    /* border: 1px solid #f00; */
    margin-top: 20px;
}
</style>