<template>


  <el-dialog v-model="props.dialog" title="修改" width="500" :show-close="false">
    <el-form :model="form">
      <el-form-item label="标题" >
        <el-input v-model="form.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="路径" >
        <el-input v-model="form.path" autocomplete="off" />
      </el-form-item>
      <el-form-item label="图标" >
        <el-input v-model="form.icon" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handelEsc">Cancel</el-button>
        <el-button type="primary" @click="handelOK">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref,defineEmits,defineProps, onMounted,watchEffect,watch } from 'vue'

const props = defineProps(['dialog','data'])
const emit = defineEmits(['handleClose'])



const form = ref({
    title:"",
    path:"",
    icon:""
})

watchEffect(()=>{
    form.value = props.data
})

//关闭弹窗
function handelEsc (){
   emit('handleClose')
}

// 点击确认
// 发送请求
function handelOK(){
    form.value = { ...props.data } // 在确认时同步数据
 try {
    // 发送请求
    // 关闭弹窗
    console.log('关闭弹窗时候的数据',form.value)
    ElMessage.success(`修改成功`)
    emit('handleClose')
 } catch (error) {
    console.log(error);
 }
}



</script>


<style lang="less" scoped></style>
