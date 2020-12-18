import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import {removeToken} from '../../utils/auth'

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
        removeToken()
        props.history.replace('/login')   
    }
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <CaretDownOutlined />
            </span>
        </Dropdown>
    )
}

export default withRouter(MyDropDown)