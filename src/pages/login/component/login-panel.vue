<template>
  <div class="panel">
    <div class="panel-tabs">
      <el-tabs :stretch="true" type="border-card" @tab-click="tabActiveClick" v-model="tabActiveName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label-account">
              <el-icon>
                <component :is="!isFilled ? 'UserFilled' : 'User'"></component>
              </el-icon>
              <span class="account">帐号登录</span>
            </div>
          </template>
          <panel-account ref="panelAccountRef"></panel-account>
        </el-tab-pane>
        <el-tab-pane name="phone">
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
      <el-button class="panel-submit" size="large" type="primary" @click="panelSubmitClick"> 立即登录 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue"
import PanelAccount from "./panel-account.vue"
import PanelPhone from "./panel-phone.vue"
import { sessionCache } from "@/utlis/cacheStorage"

const isKeep = ref<boolean>(sessionCache.getCache("isKeep") ?? false)
watch(
  () => isKeep.value,
  (newValue) => {
    console.log(newValue)
    sessionCache.setCache("isKeep", newValue)
  }
)

const isFilled = ref(false)
const tabActiveName = ref("account")
// <InstanceType<typeof PanelAccount>>: 难点
const panelAccountRef = ref<InstanceType<typeof PanelAccount>>()
// tab切换
const tabActiveClick = () => {
  isFilled.value = !isFilled.value
}
// 登录
const panelSubmitClick = () => {
  if (tabActiveName.value === "account") {
    panelAccountRef.value?.submit(isKeep.value)
  } else if (tabActiveName.value === "phone") {
    console.log("11111")
  }
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
