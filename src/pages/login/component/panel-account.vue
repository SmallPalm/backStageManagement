<template>
  <div class="panel-account">
    <el-form size="large" :model="account" label-width="60px" :rules="accountRules" ref="accountFormRef">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" style="width: 236px" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" style="width: 236px" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from "element-plus"
import { reactive, ref } from "vue"
// account验证
const accountRules = reactive<FormRules>({
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

const accountFormRef = ref()

const account = reactive({
  name: "",
  password: ""
})

function submit() {
  // accountFormRef.value.validate((valid) => {
  //   console.log(valid)
  //   if (valid) {
  //     console.log("submit!")
  //   } else {
  //     console.log("error submit!")
  //     return false
  //   }
  // })
}

// <script setup> 的组件是默认关闭的
// 通过 defineExpose 编译器宏来显式指定在 <script setup> 组件中要暴露出去的属性
defineExpose({
  submit
})
</script>

<style lang="less" scoped></style>
