<script setup>
import { reactive } from 'vue'


const font = reactive({
    color: 'rgba(0,0,0,.15)'
})

</script>


<template>
    <div>
        <el-watermark :font="font" content="段红运很帅">
            <div style="height: 900px;margin: 30px;"></div>
        </el-watermark>
    </div>
</template>


<style></style>