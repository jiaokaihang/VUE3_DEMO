<script setup>
import { ref } from 'vue'

const radio1 = ref('')
const radio2 = ref('')

function handelRadio1() {
    console.log('radio1', radio1.value)
}

function handelRadio2() {
    console.log('radio1', radio1)
    console.log('radio2', radio2)
}
</script>


<template>
    <div>
        <el-radio-group v-model="radio1" @change="handelRadio1">
            <el-radio-button label="快包"></el-radio-button>
            <el-radio-button label="特快"></el-radio-button>
            <el-radio-button label="标快"></el-radio-button>
            <el-radio-button label="电商标快"></el-radio-button>
            <el-radio-button label="即日"></el-radio-button>
            <el-radio-button label="国际"></el-radio-button>
            <el-radio-button label="普邮"></el-radio-button>
            <el-radio-button label="报纸"></el-radio-button>
        </el-radio-group>
        <br>
        <br>
        <br>
        <br>
        <br>

        <el-radio-group v-model="radio2" @change="handelRadio2">
            <el-radio-button label="省际出口"></el-radio-button>
            <el-radio-button label="省际进口"></el-radio-button>
            <el-radio-button label="省内互寄"></el-radio-button>
        </el-radio-group>
    </div>
</template>

<style></style>