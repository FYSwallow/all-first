import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppMain, NavHeader, SideBar } from './components/index'
import RightPanel from '../components/rightPanel/index'
import Auth from './auth'
import { toggleDevice, closeSideBar } from '../store/module/app'

const { body } = document
const WIDTH = 750

function isMobile() {
    const rect = body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
}

function BaseLayout(props) {
    const { device, sidebar } = useSelector(({ appReducer }) => (
        {
            device: appReducer.device,
            sidebar: appReducer.sidebar,
        }
    ))
    const { collapsed, withoutAnimation } = sidebar
    const dispatch = useDispatch()

    // 窗口大小缩放
    useEffect(() => {
        if (isMobile() && device !== 'mobile') {
            toggleDevice({ device: 'mobile' })
            closeSideBar({ collapsed: false, withoutAnimation: true })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // 窗口缩放
    const handleResize = useCallback(
        () => {
            dispatch(toggleDevice({ device: isMobile() ? 'mobile' : 'pc' }))
            if (isMobile()) {
                dispatch(closeSideBar({ collapsed: true, withoutAnimation: true }))
            }
        },
        [dispatch]
    )
    // 小屏幕下侧边栏的隐藏与显示
    const handleChangeSideBar = useCallback(
        () => dispatch(closeSideBar({ collapsed: true, withoutAnimation: false })),
        [dispatch]
    )

    const toggleSidebar = useCallback(
        () => dispatch(closeSideBar({ collapsed: !collapsed, withoutAnimation: false })),
        [collapsed, dispatch]
    )

    return (
        <Auth {...props}>
            <div className={["app-wrapper", collapsed ? 'hideSidebar' : 'openSidebar', withoutAnimation ? "withoutAnimation" : "", device === 'mobile' ? 'mobile-app' : 'pc-app'].join(' ')}>
                {device === 'mobile' && !collapsed ? <div className="drawer-bg" onClick={handleChangeSideBar} /> : null}
                {/* 在h5窗口大小下,始终显示为 */}

                <SideBar />
                <div className="main-container">
                    <div className='fixed-header'>
                        <NavHeader toggle={toggleSidebar} />
                    </div>
                    <AppMain />
                </div>
                <RightPanel />
            </div>
        </Auth>

    );
}
export default BaseLayout
