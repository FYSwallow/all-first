import React from 'react'

// 状态管理组件
import { AppStore } from './store/index'
// 路由组件
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { layoutRouteList } from './router/utils'

const renderRoutes = (routes) => {
    return routes.map(route => {
        const { component: Component } = route
        return <Route
            path={route.path}
            key={route.path}
            component={Component}
        ></Route>
    })
}

function App() {
    return (
        <AppStore>
            <Router>
                <Switch>
                    {renderRoutes(layoutRouteList)}
                </Switch>
            </Router>
        </AppStore>
    )
}

export default App