import React from 'react';
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { businessRouteListTotal } from '../../router/utils'

function renderRoutes(route) {
    const { component: Component } = route
    return (
        <Route
            key={route.path}
            path={route.path}
            exact
            render={props => {
                document.title = route.meta.title
                return  <Component {...props} ></Component>
            }}
        />
    )
}

function AppMain(props) {
    const { menuList } = useSelector(({ userReducer }) => ({
        menuList: userReducer.menuList,
    }))
    return (
        <div className="app-main" id="subapp-viewport">
            <Switch>
                {
                    businessRouteListTotal.map(route => {
                        if (!menuList.includes(route.path)) return null
                        return renderRoutes(route)
                    })
                }
                {/* 没有则跳转到404 */}
                <Redirect from='/' exact to='/dashboard' />
                <Redirect from='*' exact to='/error/404' />

            </Switch>
        </div>
    );
}

export default AppMain