import routes from './config'

/**
 * 根据不同场景获取对应的路由列表
 * @param {*} routerList 路由列表
 * @param {*} deep 是否需要深层次转化
 * @param {*} auth 是否需要检查授权
 */
export function flatterRoute(routerList, deep, auth) {
    const result = []
    routerList.forEach((item, index) => {
        result.push({
            ...item,
            auth: typeof item.auth !== 'undefined' ? item.auth : auth
        })

        if (item.children && deep) {
            result.push(...flatterRoute(item.children, deep, auth))
        }
    })

    return result
}

/**
 * 获取第一层路由, Layout和UserLayout
 * @returns
 */

function getLayoutRoutelist() {
    return flatterRoute(routes, false, false)
}

/**
 * 获取用户登录以及注册页面路由
 * @returns
 */
function getSystemRoutelist() {
    const routeList = routes.filter((item) => item.path === '/system')
    return flatterRoute(routeList, true, false)
}

/**
 * 获取业务路由
 * @returns
 */
function getBusinessRoutelist() {
    const routeList = routes.filter((item) => item.path === '/')
    return flatterRoute(routeList, false, false)
}

export const layoutRouteList = getLayoutRoutelist()
export const systemRouteList = getSystemRoutelist()
export const businessRouteList = getBusinessRoutelist()

export const getPageTitle = (routeList, pathname) => {
    const result = routeList.find(child => child.path === pathname)
    return result = result? result.meta.title: 'react-admin'
}