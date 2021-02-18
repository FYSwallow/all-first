import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import { saveToken, reqUserMenu } from './../../store/module/user';
import { removeToken } from './../../utils/auth';
import avatar from '../../assets/images/头像1.png'

function MyDropDown(props) {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" onClick={logOut}>Log Out</Menu.Item>
        </Menu>
    );
    function logOut() {
        props.saveToken('')
        props.reqUserMenu()
        removeToken()
        props.history.replace('/system/login')
    }
    return (
        <Dropdown overlay={menu}>
            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="" /> 
                <CaretDownOutlined />
            </span>
        </Dropdown>
    )
}

export default connect(
    () => ({}),
    { saveToken, reqUserMenu }
)(withRouter(MyDropDown))