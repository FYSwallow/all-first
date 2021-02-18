import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { systemRouteList } from '../router/utils'

function UserLayout(props) {
    const renderRoute = (route) => {
        const { component: Component } = route
        return <Route
            path={route.path}
            key={route.path}
            exact
            render={props => {
                document.title = route.meta.title
                if (route.redirect) {
                    return <Redirect to={route.redirect} />
                }
                return <Component {...props} ></Component>
            }}
        ></Route>
    }
    console.log(systemRouteList)
    return (
        <Switch>
            {systemRouteList.map(route => {
                return renderRoute(route)
            })}
        </Switch>
    )
}

export default UserLayout