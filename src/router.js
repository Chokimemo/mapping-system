import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage
        }
    ]
})