<template>

   <div class="card">
     <el-card class="leftCard">
       <div style="height: 300px;">
         <el-steps :active="active"  direction="vertical" finish-status="success">
           <el-step title="步骤 1"></el-step>
           <el-step title="步骤 2"></el-step>
           <el-step title="步骤 3"></el-step>
         </el-steps>
       </div>
     </el-card>
     <el-card class="rightCard">
       <el-form
           ref="dataForm"
           :model="form.value"
           label-position="left"
           label-width="100px"
           style="width: 400px;
    margin-left: 50px">

         <div v-show="active == 0">

           <div v-if="flag==1">
             我是步骤1
             <el-form-item label="名字" >
               <el-input v-model="form.name"></el-input>
             </el-form-item>
           </div>
           <div v-if="flag==2">
             我是步骤222222222222222222222222222222222222
           </div>
           <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
         </div>
         <div v-show="active == 1">
           我是步骤2
           <el-form-item label="年龄">
             <el-input v-model="form.age" placeholder="请输入" />
           </el-form-item>
           <el-button style="margin-top: 12px;" @click="prev">上一步</el-button>
           <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
         </div>
         <div v-show="active == 2">
           我是步骤3
           <el-form-item label="性别" >
             <el-input v-model="form.sex" placeholder="请输入" />
           </el-form-item>
           <el-button style="margin-top: 12px;" @click="prev">上一步</el-button>
           <el-button style="margin-top: 12px;" @click="submit">提交</el-button>
           {{data.name1}}-{{data.age2}}-{{data.sex3 }}

         </div>
       </el-form>
     </el-card>
   </div>
</template>


<script setup>
import {ref} from 'vue'
const active = ref(0)
const data = ref({})
const flag = ref(1)
const form = ref({
  name:"",
  age:"",
  sex:"",

})
function next(){
  console.log('下一步')
  switch (flag.value) {
    case 1:
      flag.value=2
      break
    default:
      active.value++

      break
  }
}
function prev(){
  console.log('上一步')
  active.value--
}
function submit(){
  console.log('提交')
  const datas = {
    name1: form.value.name,
    age2: form.value.age,
    sex3: form.value.sex,
  }
  data.value = datas
  console.log('提交的数据',datas)
}
</script>

<style scoped lang="less">
.card{
  display: flex;
  width: 100%;
  height: 85%;
  .leftCard{
    width: 20%;
  }
  .rightCard{
    margin-left: 15px;
    width: calc(100% - 20% - 15px);
  }
}
</style>