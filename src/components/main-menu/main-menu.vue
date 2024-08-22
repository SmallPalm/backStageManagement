<template>
  <div class="main-menu">
    <div class="menu-top">
      <img class="menu-logo" src="../../assets/image/logo.svg" alt="" />
      <h2 class="menu-title">{{ message ?? "后台管理" }}</h2>
    </div>
    <div>
      <el-menu default-active="2" class="el-menu-vertical-demo" :background-color="variable.menuBgColor"
        text-color="#fff">
        <div v-if="authRouter.length">
          <template v-for="item in authRouter" :key="item.name">
            <el-sub-menu :index="item.path">
              <template #title>
                <i class="el-icon-location"></i>
                <span>{{ item.meta.title }}</span>
              </template>

              <template v-for="subItem in item.children" :key="subItem.name">
                <el-menu-item :index="subItem.path">
                  <i class="el-icon-location"></i>
                  <span>{{ subItem.meta.title }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue"
import variable from "@/assets/css/variable.module.less"
import useUserStore from "@/store/user/user"

const userStore = useUserStore()
const authRouter = ref<any>([])
watch(
  () => userStore.authRouter,
  (newVal) => {
    authRouter.value = newVal
  }
)
const message = "后台管理系统"
</script>

<style lang="less" scoped>
.main-menu {
  cursor: pointer;

  .menu-top {
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
    justify-content: center;

    .menu-logo {
      width: 20px;
    }

    .menu-title {
      margin-left: 10px;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      color: #ccc;
    }
  }
}
</style>
