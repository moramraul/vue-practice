<template>
  <header>
  <register></register>
  </header>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Register from './components/Register.vue';

export default {
  components: {
    Register
  }}

</script>

<style scoped>
</style>
