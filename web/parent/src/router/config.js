import {
    BankOutlined,
    PicRightOutlined,
    PieChartOutlined,
    TableOutlined,
    DragOutlined
} from '@ant-design/icons'

import Dashboard from '../views/dashboard/index'
import H5 from '../views/H5/index' // 语义化
import Drag from '../views/drag/index'
import TemplateEditor from '../views/template/index'
import asyncComponent from './../components/aysncComponent'

import UserLayout from '../layout/userLayout'
import Layout from '../layout/baseLayout'
import TestLayout from '../layout/testLayout'

export const routes = [
    {
        path: '/system',
        component: UserLayout,
        meta: {
            title: '系统路由',
        },
        redirect: '/system/login',
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
        path: '/test',
        component: TestLayout,
        meta: {
            title: '测试',
        },
        children: [
            {
                path: '/test/test-1',
                component: asyncComponent(() => import('../views/test/index')),
                meta: {
                    title: '测试redux',
                },
            },
            {
                path: '/test/test-2',
                component: asyncComponent(() => import('../views/test/test2')),
                meta: {
                    title: '测试redux-hooks',
                },
            }
        ]
    },
    {
        path: '/404',
        meta: {
            title: '404页面'
        },
        component: asyncComponent(() => import('../views/error/404'))
    },
    {
        path: '/',
        component: Layout,
        meta: {
            title: '主页',
        },
        redirect: '/dashboard',
        children: [
            {
                path: '/error',
                meta: {
                    title: '异常页面',
                },
                icon: TableOutlined,
                redirect: '/error/404',
                component: asyncComponent(() => import('../views/userSetting/user')),
                children: [
                    {
                        path: '/error/404',
                        meta: {
                            title: '404页面'
                        },
                        component: asyncComponent(() => import('../views/error/404')),
                    },
                    {
                        path: '/error/405',
                        meta: {
                            title: '405页面'
                        },
                        component: asyncComponent(() => import('../views/error/404')),
                    }
                ]
            }
        ]
    },
]

export const asyncRoutes = [
    {
        path: '/dashboard',
        icon: BankOutlined,
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
        redirect: '/nested/menu1',
        children: [
            {
                path: '/nested/menu1',
                component: Dashboard,
                meta: {
                    title: '层级1',
                },
                redirect: '/nested/menu1/menu1-1',
                children: [
                    {
                        path: '/nested/menu1/menu1-1',
                        component: Dashboard,
                        meta: {
                            title: '层级1-1',
                        },
                        redirect: '/nested/menu1/menu1-1/menu1-1-1',

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
        path: '/templateEditor',
        icon: DragOutlined,
        component: TemplateEditor,
        meta: {
            title: '编辑器',
        },
    },
    {
        path: '/permission',
        meta: {
            title: '权限设置',
        },
        redirect: '/permission/role',
        icon: TableOutlined,
        children: [
            {
                path: '/permission/role',
                meta: {
                    title: '角色管理',
                },
                component: asyncComponent(() => import('../views/userSetting/role')),

            },
            {
                path: '/permission/user',
                meta: {
                    title: '用户管理',
                },
                component: asyncComponent(() => import('../views/userSetting/user')),
            }
        ],
    },
    {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        icon: DragOutlined,
        meta: {
            title: '超链接'
        },
    },
]