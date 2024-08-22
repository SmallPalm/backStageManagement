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
import { TOKEN, USER_INFO } from "@/global/constant"
import router from "@/router"
import { localCache } from "@/utlis/cacheStorage"
import { ElMessage } from "element-plus"
import useUserStore from "@/store/user/user"
import mainMenu from "@/components/main-menu/main-menu.vue"

const userStore = useUserStore()
userStore.getUserInfo()
function outLogin() {
  localCache.removeCache(TOKEN)
  localCache.removeCache(USER_INFO)
  ElMessage.success("退出登录成功")
  router.push("/login")
}
</script>

<style lang="less" scoped>
@import "@/assets/css/variable.module.less";

.container {
  height: 100vh;

  .aside {
    background-color: @menu-bg-color;
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
