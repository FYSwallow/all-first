import React from 'react'
import { Redirect } from 'react-router-dom'

import {
    LineChartOutlined,
    PicRightOutlined,
    PieChartOutlined,
    MailOutlined,
    TableOutlined,
    AppstoreOutlined,
    DragOutlined
} from '@ant-design/icons'

import Dashboard from '../views/dashboard/index'
import H5 from '../views/H5/index' // 语义化
import Drag from '../views/drag/index'
import Charts from '../views/charts/index'
import Semantic from '../views/charts/index'
import Table from '../views/charts/index'
import AppConfig from '../views/app/config'
import AppSpecial from '../views/app/special'
import asyncComponent from './../components/aysncComponent';

// 导入组件文件
// import Permission from './permission'
// import AuthLogin from './authLogin'
// import Layout from './layout/index'
import Login from '../views/login/index'

const routes = [
    {
        title: '首页',
        path: '/system',
        component: asyncComponent(() => import('../layout/userLayout')),
        redirect: '/system/login',
        meta: {
            title: '系统路由',
        },
        children: [
            {
                title: '登录',
                path: '/system/login',
                component: Login,
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
        component: Dashboard,
        ridirect: '/dashboard',
        meta: {
            title: '系统',
        },
        children: [
            {
                title: '首页',
                path: '/dashboard',
                icon: PieChartOutlined,
                component: Dashboard,
            },
            {
                title: 'h5',
                path: '/h5',
                icon: PicRightOutlined,
                component: H5,
            },
            {
                title: 'UI组件',
                path: '/ui',
                icon: AppstoreOutlined,
                children: [ // 子菜单列表
                    {
                        title: '应用管理',
                        path: '/config',
                        component: AppConfig,
                    },
                    {
                        title: '专题管理',
                        path: '/special',
                        component: AppSpecial,
                    }
                ]
            },
            {
                title: '拖拽',
                path: '/drag',
                icon: DragOutlined,
                component: Drag,
            },
            {
                title: 'App配置管理',
                path: '/app',
                icon: AppstoreOutlined,
                children: [ // 子菜单列表
                    {
                        title: '应用管理',
                        path: '/config',
                        component: AppConfig,
                    },
                    {
                        title: '专题管理',
                        path: '/special',
                        component: AppSpecial,
                    }
                ]
            },
            {
                title: '语义化布局',
                path: '/semantic',
                icon: LineChartOutlined,
                component: Semantic,
            },

            {
                title: '图标',
                path: '/charts',
                icon: PieChartOutlined,
                component: Charts,
            },
            {
                title: '数据管理',
                path: '/database',
                icon: MailOutlined,
                children: [ // 子菜单列表
                    {
                        title: '商铺管理',
                        path: '/shop',
                        component: Charts,
                    },
                    {
                        title: '食品管理',
                        path: '/food',
                        component: Charts,
                    }
                ]
            },
            {
                title: '表格',
                path: '/table',
                icon: TableOutlined,
                component: Table,

            },
        ]
    }
]

export default routes