<script setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>


<template>
    <div>
        <el-calendar v-model="value"></el-calendar>
    </div>
</template>


<style></style>