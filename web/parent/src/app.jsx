import React from 'react'

// 状态管理组件
import { AppStore } from './store/index'
// 路由组件
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import { layoutRouteList } from './router/utils'

function App() {
    return (
        <AppStore>
            <Router>
                <Switch>
                    {renderRoutes(layoutRouteList)}
                </Switch>
            </Router>
        </AppStore>
    )
}

export default App