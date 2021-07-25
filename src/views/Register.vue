<template>
  <div class="register">
    <div class="container">
      <h2 class="title animate__animated animate__backInDown">Register</h2>
      <form @submit.prevent="register" novalidate class="animate__animated animate__jackInTheBox">
        <label>Username</label>
        <input
          v-model="username"
          type="text"
          placeholder="Enter your username..."
        >
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email..."
        >
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter your password..."
        >
        <button class="btn btn-register">
          Register
        </button>
        <router-link to="/login" class="btn btn-login">Login</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from '../utils/swal'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      isLogin: false
    }
  },
  methods: {
    async register () {
      if (!this.username.trim() || !this.email.trim() || !this.password.trim()) {
        return Toast.fire({
          icon: 'warning',
          title: 'please enter info in the input.'
        })
      }
      try {
        this.isLogin = true
        this.axios.post(`${process.env.HEROKU_URL}/api/auth/register` || 'http://localhost:8080/api/auth/register', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        this.$router.push('/login')
      } catch (e) {
        this.isLogin = false
        console.log(e)
      } finally {
        this.isLogin = false
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.register {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;

  > .container {
    display: flex;
    flex-direction: column;
    padding: 50px;
    > .title {
      text-align: center;
      font-size: 3rem;
    }
    > form {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      > label {
        margin: 10px 0;
        font-size: 1.2rem;
        letter-spacing: .5px;
      }
      > input {
        padding: 10px;
        width: 250px;
        background-color: white;
        border: none;
        border-radius: 10px;
        &:focus {
          outline: none;
        }
      }
      > .btn-register {
        background-color: teal;
        transition: .5s;
        &:hover {
          background-color: darken(teal, 10%);
        }
      }
      > .btn-login {
        background-color: lightcoral;
        transition: .5s;
        &:hover {
          background-color: darken(lightcoral, 10%);
        }
      }
    }
  }
}

.btn {
  margin-top: 20px;
  cursor: pointer;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
}
</style>
