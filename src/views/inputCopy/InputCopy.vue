<script setup>
import {ref} from 'vue'
import {ElMessage} from "element-plus";
import {DocumentCopy} from '@element-plus/icons-vue'
import useClipboard from "vue-clipboard3";
const {toClipboard} = useClipboard()
const textareaValue = ref('')
const text = ref('')
// 可copy
// 文本域点击复制
const copyAnswer = async(copyData) => {
  console.log('copyData', copyData)
  if(copyData == ''){
    ElMessage.warning('复制内容不能为空')
    return
  }
  try {
    await toClipboard(copyData)
    ElMessage.success(`复制: ${copyData}成功`)
  } catch (error) {
    ElMessage.error(`复制: ${JSON.parse(JSON.stringify(error))}!`)
    console.log(error)
  }
}
// 文本框双击复制
const handleDoubleClick = async (copyData) => {
  console.log('copyData', copyData)
  if(copyData == ''){
    ElMessage.warning('复制内容不能为空')
    return
  }
  try {
    await toClipboard(copyData)
    ElMessage.success(`复制: ${copyData}成功`)
  } catch (error) {
    ElMessage.error(`复制: ${error}!`)
    console.log(error)
  }
}


</script>

<template>
  <div>
    <div >
      <div style="margin-bottom: 10px">文本框双击复制</div>
     <el-input v-model="text" placeholder="请输入复制的内容" @dblclick="handleDoubleClick(text)" ple></el-input>
    </div>
    <br/>
    <br/>
    <br/>
    <div style="margin-bottom: 10px">文本域点击复制</div>
   <div style="position: relative">

     <el-input type='textarea'  v-model="textareaValue"  placeholder="请输入复制的内容"></el-input>
     <el-icon @click="copyAnswer(textareaValue)" style="float: right; position: absolute; right:10px; top: 10px"> <DocumentCopy /></el-icon>
   </div>
  </div>
</template>

<style scoped>

</style>