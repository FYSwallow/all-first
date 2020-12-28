import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

// 不需要经过鉴权的路由
export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        hidden: 'true', // 不显示在导航菜单中
        component: () => import('@/views/login/index')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                meta: {title: 'Dashboard'}
            }
        ]
    },
    {
        path: '/im',
        component: Layout,
        redirect: '/im/index',
        children: [
            {
                path: 'index',
                name: 'IM聊天',
                component: () => import('@/views/dashboard/index'),
                meta: {title: 'IM聊天'}
            }
        ]
    },
    {
        path: '/h5drag',
        component: Layout,
        redirect: '/h5drag/index',
        children: [
            {
                path: 'index',
                name: 'H5',
                component: () => import('@/views/dashboard/index'),
                meta: {title: 'H5拖拽'}

            }
        ]
    }
]

// 需要经过鉴权的路由

export const asyncRoutes = [
    
]

const router = new VueRouter({
    routes: constantRoutes
})

export default router
