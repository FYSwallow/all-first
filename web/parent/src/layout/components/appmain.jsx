import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../auth'
import { businessRouteList } from '../../router/utils'
// import userAuth from '../../store/user.js'
import { getToken } from '../../utils/auth'
function renderRoutes(route) {
    const { component: Component } = route
    // if (hasMenuAuth(route)) {
        return (
            <Route
                key={route.path}
                path={route.path}
                render={props => {
                    return (
                        <Auth {...props}>
                            <Component {...props}></Component>
                        </Auth>
                    )
                }
                }
            >

            </Route>
        )
    // }
    // return null
}

// function hasMenuAuth(route) {
//     let role = getToken()
//     if (!role) {
//         console.log(123)
//     }
//     console.log(role)
//     if (userAuth[role].permission.includes(route.path)) return true
//     return false
// }

function AppMain(props) {
    return (
        <div className="app-main" id="subapp-viewport">
            <Switch>
                {
                    businessRouteList.map(route => {
                        return renderRoutes(route)
                    })
                }
                {/* 没有则跳转到404 */}
                <Redirect from='/' exact to='/dashboard' />
            </Switch>
        </div>
    );
}

export default AppMain;