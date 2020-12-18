import React from 'react'

// 状态管理组件
import { AppStore } from './store/index'
// 路由组件
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom';

// 导入组件文件
import Permission from './permission'
import AuthLogin from './authLogin'
import Layout from './layout/index'
import Login from './views/login/index'

function App() {
    return (
        <AppStore>
            <Router>
                <Switch>
                    {/* 权限控制,默认登录/app页面,如果存在用户信息,则重定向至主界面 */}
                    <AuthLogin path="/login" component={Login} />
                    {/* 权限控制,默认登录/app页面,如果不存在用户信息,则重定向至登录界面 */}
                    <Permission path="/" component={Layout}></Permission>
                    <Redirect from="/*" to="/" />
                </Switch>
            </Router>
        </AppStore>
    )
}

export default App