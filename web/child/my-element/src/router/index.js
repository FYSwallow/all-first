import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            category: 'layout'
        },
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            category: 'component'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
