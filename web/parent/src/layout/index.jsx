import React, {useEffect, useContext } from 'react'
import { AppMain, NavHeader, SideBar } from './components/index'
import RightPanel from '../components/rightPanel/index'
import { AppInfo, UPDATE_SCREEN, CLOSE_SIDEBAR } from '../store/index'

const { body } = document
const WIDTH = 750

function isMobile() {
    const rect = body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
}

function BaseLayout(props) {
    const { state, dispatch } = useContext(AppInfo)
    const { screen, sidebar } = state
    const { collapsed, withoutAnimation } = sidebar
    // 窗口大小缩放
    useEffect(() => {
        if (isMobile() && screen !== 'mobile') {
            dispatch({ type: UPDATE_SCREEN, data: { screen: 'mobile' } })
            dispatch({ type: CLOSE_SIDEBAR, data: { sidebar: { collapsed: false, withoutAnimation: true } } })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    // 窗口缩放
    function handleResize() {
        dispatch({ type: UPDATE_SCREEN, data: { screen: isMobile() ? 'mobile' : 'pc' } })
        if (isMobile()) {
            dispatch({ type: CLOSE_SIDEBAR, data: { sidebar: { collapsed: true, withoutAnimation: true } } })
        }
    }
    // 小屏幕下侧边栏的隐藏与显示
    function closeSidebar() {
        dispatch({ type: CLOSE_SIDEBAR, data: { sidebar: { collapsed: true, withoutAnimation: false } } })
    }

    function toggleSidebar() {
        dispatch({ type: CLOSE_SIDEBAR, data: { sidebar: { collapsed: !collapsed, withoutAnimation: false } } })
    }

    return (
        <div>
            <div className={["app-wrapper", collapsed ? 'hideSidebar' : 'openSidebar', withoutAnimation ? "withoutAnimation" : "", screen === 'mobile' ? 'mobile-app' : 'pc-app'].join(' ')}>
                {screen === 'mobile' && !collapsed ? <div className="drawer-bg" onClick={closeSidebar} /> : null}
                {/* 在h5窗口大小下,始终显示为 */}
                <SideBar />
                <div className="main-container">
                    <div className='fixed-header'>
                        <NavHeader toggle={toggleSidebar} />
                    </div>
                    <AppMain />
                </div>
                <RightPanel/>
            </div>
        </div>
    );
}
export default BaseLayout
