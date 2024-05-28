<template>
 <div>
    <el-upload
     :file-list="fileList"
     class="upload-demo"
     action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
     :auto-upload="false"
     :limit="1"
     :on-change="handelChange"
    >
      <el-button>点击上传文件</el-button>
    </el-upload>
   <el-upload
       :file-list="fileListtwo"
       class="upload-demo"
       action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
       :auto-upload="false"
       :limit="1"
       :on-change="handelChangeTwo"
   >
     <el-button>点击上传文件</el-button>
   </el-upload>
 </div>
</template>

<script setup>
import {ref} from 'vue'
import {getFileMd5} from "@/hooks/sparkMd5";
import {ElMessage} from "element-plus";

const fileList = ref([])
const fileListtwo = ref([])

// 文件上传 选择文件时触发:on-change事件
const handelChange = async (uploadFile,uploadFiles) => {
    //文件信息
  console.log('file',uploadFile,'files',uploadFiles)

  let fileRaw = uploadFile.raw
  console.log('fileRaw',fileRaw)

  //获取文件的MD5唯一标识
  let fileMD5 = null
  try {
     fileMD5 = await getFileMd5(fileRaw)
    console.log('fileMD5',fileMD5)
  }catch (e){
    console.log(e)
  }

  if(!fileMD5) return

   //每片的大小为5M可调整
  const chunkSize = 5 * 1024 * 1024

  //文件分片存储

  let chunkList = []

  function chunkPush(page = 1){
    chunkList.push(fileRaw.slice((page-1)*chunkSize,page*chunkSize))
    if(page*chunkSize < fileRaw.size){
      chunkPush(page+1)
    }

  }
  chunkPush()
  console.log('chunList+++++++>',chunkList)

  saveFileChunk(chunkList,fileMD5,fileRaw.name)
}

function handelChangeTwo(uploadFile,uploadFiles){
  console.log('file',uploadFile,'files',uploadFiles)
}



//




// 保存文件片段给后台
const saveFileChunk = async(chunkList,fileMD5,fileName) =>{
  for(let i = 0;i<chunkList.length;i++){
    let formData = new FormData()
    formData.append('chunk',i) //当前片段的索引
    formData.append('chunkSize',5*1024 * 1024) //切片的文件分片大小（以多少个字节进行存储）
    formData.append('chunks',chunkList.length) //共有多少分片
    formData.append('file',chunkList[i]) //当前分片的文件流
    formData.append('md5',fileMD5) //整个文件的MD5唯一标识码，不是分片文件的标识码
    formData.append('name',fileName)//文件的名称
    formData.append('size',chunkList[i].size) //当前的切片大小
    const data = await saveFileChunk(formData)
    console.log('formData',formData.get('name'))
    if(data && data.success){
      ElMessage({
        type:"success",
        message:"上传成功"
      })
    }
  }
}
</script>

<style>

</style>