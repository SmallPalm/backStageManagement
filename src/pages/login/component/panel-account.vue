<template>
  <div class="panel-account">
    <el-form size="large" :model="account" label-width="68px" :rules="accountRules" ref="accountFormRef">
      <el-form-item label="帐号" prop="username">
        <el-input type="text" size="large" placeholder="请输入帐号" v-model="account.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" size="large" placeholder="请输入密码" v-model="account.password" show-password />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="text" size="large" placeholder="请输入验证码" v-model="account.code" style="width: 56%" />
        <div>
          <img :src="codeImg ? codeImg : ''" @click="getCodeImg" class="login-code-img" />
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import type { FormRules, ElForm } from "element-plus"
import { reactive, ref, onMounted } from "vue"
import useLoginStore from "@/store/login/login"
import { createCodeImg } from "@/service/api/login"
import router from "@/router"

onMounted(() => {
  getCodeImg()
})

// account验证
const accountRules = reactive<FormRules>({
  username: [
    { required: true, message: "请输入帐号", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{3,12}$/,
      message: "必须是3~12位的字母或数字组成",
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
  ],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }]
})

const loginStore = useLoginStore()
const accountFormRef = ref<InstanceType<typeof ElForm>>()

const account = reactive({
  username: "",
  password: "",
  code: "",
  uuid: ""
})
const codeImg = ref("")

function submit() {
  accountFormRef.value?.validate((valid) => {
    if (valid) {
      // ElMessage.success("登录成功")
      loginStore.accountLoginAction(account).then((res) => {
        if (res.code == 200) {
          ElMessage({
            message: "登录成功",
            type: "success"
          })
          router.push("/main")
        }
      })
    } else {
      ElMessage.error("请输入正确的帐号和密码")
    }
  })
}

async function getCodeImg() {
  const res = await createCodeImg()
  codeImg.value = "data:image/gif;base64," + res.img
  account.uuid = res.uuid
}

// <script setup> 的组件是默认关闭的
// 通过 defineExpose 编译器宏来显式指定在 <script setup> 组件中要暴露出去的属性
defineExpose({
  submit
})
</script>

<style lang="less" scoped>
.login-code-img {
  height: 40px;
  padding-left: 12px;
}
</style>
