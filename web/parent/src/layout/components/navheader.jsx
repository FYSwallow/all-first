import React from 'react';
import { useSelector } from 'react-redux'
import {
    SearchOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FontSizeOutlined
} from '@ant-design/icons';

import MyBreadcrumb from '../../components/Breadcrumb/index'
import MyDropDown from '../../components/dropDown/index'
import avatar from '../../assets/images/头像1.png'

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
                            <SearchOutlined className='right-menu-item'></SearchOutlined>
                            <FullscreenOutlined className='right-menu-item'></FullscreenOutlined>
                            <FullscreenExitOutlined className='right-menu-item'></FullscreenExitOutlined>
                            <FontSizeOutlined className='right-menu-item'></FontSizeOutlined>
                        </>
                    )
                }
                <div className="avatar right-menu-item">
                    <img src={avatar} alt="" />
                </div>
                <div className="user-menu right-menu-item">
                    <MyDropDown />
                </div>
            </div>
        </div>
    );
}

export default NavHeader;