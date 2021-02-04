import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { systemRouteList } from '../router/utils'
import Component from '../views/login/index'

function UserLayout(props) {
    return (
        <Switch>
            {renderRoutes(systemRouteList)}
            <Redirect to="/system/login" component={Component}/>
        </Switch>
    )
}

export default UserLayout