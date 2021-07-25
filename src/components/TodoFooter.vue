<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      Complete<span>{{ totalCompleted }}</span> / All Task <span>{{ totalTodos }}</span>
    </span>
    <button class="btn" @click="clearAll">Clear Completed Tasks</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'TodoFooter',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  inject: ['reload'],
  computed: {
    isAll: {
      get () {
        return this.totalCompleted === this.totalTodos && this.totalTodos > 0
      },
      set (value) {
        this.$emit('checkAllTodo', value)
      }
    },
    totalCompleted () {
      return this.todos.reduce((pre, todo) => pre + (todo.isDone ? 1 : 0), 0)
    },
    totalTodos () {
      return this.todos.length
    }
  },
  methods: {
    clearAll () {
      if (this.totalCompleted === 0) {
        return Swal.fire({
          title: 'Warning!!',
          text: 'Please check your task!',
          icon: 'warning'
        })
      }
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to clear all tasks?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your task has been deleted.',
              'success'
            )
            this.$emit('clearCompletedTodo')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-footer {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > label {
    > input[type="checkbox"] {
      width: 12px;
      height: 12px;
      cursor: pointer;
      margin-right: 12px;
      text-align: center;
      vertical-align: middle;
      line-height: 12px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: #11203d;
        width: 100%;
        height: 100%;
        border: 1px solid #d9d9d9;
      }
      &:checked::before {
        content: '\2713';
        background-color: #11203d;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border: 1px solid rgb(133,137,141);
        color: #ffffff;
      }
    }
  }
  > span {
    font-size: 1.1rem;
    line-height: 20px;
    > span {
      margin: 0 5px;
    }
  }
  > .btn {
    padding: 2px 10px;
    background: rgba(255, 0, 0, 0.94);
    border: none;
    outline: none;
    border-radius: 5px;
    letter-spacing: .5px;
    color: #ffffff;
    cursor: pointer;
    opacity: .2;
    transition: .5s;
    &:hover {
      opacity: .8;
    }
  }
}
</style>
