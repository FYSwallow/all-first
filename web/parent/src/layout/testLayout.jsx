import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'
import { testRouteList } from '../router/utils'

function TestLayout(props) {
    const routeMenu = testRouteList.map((item) => {
        return <Route path={item.path} component={item.component} key={item.path}></Route>
    })
    return (
        <Switch>
            {routeMenu}
            <Redirect from='/test' exact to="/test/test-1"/>
        </Switch>
    )
}

export default TestLayout