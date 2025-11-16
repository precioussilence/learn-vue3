<template>
  <div>
    <div>
      <label for="todo">待办：</label>
      <input type="text" v-model="todo" />
    </div>
    <div>
      <button @click="add(todo)">新增</button>
    </div>
    <ul>
      <li v-for="(value, index) in todos" :key="index">
        <span>{{ value }}</span>
        <button @click="modify(index, todo)">修改</button>
        <button @click="remove(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const todo = ref('')

const { todos, add, modify, remove } = useTodoStore()
</script>

<style scoped></style>
