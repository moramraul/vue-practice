<template>
  <div>
    <div class="header-login">
  <h1>Welcome to Bookmark.me </h1>
  <h2>Register to continue or login if you are already registered</h2>
  </div>
  <div class="form-control">
    <form @submit.prevent="getData">
      <label>User name</label>
      <input type="text" v-model="name" id="name" @blur="checkValidity" placeholder="Username" name="name">
      <label>Email</label>
      <input type="text" v-model="email" id="email" @blur="checkValidity" placeholder="Email" name="email">
      <label>Password</label>
      <input type="password" v-model="password" @blur="saludar" id="password" placeholder="Password" name="password">
      <label>Repeat password</label>
      <input type="password" v-model="password2" id="password2" @blur="checkValidity" placeholder="Repeat password" name="password2">
      <button>Submit</button>
      <p v-if="nameValidity === 'invalid'">Username is invalid</p>
      <p v-if="emailValidity === 'invalid'">Email is invalid</p>
      <p v-if="passwordValidity === 'invalid'">Password doesn't match</p>
    </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      nameValidity: 'pending',
      email: '',
      emailValidity: 'pending',
      password: '',
      password2: '',
      passwordValidity: 'pending'
    }
  },
  methods: {
    checkValidity() {
      if (this.name === '')
      {this.nameValidity = 'invalid'}
      else {
        this.nameValidity = 'valid'
      }
      if (this.email.includes('@'))
      {
        this.emailValidity = 'valid'
      }
      else {
        this.emailValidity = 'invalid'
      }
      if 
        (this.password === this.password2)
        {
          this.passwordValidity = 'valid'
        }
      else {
        this.passwordValidity = 'invalid'
      }
    },
    getData() {
      if (
        this.nameValidity === 'valid' && this.passwordValidity === 'valid' && this.emailValidity === 'valid'
      )
      {
        let user = {
          name: this.name,
          email: this.email,
          password: this.password
        }
       fetch('/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          user
        })
      })
      }
      else {
        alert("Something is wrong, check all fields")
      }
    }
  }
}

</script>

<style scoped>
</style>