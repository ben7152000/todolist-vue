<template>
  <div class="home">
    <button @click="logout" class="btn">Logout</button>
    <div class="container">
      <TodoHeader @addTodo="addTodo" />

        <div v-if="todos.length">
          <TodoList
            :todos="todos"
            :checkedTodo="checkedTodo"
            :updatedTodo="updatedTodo"
            :deleteTodo="deleteTodo"
          />
          <TodoFooter
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @clearCompletedTodo="clearCompletedTodo"
          />
        </div>
        <template v-else>
          <p>Nothing Tasks</p>
        </template>

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
  inject: ['reload'],
  mounted () {
    this.axios.get('http://localhost:8080/api/todos', {
      headers: { Authorization: this.getToken }
    })
      .then(res => {
        this.todos = res.data
      }).catch(e => {
        console.log(e)
      })
  },
  data () {
    return {
      getToken: 'Bearer' + ' ' + JSON.parse(localStorage.getItem('token')),
      todos: []
    }
  },
  methods: {
    async addTodo (todoObj) {
      try {
        await this.axios.post(
          'http://localhost:8080/api/todos',
          todoObj,
          { headers: { Authorization: this.getToken } }
        )
      } catch (e) {
        console.log(e)
      }
    },
    async checkedTodo (todoObj) {
      try {
        await this.axios.put(
           `http://localhost:8080/api/todos/${todoObj._id}`,
           { isDone: !todoObj.isDone },
           { headers: { Authorization: this.getToken } }
        )
      } catch (e) {
        console.log(e)
      }
    },
    async updatedTodo (id, name) {
      try {
        await this.axios.put(
           `http://localhost:8080/api/todos/${id}`,
           { name },
           { headers: { Authorization: this.getToken } }
        )
      } catch (e) {
        console.log(e)
      }
    },
    async deleteTodo (id) {
      try {
        await this.axios.delete(
           `http://localhost:8080/api/todos/${id}`,
           { headers: { Authorization: this.getToken } }
        )
      } catch (e) {
        console.log(e)
      }
    },
    async checkAllTodo (value) {
      try {
        await this.axios.put(
          'http://localhost:8080/api/todos',
          { isDone: value },
          { headers: { Authorization: this.getToken } }
        )
        setTimeout(() => {
          this.reload()
        }, 100)
      } catch (e) {
        console.log(e)
      }
    },
    async clearCompletedTodo () {
      try {
        await this.axios.delete(
          'http://localhost:8080/api/todos',
          { headers: { Authorization: this.getToken } }
        )
        setTimeout(() => {
          this.reload()
        }, 100)
      } catch (e) {
        console.log(e)
      }
    },
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 100px);
  background-image: url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: .3;
  }
  > .btn {
    position: absolute;
    top: 30px;
    right: 50px;
    background-color: teal;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    letter-spacing: .5px;
  }
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
