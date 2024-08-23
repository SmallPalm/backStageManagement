<template>
  <div class="login">
    <h1 class="login-title">{{ settings.title }}</h1>
    <div class="login-container">
      <login-panel></login-panel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import loginPanel from "./component/login-panel.vue"
import settings from "@/global/settings"
</script>

<style lang="less" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-image: url(../../assets/image/login-bg.svg);

  .login-title {
    font-size: 32px;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
  }
}
</style>
