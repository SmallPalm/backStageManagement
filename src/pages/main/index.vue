<template>
  <div>
    <h2>{{ message }}</h2>
    <el-button type="primary" plain @click="outLogin">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { TOKEN } from "@/global/constant"
import router from "@/router"
import { localCache } from "@/utlis/cacheStorage"
import { ElMessage } from "element-plus"

const message = "mainPage"
function outLogin() {
  localCache.removeCache(TOKEN)
  ElMessage.success("退出登录成功")
  router.push("/login")
}
</script>

<style lang="less" scoped></style>
