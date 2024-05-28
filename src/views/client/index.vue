<template>
  <div>
    <el-upload
        class="annaul-ticket-imgs"
        :class="{'hide-upload-btn': photoHide}"
        :file-list="photoList"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :multiple="false"
        :limit="limit"
        :on-progress="photoProgress"
        list-type="picture-card"
        :on-remove="photoRemove"
    >
      <i class="el-icon-upload" style="font-size: 120px; color: #ccc"></i>
    </el-upload>

    <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>

    </el-upload>
  </div>
</template>

<script>


export default {
  name:'client',
  data(){
    return {
      photoHide: false, //用来控制图片上传成功后隐藏上传按钮
      limit: 1,//可以上传的图片数量
      uploadDisabled: false, //控制上传按钮
      isUploadShow: true,
      photoList: [

      ]
    };
  },
  methods:{
    // 移除图片
    photoRemove(file, fileList) {
      this.photoHide = false;
    },
    photoProgress(event, file, fileList){
      console.log('progress',event,file,fileList)
    }
  }
}
</script>

<style scoped lang="less">

</style>