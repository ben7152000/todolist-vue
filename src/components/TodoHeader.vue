<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="New Task Item"
      v-model="task"
      @keyup.enter="add"
    >
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'TodoHeader',
  data () {
    return {
      task: ''
    }
  },
  methods: {
    add () {
      if (!this.task.trim()) {
        return Swal.fire({
          title: 'Warning!!',
          text: 'Please do something in the input!',
          icon: 'warning'
        })
      }
      const id = Math.random().toString(36).slice(-8)
      const todoObj = { id, task: this.task.trim(), isDone: false }
      this.$emit('addTodo', todoObj)
      this.task = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-header {
  width: 100%;
  padding: 20px;
  > input {
    width: 100%;
    border: none;
    outline: none;
    line-height: 30px;
    font-size: 1.1rem;
    padding-left: 10px;
    border-radius: 5px;
    height: 40px;
    &::placeholder {
      opacity: .4;
      transition: .5s;
    }
    &:focus::placeholder {
      opacity: .2;
    }
  }
}
</style>
