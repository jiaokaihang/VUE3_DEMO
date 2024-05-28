<script setup>
import { ref,computed } from 'vue'
import BasicTable from '../../componts/basicTable/BasicTable.vue'
const tableData = [



    {
        id: '01',
      loginName: 'admin',
      userName: '段鸿运',
      bumen: '研发部门',
      phone: '1588888888',
      chuangjianRiqi: '2024-01-18',
    },

]

const colunm = ref([

    { prop: "id", label: "用户ID" },
    { prop: "loginName", label: "登录名称" },
  { prop: "userName", label: "用户名称" },
  { prop: "bumen", label: "部门" },
  { prop: "phone", label: "手机" },
  { prop: "chuangjianRiqi", label: "创建时间" },

])
const currpage = ref(1)
const pagesize = ref(10)
const totalRows = ref(10)
const selection = ref(true) //多选
const controls = ref("editProcessCenter") //操作:编辑
function MultipleChoice() {
    console.log('1')
}
function RadioChoice(value) {
    console.log(value)
}
// 修改
function handelChuliEdit(index, row) {
    console.log('修改+', index)
    console.log('修改+', row)
}
//详情
function handelViewDetails(index, row) {
    console.log('详情+', index)
    console.log('详情+', row)
}

//删除
function selectTalkDelete(index, row) {
    console.log('删除+', index)
    console.log('删除+', row)
}


// 下面是未封装的表格+分页数据
const indexMethod = (index) => {
  return index +1
}
function getRandomDate(start, end) {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
  const year = randomDate.getFullYear();
  const month = randomDate.getMonth() + 1; // 月份是从0开始的，所以加1
  const day = randomDate.getDate();
  // 使用padStart来确保月和日都是两位数
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');
  return `${year}-${formattedMonth}-${formattedDay}`;
}
const names = ["Tom", "Jerry", "Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Helen",'zhangsan','lisi','wangwu','zhaoliu','tianqi','xiaohong','xiaoming','xiaoliang','张三','李四','王五','赵六'];
const tablesData = ref([])

function getname(){
  const randomIndex = Math.floor(Math.random() * names.length);
  console.log('randomIndex',randomIndex)
  return names[randomIndex];
}

for (let i = 0; i <= 100; i++) {
  tablesData.value.push({
    id: i,
    date: getRandomDate('2024-01-01', '2024-12-31'), // 生成从2020年到2023年的随机日期
    name: getname(),
    address: "暂无数据"
  })
}
const currentPage4 = ref(1)
const pageSize4 = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const handleSizeChange = (val) => {
  console.log(`${val} 条数据`)
  pageSize4.value = val
}
const handleCurrentChange = (val) => {
  console.log(`当前页: ${val}`)
  currentPage4.value = val
}
//计算属性-计算每夜的数据
const paginationData = computed((item)=>{
    const start = (currentPage4.value - 1) * pageSize4.value
    console.log('start',start)
    const end = currentPage4.value * pageSize4.value
    console.log('end',end)
    return tablesData.value.slice(start, end)
})
</script>



<template>
  <div>
    <div>
        <BasicTable :colum="colunm" :tableData="tableData" :pagesize="pagesize" :currpage="currpage" :selections="selection"
            :totalRows="totalRows" @MultipleChoice="MultipleChoice" @RadioChoice="RadioChoice" :controls="controls"
            @updateTalk="handelChuliEdit" @handelViewDetails="handelViewDetails" @selectTalkDelete="selectTalkDelete">
        </BasicTable>

    </div>
    <div>下面是未封装的表格+分页</div>
   
    <div>
        <el-table :data="paginationData"  border :sortable="true" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column type="index" label="序号" width="180" >
                <template v-slot="scope">
                   <span>
                       {{ (currentPage4 -1)*pageSize4 + scope.$index + 1}}
                   </span>
                </template>
            </el-table-column>
       <el-table-column prop="date" label="时间"  />
       <el-table-column prop="name" label="名称"  />
       <el-table-column prop="address" label="备注" />
  </el-table>
    </div>
  <div style="display: flex;justify-content: space-between;margin-top: 20px;">
    <div>共{{tablesData.length}}条数据</div>
    <el-pagination
      :current-page="currentPage4"
     :page-size="pageSize4"
      :page-sizes="[5, 10, 15, 20]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="sizes, prev, pager, next, jumper"
      :total="tablesData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  </div>


</template>