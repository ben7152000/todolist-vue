<template>
  <div>
    <Navbar title="Todo List"/>
      <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

ul {
  list-style: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}

</style>
