import React from 'react'

// 路由组件
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { layoutRouteList } from './router/utils'

const renderRoutes = (routes) => {
    return routes.map(route => {
        const { component: Component } = route
        return <Route
            path={route.path}
            key={route.path}
            render={props => {
                document.title = route.meta.title
                return  <Component {...props} ></Component>
            }}
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