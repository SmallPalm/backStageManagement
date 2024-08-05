<template>
  <div class="panel-phone">
    <el-form>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
const message = "组件"
</script>

<style lang="less" scoped></style>
