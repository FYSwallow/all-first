import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../utils/auth'
import { privateRoute } from '../router/config'
function Auth(props) {
    const { pathname, search } = props.location
    const role = getToken()
    if (!role) {
        return (
            <Redirect
                to={`/system/login?redirectUrl=${pathname + search}`}
            />
        )
    }
    if (privateRoute[role].permission.includes(pathname)) {
        return <>{props.children}</>
    }
    return (<Redirect
        to={'/error/404'}
    />)
}

export default Auth