<template>
  <div>
    <p>{{ title }}: {{ count }}</p>
    <button @click="handleClick">计数</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  count: number
}>()

const emit = defineEmits<{
  (e: 'increase'): void
}>()

function handleClick() {
  emit('increase')
}
</script>

<style scoped></style>
