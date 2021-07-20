<template>
  <div class="home">
    <div class="container">
      <TodoHeader :addTodo="addTodo"/>
      <transition name="fade" mode="out-in">
        <div v-if="todos.length">
          <TodoList :todos="todos" :deleteTodo="deleteTodo" :checkedTodo="checkedTodo"/>
          <TodoFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearCompletedTodo="clearCompletedTodo"/>
        </div>
        <template v-else>
          <p>Nothing Tasks</p>
        </template>
      </transition>
    </div>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader'
import TodoList from '@/components/TodoList'
import TodoFooter from '@/components/TodoFooter'

export default {
  name: 'Home',
  components: {
    TodoList,
    TodoHeader,
    TodoFooter
  },
  data () {
    return {
      todos: [
        {
          id: 1,
          task: 'Reading book',
          isDone: false
        },
        {
          id: 2,
          task: 'Writing homework',
          isDone: true
        },
        {
          id: 3,
          task: 'Watch TV',
          isDone: false
        }
      ]
    }
  },
  methods: {
    addTodo (todoObj) {
      this.todos.unshift(todoObj)
    },
    checkedTodo (id) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.isDone = !todo.isDone
      })
    },
    deleteTodo (id) {
      this.todos = this.todos.filter(todo => {
        if (todo.id !== id) return todo
      })
    },
    checkAllTodo (value) {
      this.todos.forEach(todo => {
        todo.isDone = value
      })
    },
    clearCompletedTodo () {
      this.todos = this.todos.filter(todo => {
        return !todo.isDone
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > .container {
    width: 600px;
    margin: 100px 50px;
    z-index: 2;
    background-color: rgba(200, 200, 200 ,.8);
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .1);
    > p {
      width: 100%;
      padding: 20px;
      line-height: 20px;
      font-size: 1.1rem;
      opacity: .4;
      letter-spacing: 1px;
      font-style: italic;
    }
  }
}
</style>
