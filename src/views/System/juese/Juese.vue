<template>
  <el-button @click="selectAllNodes">
    {{ selectAll ? 'Unselect All' : 'Select All' }}
  </el-button>
  <el-table :data="data" style="width: 100%" ref="treeTable" @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55"
        :selectable="selectAll"
    >
    </el-table-column>
    <el-table-column
        label="Name"
        prop="name">
    </el-table-column>
    <el-table-column
        label="Children"
        prop="children">
      <template v-slot="scope">
        {{ scope.row.children.length }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {ref} from 'vue'

const data = ref(
    [
      {
        name: "Node 1",
        children: [
          {
            name: "Node 1.1",
            children: [
              {
                name:"Node 1.1.2"
              }
            ],
          },
          {
            name: "Node 1.2",
            children: [],
          },
        ],
      },
      {
        name: "Node 2",
        children: [],
      },
    ],
)
const treeTable = ref(null)
const  selectAll = ref(false)
const selectedNodes = ref([])

//全选或取消全选的方法
function selectAllNodes(){
  treeTable.value.toggleAllSelection()
}
function handleSelectionChange(selection){
  console.log('selection',selection)
  selectedNodes.value = selection
//   调用判断是否有子节点的方法
  selection.forEach((node)=>{
    console.log('node',node)
    if(node.children){
      selectChildren(node,node.selected)
    }
  })
}

//判断是否有子节点
function selectChildren(parent,isSelected){
  console.log('parent',parent)
   parent.children.forEach((chid)=>{
     console.log('child',chid)
     // treeTable.value.toggleRowSelection(chid,isSelected)
     // if(chid.children){
     //   selectChildren(chid,isSelected)
     // }
   })
}
</script>
