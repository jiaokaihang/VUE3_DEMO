<template>
  <div class="login-container">

    <BackgroundParticles />
    <div class="login-form">
      <h1>vue3管理平台模板</h1>
      <div style=" opacity: .9;" class="form">
        <el-form :model="form">
          <el-form-item>
            <el-input v-model="form.username" placeholder="请输入账号" class="input_inner" prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" type="password" placeholder="请输入密码" prefix-icon="Key" show-password />
          </el-form-item>
          <el-button type="success" style="margin-left: 120px;margin-top: 20px" @click="handelLogin"
            :loading="loading">登录</el-button>
        </el-form>

      </div>
    </div>

  </div>
</template>

<script setup>
import BackgroundParticles from './backgroundParticles/BackgroundParticles.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { setToken } from '@/utils/token'
import { useUser } from '@/store/user/user.js'
import { ElNotification } from "element-plus";
const form = ref({
  username: 'admin',
  password: '123456',
})
const router = useRouter()
let useLoginUser = useUser()
const loading = ref(false)
async function handelLogin() {
  const data = {
    username: form.value.username,
    password: form.value.password
  }
  loading.value = true
  try {
    let res = await useLoginUser.loginUser(data)
    setToken('123456789')
    loading.value = false
    if (res) {
      ElNotification({
        type: "success",
        message: "登录成功"
      })
    }
    router.push('/content/home')
  } catch (error) {
    loading.value = false
    ElNotification({
      type: "error",
      message: error.message
    })
  }
}
</script>

<style scoped lang="less">
.login-container {
  width: 100%;
  min-height: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #0F2133;
  position: relative;
  color: #ffffff;

  .login-form {
    h1 {


      text-align: center;
      font-size: 30px;
    }

    .form {
      padding: 20px;
      margin-top: 10px;
      background-color: rgba(5, 24, 44, 0);
      border: 1px solid rgb(40, 105, 127);
      box-shadow: 0 0 10px 2px rgb(40, 105, 127);

      .input_inner {
        border: 1px solid #000;
      }
    }

    width: 20%;
    position: absolute;
    margin-top: 15%;
    margin-left: 40%;


  }

}

:deep .el-input__wrapper {
  background: #00000000;
  border: none;
}

:deep .el-input__inner {
  color: #fff;
}
</style>