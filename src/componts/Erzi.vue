<script setup>

import { ref, defineEmits } from 'vue'
const emit = defineEmits(['handelClick', 'handelOut'])
const props = defineProps(['title'])

const title = ref(props.title)

function handelErzi() {
    emit('handelClick')
}
function handelOuErziOut() {
    emit('handelOut')
}
</script>


<template>
    <div>
        <div>这里是儿子组件:{{ title }}</div>
        <button @click="handelErzi">子组件触发父组件的事件</button>
        <button @click="handelOuErziOut">子组件触发父组件的事件--关闭</button>
    </div>
</template>


<style></style>