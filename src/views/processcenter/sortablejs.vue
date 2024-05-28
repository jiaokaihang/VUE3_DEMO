<script setup>
import Sortable from "sortablejs";
import {onMounted,ref} from 'vue'

const oldList = ref()
const newList = ref()

// 表头
const tableItems = ref([
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '性别',
    prop: 'gender',
  },
  {
    label: '年龄',
    prop: 'age',
  },
])

// 表体数据
const tableData = ref(
    [
      {
        id: 1,
        name: '李四',
        gender: '男',
        age: 20,
      },
      {
        id: 2,
        name: '王五',
        gender: '未知',
        age: 18,
      },
      {
        id: 3,
        name: '张三',
        gender: '男',
        age: 22,
      },
    ]
)

//行拖拽
function rowDrop(){
  //要拖拽元素的父容器 tbody
  // .draggable
  const tbody = document.querySelector(' .el-table__body-wrapper tbody') //获取表格元素
  Sortable.create(tbody,{ //创建这个元素，并设置一些参数
    //可被拖拽的子元素
    draggable:'.el-table__row',
    onEnd({newIndex,oldIndex}){
      //newIndex 拖动到新的索引
      //oldIndex 没拖动前的索引
      const currRow = tableData.value.splice(oldIndex,1)[0]
      tableData.value.splice(newIndex,0,currRow)
    }
  })
}

//列拖拽
function colunmDrop(){
  //要拖拽元素的父容器 头部的tr
  const wrapperTr = document.querySelector(' .el-table__body-wrapper tr');
  Sortable.create(wrapperTr,{
    animation:180,
   delay:0,
      onEnd:(evt)=>{
     const oldItem = newList.value[evt.oldIndex];
     newList.value.splice(evt.oldIndex,1)
    newList.value.splice(evt.newIndex,0,oldItem)
  }
})
}
onMounted(()=>{
  oldList.value = JSON.parse(JSON.stringify(tableItems.value))
 newList.value = JSON.parse(JSON.stringify(tableItems.value))
  rowDrop()
  colunmDrop()
})
</script>

<template>
<div>
 <el-table row-key="id" :data="tableData" style="width: 100%" border>
    <el-table-column v-for="(item,index) in oldList" :key="`col_${index}`" :prop="newList[index].prop" :label="item.label" align="center">

    </el-table-column>
 </el-table>
</div>
</template>

<style>

</style>