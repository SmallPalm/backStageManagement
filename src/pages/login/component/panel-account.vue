<template>
  <div class="panel-account">
    <el-form size="large" :model="account" label-width="60px" :rules="accountRules">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from "element-plus"
import { reactive, ref } from "vue"

const accountRules: FormRules = reactive({
  name: [
    { required: true, message: "请输入帐号", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{6,12}$/,
      message: "必须是6~12位的字母或数字组成",
      trigger: "change"
    }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{6,12}$/,
      message: "必须是6~12位的字母或数字组成",
      trigger: "change"
    }
  ]
})

const account = reactive({
  name: "",
  password: ""
})
</script>

<style lang="less" scoped></style>
