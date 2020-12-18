import React, {useContext} from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { AppInfo } from '../../store/index'

import MyBreadcrumb from '../../components/Breadcrumb/index'
import MyDropDown from '../../components/dropDown/index'
import avatar from '../../assets/images/头像1.png'

function NavHeader(props) {
    const { state } = useContext(AppInfo)
    const { toggle} = props
    return (
        <div className="navheader">
            <div className="navheader-left">
                <div onClick={toggle}  className="navIcon">
                    {React.createElement(state.sidebar.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </div>
                <div className="navlink">
                    <MyBreadcrumb/>
                </div>
            </div>
            <div className="navheader-right">
                <div className="user-menu">
                    <MyDropDown/>
                </div>
                <div className="avatar">
                    <img src={avatar} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default NavHeader;