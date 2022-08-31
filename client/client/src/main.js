import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import RegisterForm from './components/RegisterForm.vue';
import LoginForm from './components/LoginForm.vue';

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: RegisterForm},
        {path: '/login', component: LoginForm}

    ]
})

app.use(router)

app.mount('#app')