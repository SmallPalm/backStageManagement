<template>
  <div>
    <div class="menu-logo-container">
      <transition name="menuLogo">
        <router-link to="/" key="collapse" class="menu-logo-link">
          <img v-if="logo" :src="logo" class="menu-logo" />
          <h1 class="menu-title">{{ title }}</h1>
        </router-link>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import useSettingsStore from "@/store/settings/settings"
import logo from "@/assets/image/logo.svg"

const settingsStore = useSettingsStore()
const title = computed(() => settingsStore.title)
</script>

<style lang="less" scoped>
.menuLogo-enter-active {
  transition: opacity 1.5s;
}

.menuLogo-enter,
.menuLogo-leave-to {
  opacity: 0;
}

.menu-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  // background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  .menu-logo-link {
    height: 100%;
    width: 100%;

    .menu-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    .menu-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family:
        Avenir,
        Helvetica Neue,
        Arial,
        Helvetica,
        sans-serif;
      vertical-align: middle;
    }
  }
}
</style>
