<template>
  <div>
    <input type="text" placeholder="请输入你的姓名" v-model="name" />
    <p>姓名：{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<style scoped></style>
