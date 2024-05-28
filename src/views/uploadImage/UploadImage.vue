<script setup>
import { ref } from 'vue'
import {ElMessage, ElMessageBox} from "element-plus";


const dialogImageUrl = ref('')
const imageArray = ref([])  //获取ref
const dialogVisible = ref(false)
const disabled = ref(false)
const photoHide=ref(false)
const fileList =ref([])
 const photoSuccess =(response, file)=>{
     const name = file.name //获取的图片名称
   const url = file[0].url //获取的图片路径--需要传给后端的路径
   fileList.value = [{name:name,url:url}]
   console.log('fileList.value',fileList.value)
   if(fileList.value.length >0){
     photoHide.value = true
   }
 }
const handleRemove = (file) => {
    console.log('移除', file)
    // handleRemove(file)
  ElMessageBox.confirm(
      '确定要移除这张图片吗?',
      '提示',
      {
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        type:"warning"
      }
  ).then(()=>{
    imageArray.value.handleRemove(file) //首先获取ref所处的片段，然后使用handelRemove方法
    ElMessage({
      type: 'success',
      message: '移除成功',
    })
    photoHide.value = false
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消移除',
    })
  })

}

const handlePictureCardPreview = (file) => {
    console.log('放大', file)
    dialogImageUrl.value = file.url
    dialogVisible.value = true
}

const handleDownload = (file) => {
  ElMessageBox.confirm(
      '确定要下载这张图片吗?',
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(() => {
        console.log('下载', file)
        const link = document.createElement('a') //定义一个a标签
        link.download = file.name //下载后的文件名称
        link.href = file.url //需要生成一个url 来实现下载
        link.click();//模拟在按钮上实现一次鼠标点击
        window.URL.revokeObjectURL(link.href)
        ElMessage({
          type: 'success',
          message: '下载成功',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '下载失败',
        })
      })

}
</script>

<template>
    <el-upload action="#" list-type="picture-card" :auto-upload="false" class="annaul-ticket-imgs"
               :class="{'hide-upload-btn': photoHide}" ref="imageArray"   :multiple="false"
               :limit="1"
               :on-change="photoSuccess" :file-list="fileList">
        <el-icon>
            <Plus />
        </el-icon>

        <template #file="{ file }">
            <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                        <el-icon><zoom-in /></el-icon>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                        <el-icon>
                            <Download />
                        </el-icon>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <el-icon>
                            <Delete />
                        </el-icon>
                    </span>
                </span>
            </div>
        </template>
    </el-upload>

    <el-dialog v-model="dialogVisible">

         <img :src="dialogImageUrl" alt="Preview Image" style="width: 100%"/>

    </el-dialog>
</template>


<style scoped lang="less">
.uploadImage {
    margin: 50px;
}

.annaul-ticket-imgs {
  &.hide-upload-btn {
    /deep/.el-upload--picture-card {
      display: none;
    }
  }

  /deep/.el-upload--picture-card {
    width: 300px;
  }

  /deep/ .el-upload-list--picture-card .el-upload-list__item {
    width: 300px;
  }
}
</style>