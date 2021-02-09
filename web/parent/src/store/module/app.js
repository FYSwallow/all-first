export const UPDATE_DEVICE = "UPDATE_DEVICE" // 计算窗口大小
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR" // 侧边栏隐藏与显示
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR" // 侧边栏折叠与展开

const initAppInfo = {
    device: 'pc',
    sidebar: {
        collapsed: false, // false代表展开, true代表只显示图标
        withoutAnimation: false
    }
}

export const toggleDevice = (data) => ({ type: UPDATE_DEVICE, data })
export const toggleSideBar = (data) => ({ type: TOGGLE_SIDEBAR, data })
export const closeSideBar = (data) => ({ type: CLOSE_SIDEBAR, data })

const appReducer = (state = initAppInfo, action) => {
    switch (action.type) {
        // 菜单栏折叠
        case UPDATE_DEVICE:
            return Object.assign(state, action.data)
        // 菜单栏显示与隐藏
        case CLOSE_SIDEBAR:
            return {...state, sidebar: {...action.data}}
        default:
            return state
    }
}

export default appReducer