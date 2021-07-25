<template>
  <nav>
    <h1>{{ title }}</h1>
    <button>Logout</button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #000000;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
  > h1 {
    color: #ffffff;
    font-size: 3rem;
    letter-spacing: 1px;
    z-index: 999;
  }
  > button {
    position: absolute;
    right: 20px;
    background-color: teal;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>
