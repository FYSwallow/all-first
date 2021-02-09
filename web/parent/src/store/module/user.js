import { getToken } from './../../utils/auth';
import { privateRoute } from './../../router/config';
import { setToken } from '../../utils/auth'
import { businessRouteList } from '../../router/utils'

const SET_TOKEN = "SET_TOKEN" // 设置token
const SET_MENULIST = "SET_MENULIST" // 设置token

const initUserInfo = {
    token: getToken(),
    avatar: undefined,
    account: '',
    mobile: '',
    role: 0,
    id: 0,
    menuList: []
}

export const saveToken = (token) => ({ type: SET_TOKEN, data: token })
export const setMenuList = (list) => ({ type: SET_MENULIST, data: list })

// 异步登录
export const reqLogin = (user) => {
    const { username } = user
    return async dispatch => {
        // 实际情况用ajax获取    
        setToken(username)
        dispatch(saveToken(username))
    }
}

// 获取用户权限列表
export const reqUserMenu = (token) => {
    return async dispatch => {
        let menuList = []
        if (token) {
            menuList = privateRoute[token].permission
            businessRouteList.forEach(item => {
                menuList.push(item.path)
            })
        }
        dispatch(setMenuList(menuList))
    }
}

const userReducer = (state = initUserInfo, action) => {
    switch (action.type) {
        // 设置token值
        case SET_TOKEN:
            return Object.assign(state, { token: action.data })
        case SET_MENULIST:
            return Object.assign(state, { menuList: action.data })
        default:
            return { ...state }
    }
}

export default userReducer