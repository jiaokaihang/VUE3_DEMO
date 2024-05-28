<script setup >
import { defineProps } from 'vue'
const props = defineProps(['menuList'])
</script>


<template>
    <div>
        <template v-for="item in props.menuList" :key="item.path">
<!--          {{ item }}-->

<!--          {{ item.children[0].title }}-->
            <!--      分为两种方式渲染：有子菜单和没有子菜单-->

            <template v-if="item.children">
              <!--有路由但是子路由的长度只有1-->
              <el-sub-menu :index="item.path" >
                <template #title>
                  <el-icon>
                    <component :is="item.icon" />
                  </el-icon>
                  <span>{{ item.title }}</span>
                </template>
                <!--        有子菜单的继续遍历（递归）-->
                <MenuTree :menuList="item.children"></MenuTree>
              </el-sub-menu>
            </template>
<!--          <template v-if="item.children&&item.children.length ==1">-->
<!--            &lt;!&ndash;有路由但是路由的长度只有1&ndash;&gt;-->
<!--            <el-menu-item :index="item.children[0].path">-->
<!--               <template #title>-->
<!--                 <span>-->
<!--                   {{item.children[0].title}}-->
<!--                 </span>-->
<!--               </template>-->
<!--            </el-menu-item>-->
<!--          </template>-->
            <!--      没有子菜单-->
           <template v-if="!item.children">
<!--             {{ item.children.title }}-->
             <el-menu-item :index="item.path" >
               <el-icon>
                 <component :is="item.icon" />
               </el-icon>
               <span>{{ item.title }}</span>
             </el-menu-item>
           </template>
        </template>
    </div>
</template>


<style></style>