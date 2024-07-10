<script setup>
 import {ref} from 'vue'
 const list = ref([])
 for(let i = 1; i<=714; i++){
   list.value.push({num:i})
 }
 console.log('list',list)
</script>

<template>
  <div class="container">
     <div class="list" v-for="(item) in list " :key="item.num" >{{ item.num }}</div>
    </div>
</template>

<style scoped lang="less">
.container {
padding: 10px;
   display: flex;

  flex-wrap: wrap;
  .list {
    border: 1px solid #999;
    width: 75px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;


  }
}

</style>