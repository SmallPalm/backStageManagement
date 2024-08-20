<template>
  <div class="main-menu">
    <div class="menu-top">
      <img class="menu-logo" src="../../assets/image/logo.svg" alt="" />
      <h2 class="menu-title">{{ message ?? "后台管理" }}</h2>
    </div>
    <div>
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="" text-color="#fff">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <Menu />
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
const imgSvg = "../../assets/image/logo.svg"
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
