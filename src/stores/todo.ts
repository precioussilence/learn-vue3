import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = reactive<string[]>([])

  function add(value: string) {
    todos.push(value)
  }
  function modify(index: number, value: string) {
    todos[index] = value
  }
  function remove(index: number) {
    todos.splice(index, 1)
  }
  return { todos, add, modify, remove }
})
