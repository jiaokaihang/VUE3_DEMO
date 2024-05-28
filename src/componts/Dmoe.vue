<template>
    <div>
        <h1>我是App组件</h1>
        <h2>姓名:{{ data.name }}</h2>
        <h2>年龄:{{ data.age }}</h2>
        <h2>信息:{{ msg }}</h2>
        <h2>学校:{{ school }}</h2>
        <button @click="handelClick">点击我一下</button>
        <el-button type="success">点击我</el-button>
    </div>
</template>
  
<script>
import { reactive, onMounted } from 'vue'
export default {
    name: 'Dmoe',
    props: ['msg', 'school'],
    emits: ['hello'],
    setup(props, context) {
        //数据


        let tableData = reactive({ arr: [] })

        const res = [1, 2, 3]


        let data = reactive({
            name: "张三",
            age: 18,
        })

        onMounted(() => {
            tableData.arr = res
        })

        function handelClick() {
            context.emit('hello', 666)
        }


        return { data, tableData, handelClick }
    },
}
</script>
  
<style></style>