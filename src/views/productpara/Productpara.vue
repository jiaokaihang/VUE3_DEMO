<script setup>
import { ref } from 'vue'
import BasicForm from '../../componts/basicForm/BasicForm.vue';
const list = ref([
    {
        type: "input",
        title: "关键字",
        value: "",
        // width: 300,
    },
    {
        type: "select",
        title: "级别",
        value: "",
        options: [{ value: "本地中心" }, { value: "省际中心" }],
        width: 200,
    },
])
const list1 = ref([
    {
        type: "datePicker",
        title: "日期",
        value: "",
        // width: 300,
    },
    {
        type: "select",
        title: "级别",
        value: "",
        options: [{ value: "本地中心" }, { value: "省际中心" }],
        width: 200,
    },
])

function query(e) {
    console.log('查询的结果', e)
}
</script>


<template>
    <div>
        <BasicForm :list="list" @query="query"></BasicForm>
        <br>
        <BasicForm :list="list1" @query="query"></BasicForm>

    </div>
</template>

<style></style>