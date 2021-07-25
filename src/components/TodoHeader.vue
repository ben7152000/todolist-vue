<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="New Task Item"
      v-model="name"
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
      name: ''
    }
  },
  inject: ['reload'],
  methods: {
    add () {
      if (!this.name.trim()) {
        return Swal.fire({
          title: 'Warning!!',
          text: 'Please do something in the input!',
          icon: 'warning'
        })
      }
      const todoObj = { name: this.name.trim() }
      this.$emit('addTodo', todoObj)
      this.name = ''
      setTimeout(() => {
        this.reload()
      }, 100)
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
