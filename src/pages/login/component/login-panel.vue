<template>
  <div class="panel">
    <div class="panel-tabs">
      <el-tabs stretch type="border-card" @tab-click="tabActiveClick">
        <el-tab-pane>
          <template #label>
            <div class="label-account">
              <el-icon>
                <component :is="!isFilled ? 'UserFilled' : 'User'"></component>
              </el-icon>
              <span class="account">帐号登录</span>
            </div>
          </template>
          <panel-account></panel-account>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <div class="label-phone">
              <el-icon>
                <component :is="isFilled ? 'PhoneFilled' : 'Phone'"></component>
              </el-icon>
              <span class="phone">手机登录</span>
            </div>
          </template>
          <panel-phone></panel-phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="panel-bottom">
      <div class="panel-psw">
        <el-checkbox v-model="isKeep" label="记住密码" size="large" />
        <el-link type="primary" :underline="false">忘记密码</el-link>
      </div>
      <el-button class="panel-submit" size="large" type="primary">
        立即登录
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import PanelAccount from "./panel-account.vue"
import PanelPhone from "./panel-phone.vue"

let isKeep = ref(false)
const isFilled = ref(false)
const tabActiveClick = () => {
  isFilled.value = !isFilled.value
}
</script>

<style lang="less" scoped>
.panel {
  .panel-psw {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .panel-submit {
    width: 100%;
  }
}

.label-account,
.label-phone {
  display: flex;
  align-items: center;
}

.account,
.phone {
  margin-left: 4px;
}
</style>
