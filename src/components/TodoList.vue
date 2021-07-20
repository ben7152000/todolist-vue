<template>
  <ul class="todo-main">
    <transition-group name="fade">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        :task="todo.task"
        :isDone="todo.isDone"
        :checkedTodo="checkedTodo"
        :deleteTodo="deleteTodo"
      />
      </transition-group>
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
