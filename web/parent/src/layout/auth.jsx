import React, { useEffect, useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { reqUserMenu } from '../store/module/user'

function Auth(props) {
    const { pathname, search } = props.location
    const [compontent, setComponent] = useState(null)

    async function getComponent() {
        let renderNode = null
        const role = props.token
        if (!role) {
            renderNode = (<Redirect
                to={`/system/login?redirectUrl=${pathname + search}`}
            />)
        } else {
            const hasPermission = props.menuList && props.menuList.length > 0
            if (!hasPermission) {
                props.reqUserMenu(role)
            }
            renderNode = (<>{props.children}</>)
        }
        setComponent(renderNode)
    }

    useEffect(() => {
        getComponent()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return compontent
}

export default connect(
    ({ userReducer }) => (
        {
            menuList: userReducer.menuList,
            token: userReducer.token
        }
    ),
    { reqUserMenu },
)(withRouter(Auth))