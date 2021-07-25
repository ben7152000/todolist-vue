<template>
  <div class="login">
    <div class="container">
      <h2 class="title">Login</h2>
      <form @submit.prevent="login">
        <label>Username</label>
        <input
          v-model="username"
          type="text"
          placeholder="Enter your username..."
        >
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter your password..."
        >
        <button class="btn btn-login">Login</button>
        <router-link to="/register" class="btn btn-register">Register</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      isLogin: false
    }
  },
  methods: {
    async login () {
      try {
        this.isLogin = true
        const user = await this.axios.post('http://localhost:8080/api/auth/login', {
          username: this.username,
          password: this.password
        })
        const asscessToken = user.data.asscessToken
        localStorage.setItem('token', JSON.stringify(asscessToken))
        this.$router.push('/')
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
.login {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
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
      > .btn-login {
        background-color: lightcoral;
        transition: .5s;
        &:hover {
          background-color: darken(lightcoral, 10%);
        }
      }
      > .btn-register {
        background-color: teal;
        transition: .5s;
        &:hover {
          background-color: darken(teal, 10%);
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
