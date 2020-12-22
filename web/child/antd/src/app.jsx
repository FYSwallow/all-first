import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './style/index.scss'
import routers from './router/index'

function App() {
    let routerlist = routers.map((item, index) => {
        return <Route path={item.path} component={item.component} key={index}/>
    })
    return (
        <Router>
            <Switch>
                {routerlist}
                {/* <Route path='' component={Index}/> */}
            </Switch>
        </Router>
    )
}

export default App