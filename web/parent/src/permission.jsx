import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getToken } from './utils/auth'

function Permission(props) {
    const { component: Component, ...rest } = props
    const historyPathname = props.location.pathname
    // render Props 解决了高阶组件命名问题,等...
    return (<Route {...rest} render={props => {
        return getToken() ?<Component {...props} />: (historyPathname === '/' ?<Redirect to={"/login"}/>: <Redirect to={`/login?redirect=${historyPathname}`}/> )
    }}/>)
}

export default Permission