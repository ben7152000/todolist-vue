<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.isDone"
        @change="changeHandler(todo)"
      >
      <span
        :class="{ 'checked' : todo.isDone }"
        v-show="!isEdit"
      >
        {{ todo.name }}
      </span>
      <input
        type="text"
        class="edit-input"
        v-show="isEdit"
        :value="todo.name"
        @blur="blurHandler(todo, $event)"
        ref="inputTask"
      >
    </label>
    <div>
      <button class="edit" @click="editHandler(todo)">edit</button>
      <button class="btn" @click="deleteHandler(todo._id)">delete</button>
    </div>
  </li>
</template>

<script>
import { Toast } from '../utils/swal'
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
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
  },
  inject: ['reload'],
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    changeHandler (todo) {
      this.checkedTodo(todo)
      setTimeout(() => {
        this.reload()
      }, 100)
    },
    deleteHandler (id) {
      Toast.fire({
        title: 'Your task has been deleted.',
        icon: 'success'
      })
      this.deleteTodo(id)
      setTimeout(() => {
        this.reload()
      }, 100)
    },
    editHandler () {
      this.isEdit = true
      this.$nextTick(() => {
        this.$refs.inputTask.focus()
      })
    },
    blurHandler (todo, e) {
      this.isEdit = false
      if (!e.target.value.trim()) {
        return Toast.fire({
          title: 'Input need to write something!',
          icon: 'warning'
        })
      }
      this.updatedTodo(todo._id, e.target.value)
      setTimeout(() => {
        this.reload()
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  padding-top: 5px;
  padding-bottom: 5px;
  > label {
    cursor: pointer;
    font-size: 1.1rem;
    line-height: 20px;
    letter-spacing: .5px;
    > .edit-input {
      outline: none;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
      line-height: 25px;
      font-size: 1.1rem;
    }
    > .checked {
      opacity: .5;
      font-style: italic;
      text-decoration: line-through;
    }
    > input[type="checkbox"] {
      width: 12px;
      height: 12px;
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
  .edit {
    padding: 2px 10px;
    margin-right: 10px;
    background: rgba(0, 89, 255, 0.94);
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
  .btn {
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
