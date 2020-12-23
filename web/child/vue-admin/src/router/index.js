import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'

Vue.use(VueRouter)

// 不需要经过鉴权的路由
export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index')
    },
    {
        path: '/',
        component: Home,
        name: 'About',
        meta: {
            category: 'component'
        },
    }
]

const router = new VueRouter({
    routes: constantRoutes
})

export default router