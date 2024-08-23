<template>
  <div class="main-menu">
    <logo></logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu default-active="2" class="el-menu-vertical-demo" :background-color="variable.menuBgColor" text-color="#fff" :unique-opened="true" :collapse-transition="false" mode="vertical">
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
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue"
import settings from "@/global/settings"
import variable from "@/assets/css/variable.module.less"
import useUserStore from "@/store/user/user"
import logo from "@/components/logo/logo.vue"

const userStore = useUserStore()
const authRouter = ref<any>([])
watch(
  () => userStore.authRouter,
  (newVal) => {
    authRouter.value = newVal
  }
)
</script>

<style lang="less" scoped>
.main-menu {
  position: relative;
  cursor: pointer;
}

.el-menu-vertical-demo {
  overflow: hidden;
}
</style>
