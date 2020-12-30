import router from '@/router/index'
import store from '@/store/index'
import { getToken } from './utils/auth';

router.beforeEach(async function (to, form, next) {
    const hasToken = getToken()

    console.log(!!hasToken)
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if (hasRoles) {
                next()
            } else {
                const { roles } = await store.dispatch('user/getInfo')

                // 获取当前用户角色拥有的权限,并动态添加路由
                const accessRoles = await store.dispatch('permission/generateRoutes', roles)
                
                router.addRoutes(accessRoles)

                next()
            }
        }
    } else {
        const whiteList = ['/login']
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: `/login?redirect=${to.path}` })
        }
    }
})