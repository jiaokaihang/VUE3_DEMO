<template>
    <div>
        <h1>便携式小空调</h1>
        <div class="container">
            <div>
                <div class="top">
                
                <img src="../../assets/kongtiao.png" alt="" class="kogntiao">
                <div class="float" v-if="flag">
                    <div>
                        <el-icon color="#409efc" class="no-inherit">
                            <MostlyCloudy />
                        </el-icon>
                    </div>
                    <div style="color: rgb(204, 204, 204);font-size: 20px;">{{temperature}}℃</div>
                </div>
             </div>
             <div v-if="flag">
                 <img src="../../assets/feng.png" alt="" class="feng">
             </div>
            </div>
            <div class="btn">
                   <!-- 制冷 -->
                   <div class="btn-icon-M">
                    <el-icon class="no-inherit">
                          <MostlyCloudy />
                        </el-icon>
                   </div>
                   <!-- 开关 -->
                   <div  class="btn-icon-S" @click="btnSClick">
                    <el-icon class="no-inherit">
                          <SwitchButton />
                        </el-icon>
                   </div>
                   <!-- 制热 -->
                   <div  class="btn-icon-SU">
                    <el-icon  class="no-inherit">
                          <Sunny />
                        </el-icon>
                   </div>
            </div>
            <div class="btn-arrow">
                <div class="btn-icon-T" @click="arrowAdd">
                    <el-icon class="no-inherit">
                          <ArrowUpBold />
                        </el-icon>
                   </div>
                   <div class="btn-icon-T" @click="arrowSub">
                    <el-icon class="no-inherit">
                          <ArrowDownBold />
                        </el-icon>
                   </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
// 初始化空调状态
const flag = ref(false)
// 初始化温度
const temperature = ref(16)
// 点击开关空调打开
function btnSClick(){
    flag.value = !flag.value;

}
// 控制温度加
function arrowSub(){
    temperature.value -=  0.5
    if(temperature.value<16){
        temperature.value = 16
    }
}
// 控制温度减
function arrowAdd(){
    temperature.value +=  0.5
    if(temperature.value>26){
        temperature.value = 26
    }
}
</script>

<style lang="less" scoped>
.container{
    .top{
        position: relative;
    }
    .float{

        position: absolute;
        top: 50px;
        left: 300px;
    }
    .kogntiao{
      
        width: 400px;
        height: 200px;
    }
    .feng{
        width: 350px;
        // height: 100px;
        margin-left: 22px;
        margin-top: -52px;
    }
    .btn{
        display: flex;

        margin-left: 100px;
        margin-top: 50px;
        .btn-icon-M{
            display: flex;
            justify-content: center;
            align-items: cenetr;
            width: 50px;
            height: 50px;
            margin-left: 15px;
            border: 1px solid rgb(63, 81, 181);
            background:rgb(63, 81, 181);
            border-radius: 50%;
            .no-inherit{
                font-size: 30px;
                color: #fff;
             margin-top:20%;
            }
        }
        .btn-icon-S{
            display: flex;
            justify-content: center;
            align-items: cenetr;
            width: 50px;
            height: 50px;
            margin-left: 15px;
            border: 1px solid rgb(76, 175, 80);
            background:rgb(76, 175, 80);
            border-radius: 50%;
            .no-inherit{
                color: #fff;
                font-size: 30px;
             margin-top:20%;
            }
        }
        .btn-icon-SU{
            display: flex;
            justify-content: center;
            align-items: cenetr;
            width: 50px;
            height: 50px;
            margin-left: 15px;
            border: 1px solid rgb(255, 165, 0);
            background:rgb(255, 165, 0);
            border-radius: 50%;
            .no-inherit{
                color: #fff;
                font-size: 30px;
             margin-top:20%;
            }
        }
    }
    .btn-arrow{
        margin-left: 190px;
        margin-top: 50px;
        .btn-icon-T{
            display: flex;
            justify-content: center;
            align-items: cenetr;
            width: 50px;
            height: 50px;
            margin-left: -10px;
            margin-bottom: 15px;
            border: 1px solid rgb(224, 224, 224);
            background:rgb(224, 224, 224);
            border-radius: 50%;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2);
            .no-inherit{
                color: rgb(51, 51, 51);
                font-size:20px;
             margin-top:30%;
            }
        }
        
    }
}
</style>