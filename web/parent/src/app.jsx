import React from 'react'

// 状态管理组件
import { AppStore } from './store/index'
// 路由组件
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { layoutRouteList } from './router/utils'

const routeList = layoutRouteList.map(route => {
    return <Route
        path={route.path}
        component={route.component}
        key={route.path}
    ></Route>
})

function App() {
    return (
        <AppStore>
            <Router>
                <Switch>
                    {routeList}
                </Switch>
            </Router>
        </AppStore>
    )
}

export default App