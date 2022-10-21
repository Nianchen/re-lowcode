import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter)
import Welcome from '../Views/WelCome'
import home from '../Views/AppHome'
const routes = [
    {
        path: '/',
        redirect: '/welcome'
      },
      
    {
        path:'/welcome',
        component:Welcome
    },
    {
        path:"/home",
        component:home
    }
]

const router = new VueRouter({
    routes,
    mode:"hash"
})

export default router