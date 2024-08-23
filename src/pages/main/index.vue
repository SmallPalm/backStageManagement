<template>
  <div>
    <el-container class="container">
      <el-aside width="200px" class="aside">
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">Main</el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user/user"
import useLoginStore from "@/store/login/login"
import mainMenu from "@/components/main-menu/main-menu.vue"

const userStore = useUserStore()
userStore.getUserInfo()
function outLogin() {
  useLoginStore().accountLogoutAction()
}
</script>

<style lang="less" scoped>
@import "@/assets/css/variable.module.less";

.container {
  height: 100vh;

  .aside {
    background-color: @menu-bg-color;
    // 取消侧边栏的滚动条
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .header {
    background-color: #f0f;
  }

  .main {
    background-color: #ff0;
  }

  .footer {
    background-color: #0ff;
  }
}
</style>
