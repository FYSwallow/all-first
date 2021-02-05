import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { systemRouteList } from '../router/utils'

function UserLayout(props) {
    const routeMenu = systemRouteList.map((item) => {
        return <Route path={item.path} component={item.component} key={item.path}></Route>
    })
    return (
        <Switch>
            {/* {renderRoutes(systemRouteList)} */}
            {routeMenu}
            <Redirect from='/system' exact to="/system/login"/>
        </Switch>
    )
}

export default UserLayout