<template>
  <div>
    <div>
      <label for="todo">待办：</label>
      <input type="text" v-model="todo" />
    </div>
    <div>
      <button @click="add">新增</button>
    </div>
    <ul>
      <li v-for="(value, index) in todos" :key="index">
        <span>{{ value }}</span>
        <button @click="modify(index)">修改</button>
        <button @click="remove(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const todo = ref('')
const todos = reactive<string[]>([])

function add() {
  todos.push(todo.value)
}
function modify(index: number) {
  todos[index] = todo.value
}
function remove(index: number) {
  todo.value = ''
  todos.splice(index, 1)
}
</script>

<style scoped></style>
