<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ counter.count }} - {{ counter.double }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import useCounter from "../../store/counter"

const message = "loginPage"

const counter = useCounter()
console.log(counter)
</script>

<style lang="less" scoped></style>
