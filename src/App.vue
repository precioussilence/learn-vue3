<script setup lang="ts">
import { ref } from 'vue'
import CounterDemo from './components/CounterDemo.vue'
import NameInput from './components/NameInput.vue'
import TodoList from './components/TodoList.vue'

const title = ref('计数器')
const count = ref(0)
function increase() {
  count.value++
}
</script>

<template>
  <h1>Hello Vue 3!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <NameInput></NameInput>
  <CounterDemo :title="title" :count="count" @increase="increase"></CounterDemo>
  <TodoList></TodoList>
</template>

<style scoped></style>
