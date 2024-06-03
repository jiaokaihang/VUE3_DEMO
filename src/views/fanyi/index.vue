<template>
    <div>
        <el-form v-model="form">
            <el-form-item label="请输入中文">
                <el-input v-model="form.Chinese"></el-input>
            </el-form-item>
            <el-form-item label="翻译后的英文">
                <el-input v-model="form.English"></el-input>
            </el-form-item>
            <el-button @click="handelClick">点击进行翻译</el-button>
        </el-form>
    </div>
</template>

<script setup>
import { ref } from "vue"
import http from '../../http/request.js'
const form = ref({
    Chinese: "",
    English: ""
})

function handelClick() {
    const loading = ElLoading.service({
    lock: true,
    text: 'Loading,正在努力翻译！',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  const data = {
	// 需要被翻译的文本
    text: form.value.Chinese,
    // 唯一key官网个人中心获取
    ColaKey: "m6kOxlzmAfwnGE1715759327453ZWg8FHU0Eh",
    // 需要被翻译的文本语言类型,ZH表示中文,EN表示英文
fromlang: "ZH",
    // 翻译出的结果文本语言类型,ZH表示中文,EN表示英文
tolang: "EN",
}
  console.log(data)
  http({
    url:"https://luckycola.com.cn/tools/fanyi",
    method:"post",
    headers: {
    'Content-Type': 'application/json',
  },
  
    data
   }).then(res=>{
    
    form.value.English = res.dst
    loading.close()
    console.log(res.dst)
   })
}

</script>