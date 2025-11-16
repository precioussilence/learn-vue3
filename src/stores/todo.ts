import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todos = useLocalStorage<string[]>('todos', [])

  function add(value: string) {
    todos.value.push(value)
  }
  function modify(index: number, value: string) {
    todos.value[index] = value
  }
  function remove(index: number) {
    todos.value.splice(index, 1)
  }
  return { todos, add, modify, remove }
})
