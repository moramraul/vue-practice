<template>
  <header>
  <register-form></register-form>
  </header>

</template>

<script>
//import { RouterLink, RouterView } from 'vue-router'
import RegisterForm from './components/RegisterForm.vue';
import LoginForm from './components/LoginForm.vue'

export default {
  components: {
    RegisterForm,
    LoginForm
  }}

</script>

<style scoped>
</style>
