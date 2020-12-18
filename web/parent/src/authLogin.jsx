import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getToken } from './utils/auth'

//如果存在token则跳转到主界面
function AuthLogin(props) {
    const { component: Component, ...rest } = props

    return (<Route {...rest} render={props => {
        return getToken() ?<Redirect to={"/"}/>: <Component {...props} />
    }}/>)
}

export default AuthLogin