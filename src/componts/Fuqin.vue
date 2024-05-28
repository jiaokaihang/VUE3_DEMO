
<script setup>
import { ref } from 'vue'
import Erzi from './Erzi.vue'

const title = ref('我是一个好人')

function handelClick() {
    alert('触发我把')
}
function handelOut() {
    alert('关闭我')
}
</script>

<template>
    <div>
        这里是父组件
        <Erzi :title="title" @handelClick="handelClick" @handelOut="handelOut"></Erzi>
    </div>
</template>



<style></style>