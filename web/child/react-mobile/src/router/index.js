import asyncComponent from './../components/asyncComponent'
const Home = asyncComponent(() => import('../pages/index'))
const Test = asyncComponent(() => import('../pages/test'))

const router = [
    {
        path: '/',
        exact: true,
        meta: {
            title: '首页'
        },
        component: Home
    },
    {
        path: '/test',
        exact: true,
        meta: {
            title: '测试'
        },
        component: Test
    }
]

export default router
