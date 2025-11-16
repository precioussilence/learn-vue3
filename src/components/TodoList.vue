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
        <button @click="handleRemove(index)">删除</button>
      </li>
    </ul>
    <div v-if="isRevealed">
      <h2>确定要删除这条待办吗？</h2>
      <button @click="confirm">确定</button>
      <button @click="cancel">取消</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { useConfirmDialog, useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'

const todo = ref('')

const { todos, add, modify, remove } = useTodoStore()

useLocalStorage('todo', todo)

const { isRevealed, reveal, confirm, cancel } = useConfirmDialog()

async function handleRemove(index: number) {
  const result = await reveal()
  if (!result.isCanceled) {
    remove(index)
  }
}
</script>

<style scoped></style>
