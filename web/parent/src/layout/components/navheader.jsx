import React from 'react';
import { useSelector } from 'react-redux'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

import MyBreadcrumb from '../../components/Breadcrumb/index'
import MyDropDown from '../../components/dropDown/index'
import avatar from '../../assets/images/头像1.png'

function NavHeader(props) {
    const { sidebar } = useSelector(({ appReducer }) => ({ sidebar: appReducer.sidebar }))
    return (
        <div className="navheader">
            <div className="navheader-left">
                <div onClick={props.toggle} className="navIcon">
                    {React.createElement(sidebar.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </div>
                <div className="navlink">
                    <MyBreadcrumb />
                </div>
            </div>
            <div className="navheader-right">
                <div className="user-menu">
                    <MyDropDown />
                </div>
                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>
            </div>
        </div>
    );
}

export default NavHeader;