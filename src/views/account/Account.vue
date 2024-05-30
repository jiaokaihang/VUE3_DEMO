<template>
   <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="title"
      border
      :default-expand-all="false"
    >
      <el-table-column v-for="(item,index) in colunm" :key="index" :prop="item.prop" :label="item.label"  sortable >
        <template v-if="item.prop === 'icon'" #default="{ row }">
          <component :is="row[item.prop]" style="width:20px"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="100px">
                    <template v-slot="scope">
                        <span class="cursor" style="color: #09f;" @click="handleEdit(scope.$index, scope.row)">修改</span>
                        <span class="cursor" style="color: #f00;"  @click="handleDelete(scope.$index, scope.row)">删除</span>
                    </template>
                </el-table-column>

    </el-table>

   </div>
</template>

<script setup>
import { ref, onMounted, computed,inject } from 'vue'
import children from "@/utils/index";
const colunm = ref([

    { prop: "title", label: "标题" },
    { prop: "path", label: "路径" },
  { prop: "icon", label: "图标" },


])
const tableData = ref([])
const subchildren = ref([])
onMounted(() => {
  subchildren.value = children()
  tableData.value = children()
  console.log('subchildren',subchildren.value)

})
function handleEdit(index, row) {
  console.log(index, row);
}

function handleDelete(index, row) {
  console.log(index, row);

  // 递归删除函数，用于删除指定标题的元素及其所有子元素
  function recursiveDelete(items, title) {
    return items.filter(item => {
      // 如果当前项是要删除的项，返回 false 以从数组中排除它
      if (item.title === title) {
        return false;
      }
      // 如果当前项有子项，递归处理子项
      if (item.children && item.children.length > 0) {
        item.children = recursiveDelete(item.children, title);
      }
      return true;
    });
  }

  // 更新 tableData，递归删除指定的行和其子元素
  tableData.value = recursiveDelete(tableData.value, row.title);
}

</script>

<style lang="less" scoped>
.cursor {
        cursor: pointer;
        margin-top: 40px;
        background: none;
        margin-left: 20px;
    }
</style>