<template>
  <div class="register">
    <span class="register-title">Register</span>
    <form
      class="register-form"
      @submit.prevent="register"
    >
      <label>Username</label>
      <input
        v-model="username"
        class="register-input"
        type="text"
        placeholder="Enter your username..."
      >
      <label>Email</label>
      <input
        v-model="email"
        class="register-input"
        type="text"
        placeholder="Enter your email..."
      >
      <label>Password</label>
      <input
        v-model="password"
        class="register-input"
        type="password"
        placeholder="Enter your password..."
      >
      <button class="register-button">
        Register
      </button>
    </form>
    <router-link
      to="/login"
      class="register-login-button"
    >
      Login
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      isLogin: false
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

  > .register-title {
    font-size: 50px;
  }
  > .register-form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    > label {
      margin: 10px 0;
    }
    > .register-input {
      padding: 10px;
      background-color: white;
      border: none;
      border-radius: 10px;
      &:focus {
        outline: none;
      }
    }
    > .register-button {
      margin-top: 20px;
      cursor: pointer;
      background-color: teal;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 10px;
      text-align: center;
    }
  }
  > .register-login-button {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: lightcoral;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>
