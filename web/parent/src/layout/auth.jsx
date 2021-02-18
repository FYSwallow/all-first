import React, { useEffect, useState, useCallback } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reqUserMenu } from '../store/module/user'

function Auth(props) {
    const [compontent, setComponent] = useState(null)
    const { menuList, token, sidebar, device } = useSelector(({ userReducer, appReducer }) => (
        {
            menuList: userReducer.menuList,
            token: userReducer.token,
            sidebar: appReducer.sidebar,
            device: appReducer.device
        }
    ))
    const dispatch = useDispatch()

    const editNum = useCallback(
        () => dispatch(reqUserMenu(token)),
        [dispatch, token]
    )

    const { collapsed, withoutAnimation } = sidebar
    const { pathname, search } = useLocation()

    function getComponent() {
        let renderNode = null
        if (!token) {
            renderNode = (<Redirect
                to={`/system/login?redirectUrl=${pathname + search}`}
            />)
        } else {
            const hasPermission = menuList && menuList.length > 0
            if (!hasPermission) {
                editNum()
            }
            renderNode = (<>{props.children}</>)
        }
        setComponent(renderNode)
    }

    useEffect(() => {
        getComponent()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapsed, withoutAnimation, device])

    return compontent
}

export default Auth