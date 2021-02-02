import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import router from './router/index'

const routes = [
    ...router
]

function App () {
    return (
        <Router>
            <Switch>
                {renderRoutes(routes)}
            </Switch>
        </Router>
    )
}

export default App
