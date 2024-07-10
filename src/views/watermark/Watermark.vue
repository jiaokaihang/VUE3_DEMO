<script setup>
import { reactive } from 'vue'
import {user,setUser,num,setNum} from '../../hook/user.js'


const arr = ['张三','李四','王五','赵六','段红运','钱七','孙八','周九','吴十','郑十一','王十二','李十三','孙十四','周十五','吴十六','郑十七','王十八','段十九','钱二十','孙二十一','周二十二','吴二十三','郑二十四','王二十五','段二十六','钱二十七','孙二十八','周二十九','吴三十','郑三十一','王三十二']

for(let i =0;i<arr.length;i++){
         setTimeout(function(){

        const randomIndex = Math.floor(Math.random() * arr.length);
        setUser(arr[randomIndex])
         }, i * 2000)
        }
const font = reactive({
    color: 'rgba(0,0,0,.15)'
})

</script>


<template>
 <div>
    <div>
        <el-watermark :font="font" content="段红运很帅">
            <div style="height: 900px;margin: 30px;">
                <div>
        <div>hook中的user数据:{{ user }}</div>
        <div>hook中的user数据:{{ setNum }}</div> 
       
    </div>
            </div>
        </el-watermark>
    </div>

 </div>
</template>


<style></style>