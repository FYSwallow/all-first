import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'
import { systemRouteList } from '../router/utils'

function UserLayout(props) {
    const routeMenu = systemRouteList.map((route) => {
        const { component: Component } = route
        return <Route
            path={route.path}
            key={route.path}
            render={props => {
                document.title = route.meta.title
                return <Component {...props} ></Component>
            }}
        ></Route>
    })
    return (
        <Switch>
            {routeMenu}
            <Redirect from='/system' exact to="/system/login" />
        </Switch>
    )
}

export default UserLayout