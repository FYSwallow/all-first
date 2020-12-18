import React, {useContext} from 'react'

import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { AppInfo } from '../../store/index'

import menuConfig from '../../config/menuConfig'

const { SubMenu, Item } = Menu;

function SideBar(props) {
    const {state } = useContext(AppInfo)
    const path = props.location.pathname
    const {sidebar} = state
    //获取菜单列表 
    function getMenuNodes(list) {
        return list.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} icon={item.icon? <item.icon />: null} title={item.title}>
                        {getMenuNodes(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Item key={item.key} icon={item.icon? <item.icon />: null} onClick={props.hide}>
                        <Link to={item.key}>{item.title}</Link>
                    </Item>
                )
            }
        })
    }

    //获取展开项
    function getOpenKey(){
        let openKey = []
        menuConfig.forEach(item => {
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
    
    return (
        <div className='sidebar'>
            <Menu
                defaultOpenKeys={getOpenKey()}
                selectedKeys={[path]}
                mode="inline"
                theme="dark"
                inlineCollapsed={sidebar.collapsed}
            >
                {getMenuNodes(menuConfig)}
            </Menu>
        </div>
    );
}

export default withRouter(SideBar);