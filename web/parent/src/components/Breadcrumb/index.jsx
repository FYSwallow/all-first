import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import { businessRouteListTotal } from '../../router/utils'

function MyBreadcrumb(props) {
    const { pathname } = useLocation()
    // 当前路由栈信息
    const [currentRoute, setCurrentRoute] = useState([])
    useEffect(() => {
        // 获取当前路由信息
        function getCurrentLocation() {
            const pathArr = pathname.split('/').filter(i => i)
            const currentPatharr = pathArr.map((item, index) => {
                const url = `/${pathArr.slice(0, index + 1).join('/')}`
                return url
            })

            let result = []
            businessRouteListTotal.forEach(item => {
                if (currentPatharr.includes(item.path)) {
                    result.push(item)
                }
            })
            if (pathname !== '/dashboard') {
                result.unshift(businessRouteListTotal.find(item => item.path === '/dashboard'))
            }
            setCurrentRoute(result)
        }
        getCurrentLocation()
    }, [pathname])

    return (
        <Breadcrumb>
            {currentRoute.map(item => {
                return (
                    <Breadcrumb.Item key={item.path}>
                        {
                            pathname === '/dashboard' ? item.meta.title : <Link to={item.path}>{item.meta.title}</Link>
                        }
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    )
}

export default MyBreadcrumb