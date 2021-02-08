import {
    PicRightOutlined,
    PieChartOutlined,
    TableOutlined,
    DragOutlined
} from '@ant-design/icons'

import Dashboard from '../views/dashboard/index'
import H5 from '../views/H5/index' // 语义化
import Drag from '../views/drag/index'
import asyncComponent from './../components/aysncComponent';

import UserLayout from '../layout/userLayout'
import Layout from '../layout/baseLayout'

const routes = [
    {
        path: '/system',
        component: UserLayout,
        meta: {
            title: '系统路由',
        },
        children: [
            {
                title: '登录',
                path: '/system/login',
                component: asyncComponent(() => import('../views/login/index')),
                meta: {
                    title: '用户登录',
                },
            },
            {
                title: '注册',
                path: '/system/register',
                component: asyncComponent(() => import('../views/login/index')),
                meta: {
                    title: '用户注册',
                },
            },
        ]
    },
    {
        path: '/',
        component: Layout,
        meta: {
            title: '主页',
        },
        children: [
            {
                path: '/dashboard',
                icon: PieChartOutlined,
                component: Dashboard,
                meta: {
                    title: '首页',
                },
            },
            {
                path: '/nested',
                icon: PieChartOutlined,
                component: Dashboard,
                meta: {
                    title: '嵌套',
                },
                children: [
                    {
                        path: '/nested/menu1',
                        component: Dashboard,
                        meta: {
                            title: '层级1',
                        },
                        children: [
                            {
                                path: '/nested/menu1/menu1-1',
                                component: Dashboard,
                                meta: {
                                    title: '层级1-1',
                                },
                                children: [
                                    {
                                        path: '/nested/menu1/menu1-1/menu1-1-1',
                                        component: Dashboard,
                                        meta: {
                                            title: '层级1-1-1',
                                        },
                                    },
                                    {
                                        path: '/nested/menu1/menu1-1/menu1-1-2',
                                        component: Dashboard,
                                        meta: {
                                            title: '层级1-1-2',
                                        },
                                    }
                                ]
                            },
                            {
                                path: '/nested/menu1/menu1-2',
                                component: Dashboard,
                                meta: {
                                    title: '层级1-2',
                                },
                            }
                        ]
                    },
                    {
                        path: '/nested/menu2',
                        component: Dashboard,
                        meta: {
                            title: '层级2',
                        },
                    }
                ]
            },
            {
                path: '/h5',
                icon: PicRightOutlined,
                component: H5,
                meta: {
                    title: 'h5',
                },
            },
            {
                path: '/drag',
                icon: DragOutlined,
                component: Drag,
                meta: {
                    title: '拖拽',
                },
            },
            {
                path: '/error',
                meta: {
                    title: '异常页面',
                },
                icon: TableOutlined,
                component: asyncComponent(() => import('../views/userSetting/index')),
                children: [
                    {
                        path: '/error/404',
                        meta: {
                            title: '404页面'
                        },
                        component: asyncComponent(() => import('../views/error/404'))
                    }
                ]
            },
            {
                path: '/user',
                meta: {
                    title: '权限设置',
                },
                icon: TableOutlined,
                component: asyncComponent(() => import('../views/userSetting/index')),
            },
        ]
    }
]

export const privateRoute = {
    'admin': {
        permission:  ["/dashboard", "/nested",'/h5', "/nested/menu1", "/nested/menu2", "/nested/menu1/menu1-1", "/nested/menu1/menu1-2", "/nested/menu1/menu1-1/menu1-1-1", "/nested/menu1/menu1-1/menu1-1-2", "/drag", "/error", "/error/404", "/user"]
    },
    'guest': {
        permission: ["/nested", "/nested/menu1", "/nested/menu2", "/nested/menu1/menu1-1", "/nested/menu1/menu1-2", "/nested/menu1/menu1-1/menu1-1-1", "/nested/menu1/menu1-1/menu1-1-2", "/dashboard", "/error", "/error/404"]
    }
}
export default routes