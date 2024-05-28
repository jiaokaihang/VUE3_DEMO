<script setup>
import { ref, onMounted, computed,inject } from 'vue'
import { useRoute } from 'vue-router';
import children from "@/utils/index";
import MenuTree from './MenuTree'

const subchildren = ref([])
const route = useRoute()
onMounted(() => {
    subchildren.value = children()
})

const onRoutes = computed(() => {
    const { meta, path } = route;
    if (meta.activeMenu) {
        return meta.activeMenu;
    }
    return path
})
// 设置菜单栏可折叠
const isCollapse = inject('isCollapse', ref(false))
// function handleOpen(){
//   isCollapse.value = false;
// }

const handleOpen = (key, keyPath) => {
  console.log('open事件',key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log('close事件',key, keyPath)
}
</script>

<template>
    <div>
        <!-- 标题logo -->
        <span class="jdwl">
            <!-- <img src="../../assets/image/jdtitle.png" alt="" /> -->
            馆陶黑小麦
        </span>
        <el-menu
            :collapse="isCollapse"
            active-text-color="#ffd04b"
            background-color="#242424"
            class="el-menu-vertical-demo"
            :default-active="onRoutes"
            text-color="#fff"
            :router="true"
            @open="handleOpen"
            @close="handleClose"
            :unique-opened="true"
            :collapse-transition="true">
            <MenuTree :menuList="subchildren"></MenuTree>
        </el-menu>

    </div>
</template>

<style scoped lang="less">
.jdwl {
    /* 自动布局子元素 */
    height: auto;
    opacity: 1;
    font-family: YouSheBiaoTiHei;
    font-size: 21px;
    font-weight: normal;
    letter-spacing: 0em;
    color: #2ba471;
    padding-left: 8px;
    padding-top: 24px;
    z-index: 0;
    margin-bottom: 100px;
    margin-left: 40px;
    margin-top: 15px;
}

.jdwl img {
    width: 85%;
    margin-left: 50px;
}

.el-aside {
    margin-top: 24px;
}

.left-menu {
    height: 100%;
    // overflow-y: auto;
}



/* 设置列表的样式 */
.el-menu-item {

    height: 48px;
    line-height: 48px;
}




.title {
    color: #999999;
}


/* 父级的类名 */
:deep(.el-submenu__title.is-active) {

    background-color: #2BA471 !important;
    color: #ffffff;


}

:deep(.el-submenu__title:hover) {

    background-color: #2BA471 !important;
    color: #ffffff !important;

    .title {
        color: #fff;
    }

    i {
        color: #fff;
    }

}

/* //子级的类名 */

:deep(.el-menu-item:hover) {
  //width: 100vw;
    background-color: #2BA471 !important;
    color: #ffffff;

    .title {
        color: #fff;
    }

    i {
        color: #fff;
    }
}

:deep(.el-menu-item:focus) {
  //width: 100vw;
    background-color: #2BA471 !important;
    color: #ffffff;

    .title {
        color: #fff;
    }

    i {
        color: #fff;
    }
}

:deep(.el-menu-item.is-active) {
    background-color: #2BA471 !important;
    color: #ffffff;

    .title {
        color: #fff;
    }

    i {
        color: #fff;
    }

}

:deep(.el-submenu.is-active > .el-submenu__title) {
    color: #ffffff !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>