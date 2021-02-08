import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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
    const { device, collapsed, withoutAnimation, toggleDevice, closeSideBar } = props
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
    })
    // 窗口缩放
    const handleResize = () => {
        toggleDevice({ device: isMobile() ? 'mobile' : 'pc' })
        if (isMobile()) {
            closeSideBar({ collapsed: true, withoutAnimation: true })
        }
    }
    // 小屏幕下侧边栏的隐藏与显示
    const handleChangeSideBar = () => {
        closeSideBar({ collapsed: true, withoutAnimation: false })
    }

    const toggleSidebar = () => {
        closeSideBar({ collapsed: !collapsed, withoutAnimation: false })
    }

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
export default connect(
    ({ appReducer }) => (
        {
            device: appReducer.device,
            collapsed: appReducer.collapsed,
            withoutAnimation: appReducer.withoutAnimation
        }
    ),
    { toggleDevice, closeSideBar }
)(BaseLayout)
