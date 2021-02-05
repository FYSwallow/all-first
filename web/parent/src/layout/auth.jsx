import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../utils/auth'

function Auth(props) {
    if (!getToken()) {
        return (
            <Redirect
                to={`/system/login`}
            />
        )
    }
    return <>{props.children}</>
}

export default Auth