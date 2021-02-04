import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import menuConfig from '../../router/config'

let menuList = []

function mapMenuList(list) {
    list.forEach(item => {
        if (item.children) {
            mapMenuList(item.children)
        } else {

            menuList.push(<Route path={item.key} component={item.component} key={item.key}></Route>)
        }
    })
    return menuList
}
function AppMain() {
    return (
        <div className="app-main" id="subapp-viewport">
            <Switch>
                <Redirect from='/' exact to='/dashboard' /> 
                {
                    mapMenuList(menuConfig)
                }
                {/* 没有则跳转到404 */}
                
            </Switch>
        </div>
    );
}

export default AppMain;