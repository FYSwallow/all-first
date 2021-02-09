import React from 'react'

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
        <Router>
            <Switch>
                {renderRoutes(layoutRouteList)}
            </Switch>
        </Router>
    )
}

export default App