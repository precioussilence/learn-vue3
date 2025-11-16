<template>
  <div>
    <input type="text" placeholder="请输入你的名字" v-model="first_name" />
    <input type="text" placeholder="请输入你的姓氏" v-model="last_name" />
    <p>你的全名是：{{ full_name }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const first_name = ref('')
const last_name = ref('')

const full_name = computed(() => `${first_name.value} ${last_name.value}`)
watch(full_name, (newVal, oldVal) => {
  console.log('姓名已变化！')
  console.log(`旧：${oldVal}`, `新：${newVal}`)
})
</script>

<style scoped></style>
