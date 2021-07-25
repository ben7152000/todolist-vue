<template>
  <ul class="todo-main">
      <TodoItem
        v-for="todo in todos"
        :key="todo._id"
        :todo="todo"
        :checkedTodo="checkedTodo"
        :updatedTodo="updatedTodo"
        :deleteTodo="deleteTodo"
        class="animate__animated animate__fadeIn"
      />
  </ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    },
    checkedTodo: {
      type: Function,
      required: true
    },
    updatedTodo: {
      type: Function,
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-main {
  width: 100%;
  padding: 20px;
}

</style>
