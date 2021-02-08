import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { businessRouteList } from '../../router/utils'

function renderRoutes(route) {
    const { component: Component } = route
    return (
        <Route
            key={route.path}
            path={route.path}
            render={props => {
                document.title = route.meta.title
                return (
                    <Component {...props}></Component>
                )
            }}
        />
    )
}

function AppMain(props) {
    return (
        <div className="app-main" id="subapp-viewport">
            <Switch>
                {
                    businessRouteList.map(route => {
                        if (props.menuList.includes(route.path)) return null
                        return renderRoutes(route)
                    })
                }
                {/* 没有则跳转到404 */}
                <Redirect from='/' exact to='/dashboard' />
            </Switch>
        </div>
    );
}

export default connect(
    ({ userReducer }) => (
        {
            menuList: userReducer.menuList,
        }
    ),
    { },
) (AppMain);