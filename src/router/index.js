import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter)
import Welcome from '../Views/WelCome'
import home from '../Views/AppHome'
import preview from '../Views/PreView.vue'
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
        component:home,
        meta: {
            keepAlive: true, //此组件不需要被缓存
            }
    },
    {
        path:"/preview",
        component:preview
    }
]

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router