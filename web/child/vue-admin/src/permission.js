import router from '@/router/index'
import store from '@/store/index'
import { getToken } from './utils/auth';

router.beforeEach(async function (to, form, next) {
    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            // if (true) {
            //     next()
            // } else {
            const { roles } = await store.dispatch('user/getInfo')

            // 获取当前用户角色拥有的权限,并动态添加路由
            const accessRoles = await store.dispatch('permission/generateRoutes', roles)
            
            router.addRoutes(accessRoles)
            console.log(router)
        }
    }
    next()

})