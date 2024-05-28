<!--<template>-->
<!--    <div class="login" style="display: flex;align-items: center;justify-content: center">-->
<!--      <div style="position: absolute;z-index:999; opacity: .9;background-color: lightseagreen">-->
<!--      <el-form :model="form" label-width="120px">-->
<!--        <el-form-item label="用户名">-->
<!--          <el-input v-model="form.username" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="密码">-->
<!--          <el-input v-model="form.password" type="password" />-->
<!--        </el-form-item>-->
<!--        <el-button type="success" style="margin-left: 120px;margin-top: 20px" @click="handelLogin" :loading="loading">登录</el-button>-->
<!--      </el-form>-->

<!--      </div>-->
<!--      <Particles id="tsparticles" class="login_particles" :options="a" >-->

<!--      </Particles>-->

<!--    </div>-->
<!--</template>-->


<!--<script setup>-->
<!--import  {a} from '../../componts/particles/particles'-->
<!--import { reactive, ref } from 'vue'-->
<!--import {useRouter} from 'vue-router'-->
<!--import { useUser } from '@/store/user/user.js'-->
<!--import {ElNotification} from "element-plus";-->

<!--console.log('useLoginUser',useUser)-->
<!--let useLoginUser = useUser()-->
<!--const router = useRouter()-->
<!--const form = reactive({-->
<!--     username:"admin",-->
<!--  password:"admin"-->
<!--})-->
<!--const loading = ref(false)-->
<!--async function handelLogin(){-->
<!--   loading.value = true-->
<!--  //通知仓库去发送请求-->
<!--  // 成功之后跳转路由-->
<!--    try {-->
<!--    let Res = await    useLoginUser.loginUser(form)-->
<!--      loading.value=false-->
<!--      if(Res){-->
<!--        ElNotification({-->
<!--          type:"success",-->

<!--          message:"登录成功"-->
<!--        })-->
<!--      }-->
<!--      router.push('/content/home')-->
<!--    }catch (error)-->

<!--  {-->
<!--    loading.value=false-->
<!--      ElNotification({-->
<!--        type:"error",-->
<!--        message:error.message-->
<!--      })-->
<!--    }-->
<!--}-->



<!--</script>-->

<!--<style scoped lang="less">-->
<!--.login{-->
<!--  height: 100vh;-->
<!--  width: 100vw;-->
<!--  overflow: hidden;-->
<!--  .login_particles{-->
<!--    height: 100vh;-->
<!--    width: 100%;-->
<!--    background-color: lightseagreen;-->
<!--  }-->
<!--}-->



<!--</style>-->

<template>
  <div>
    <div class="three-canvas" ref="threeTarget"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.three-canvas {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #d6eaff;
}
</style>