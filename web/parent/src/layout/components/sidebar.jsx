import React, { useContext } from 'react'

import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { AppInfo } from '../../store/index'

import { businessMenuList } from '../../router/utils'
import { privateRoute } from '../../router/config'

const { SubMenu, Item } = Menu;

function SideBar(props) {
    const { state } = useContext(AppInfo)
    const path = props.location.pathname
    const { sidebar } = state
    //获取菜单列表 

    function renderMenu(routeList) {
        return routeList.map(route => {
           
            if (route.children) {
                // 单个菜单扁平化处理
                if (hasOneShowingChild(route.children)) {
                    return renderMenu(route.children)
                }
                return (
                    <SubMenu key={route.path} icon={route.icon ? <route.icon /> : null} title={route.meta.title}>
                        {renderMenu(route.children)}
                    </SubMenu>
                )
            }
            return (
                <Item key={route.path} icon={route.icon ? <route.icon /> : null} onClick={props.hide}>
                    <Link to={route.path}>{route.meta.title}</Link>
                </Item>
            )
        })
    }

    function getOpenKey() {
        let openKey = []
        businessMenuList.forEach(item => {
            if (item.children) {
                // 查找一个与当前请求路径匹配的子Item
                const cItem = item.children.find(cItem => cItem.key === path)
                // 如果存在, 说明当前item的子列表需要打开
                if (cItem) {
                    return openKey
                }
            }
        })
    }

    function hasOneShowingChild(children) {
        if (children.length === 1) {
            return true
        }
        return false
    }

    return (
        <div className='sidebar'>
            <Menu
                defaultOpenKeys={getOpenKey()}
                selectedKeys={[path]}
                mode="inline"
                theme="dark"
                inlineCollapsed={sidebar.collapsed}
            >
                {renderMenu(businessMenuList)}
            </Menu>
        </div>
    );
}

export default withRouter(SideBar);