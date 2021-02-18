import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { layoutRouteList } from './router/utils'

const renderRoutes = (route) => {
    const { component: Component } = route
    return <Route
        key={route.path}
        path={route.path}
        render={props => {
            document.title = route.meta.title
            return <Component {...props} ></Component>
        }}
    ></Route>
}

function App() {
    return (
        <Router>
            <Switch>
                {layoutRouteList.map(route => {
                    return renderRoutes(route)
                })}
            </Switch>
        </Router>
    )
}

export default App