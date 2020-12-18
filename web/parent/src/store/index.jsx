import React, { createContext, useReducer } from 'react'

// app的基本信息
export const AppInfo = createContext({})
export const UPDATE_SCREEN = "UPDATE_SCREEN" // 计算窗口大小
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR" // 侧边栏隐藏与显示
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR" // 侧边栏折叠与展开

const initAppInfo = {
    screen: 'pc',
    sidebar: {
        collapsed: false, // false代表展开, true代表只显示图标
        withoutAnimation: false
    } 
}

const reducer = (state, action) => {
    switch (action.type) {
        // 菜单栏折叠
        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, action.data)

        // 屏幕缩放
        case UPDATE_SCREEN:
            return   Object.assign({},state, action.data)
        
        // 菜单栏显示与隐藏
        case CLOSE_SIDEBAR:
            return  Object.assign({}, state, action.data)
        default:
            return state
    }
}

export const AppStore = props => {
    const [state, dispatch] = useReducer(reducer, initAppInfo)
    return (
        <AppInfo.Provider value={{state, dispatch}}>
            {props.children}
        </AppInfo.Provider>
    )
}
