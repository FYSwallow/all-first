import { routes, asyncRoutes } from './config'
import { isExternal } from '../utils/validate'
/**
 * 根据不同场景获取对应的路由列表
 * @param {*} routerList 路由列表
 * @param {*} deep 是否需要深层次转化
 * @param {*} auth 是否需要检查授权
 */
export function flatterRoute(routerList, deep) {
    const result = []
    routerList.forEach((item, index) => {
        result.push(item)
        if (item.children && deep) {
            result.push(...flatterRoute(item.children, deep))
        }
    })

    return result
}

/**
 * 获取第一层路由, Layout和UserLayout
 * @returns
 */

function getLayoutRoutelist() {
    return flatterRoute(routes, false)
}

/**
 * 获取用户登录以及注册页面路由
 * @returns
 */
function getSystemRoutelist() {
    const route = routes.filter((item) => item.path === '/system')
    return flatterRoute(route, true)
}

/**
 * 获取业务路由
 * @returns
 */
function getBusinessRoutelist() {
    const route = routes.filter((item) => item.path === '/')
    return flatterRoute(route, true)
}
/**
 * 获取需要权限的业务路由
 * @returns
 */
function getAsyncBusinessRoutelist() {
    return flatterRoute(asyncRoutes, true)
}

/**
 * 测试页面路由
 */

function getTestRouteList() {
    const route = routes.find((item) => item.path === '/test')
    return flatterRoute(route.children, true)
}


/**
 * 获取业务路由菜单项
 * @returns
 */
function getBusinessMenulist() {
    const route = routes.find((item) => item.path === '/')
    return flatterRoute(route.children, false)
}
/**
 * 获取业务路由菜单项
 * @returns
 */
function getAsyncBusinessMenulist() {
    return flatterRoute(asyncRoutes, false)
}

/**
 * 获取树形组件需要的列表
 */
function getTreeMenuList(list) {
    return list.map(item => {
        const obj = {
            title: item.meta.title,
            key: item.path,
        }
        if (item.children) {
            Object.assign(obj, { children: getTreeMenuList(item.children) })
        }
        return obj
    })
}

export const layoutRouteList = getLayoutRoutelist()
export const systemRouteList = getSystemRoutelist()
export const businessRouteList = getBusinessRoutelist()
export const asyncBusinessRoutelist = getAsyncBusinessRoutelist()
export const businessRouteListTotal = [...getAsyncBusinessRoutelist(), ...getBusinessRoutelist() ]
export const testRouteList = getTestRouteList()
export const businessMenuList = [ ...getAsyncBusinessMenulist(), ...getBusinessMenulist()]
export const treeMenuList = getTreeMenuList(businessMenuList)

export const getPageTitle = (routeList, pathname) => {
    const result = routeList.find(child => child.path === pathname)
    return result = result ? result.meta.title : 'react-admin'
}

// 拆分路由列表
export const flatterMenuList = (list) => {
    const resultItem = []
    list.forEach((item) => {
        if (resultItem.includes(item) || isExternal(item)) return
        const itemArr = item.split('/')
        if (itemArr.length <= 2) {
            resultItem.push(item)
        } else {
            let preVal =''
            itemArr.forEach((val, index) => {
                if (index === 0) return
                preVal +=  '/' + val    
                if (resultItem.includes(preVal)) return
                resultItem.push(preVal)
            })
        }
    });
    return resultItem
}