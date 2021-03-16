import React from 'react';
import { useSelector } from 'react-redux'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FontSizeOutlined
} from '@ant-design/icons';

import MyBreadcrumb from '@/components/Breadcrumb/index'
import ScreenFull from '@/components/screenfull/index'
import MyDropDown from '@/components/dropDown/index'
import HeaderSearch from '@/components/search/index.jsx'
import avatar from '@/assets/images/头像1.png'

console.log(window)
function NavHeader(props) {
    const { sidebar, device } = useSelector(({ appReducer }) => ({ sidebar: appReducer.sidebar, device: appReducer.device }))
    return (
        <div className="navheader clearfix">
            <div className="navheader-left">
                <div onClick={props.toggle} className="hamburger-container">
                    {sidebar.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
                <div className="breadcrumb-container">
                    <MyBreadcrumb />
                </div>
            </div>
            <div className="navheader-right">
                {
                    device === 'mobile' ? null : (
                        <>
                            <HeaderSearch className='right-menu-item'/>
                            <ScreenFull className='right-menu-item'/>
                            <FontSizeOutlined className='right-menu-item'></FontSizeOutlined>
                        </>
                    )
                }
                <div className="dropdown-container">
                    <MyDropDown/>
                </div>
            </div>
        </div>
    );
}

export default NavHeader;