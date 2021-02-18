import React from 'react'
import { useSelector } from 'react-redux'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'

import { businessMenuList } from '../../router/utils'
import { isExternal } from '../../utils/validate'
const { SubMenu, Item } = Menu;

function SideBar(props) {
    const pathname = props.location.pathname
    //获取菜单列表 

    const { menuList, sidebar } = useSelector(({ userReducer, appReducer }) => (
        {
            menuList: userReducer.menuList,
            sidebar: appReducer.sidebar
        }
    ))
    function renderMenu(routeList) {
        return routeList.map(route => {
            if (!menuList.includes(route.path)) return null
            if (route.children && route.children.length > 0) {
                // 单个菜单扁平化处理
                if (hasOneShowingChild(route.children)) {
                    if (route.children[0].children) {
                        return renderMenu([{ ...route, ...route.children[0] }])
                    }
                    return renderMenu([{ ...route, ...route.children[0], children: [] }])
                }
                return (
                    <SubMenu key={route.path} icon={route.icon ? <route.icon /> : null} title={route.meta.title}>
                        {renderMenu(route.children)}
                    </SubMenu>
                )
            }
            return (
                <Item key={route.path} icon={route.icon ? <route.icon /> : null} onClick={props.hide}>
                    {isExternal(route.path) ?
                        // eslint-disable-next-line jsx-a11y/anchor-has-content
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a href={route.path} target='_blank'>{route.meta.title}</a>
                        : <Link to={route.path}>{route.meta.title}</Link>
                    }
                </Item>
            )
        })
    }

    function getOpenKey() {
        let openKey = []
        businessMenuList.forEach(item => {
            if (item.children) {
                // 查找一个与当前请求路径匹配的子Item
                const cItem = item.children.find(cItem => cItem.key === pathname)
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
                selectedKeys={[pathname]}
                mode="inline"
                theme="dark"
                inlineCollapsed={sidebar.collapsed}
            >
                {renderMenu(businessMenuList)}
            </Menu>
        </div>
    );
}

export default withRouter(SideBar)