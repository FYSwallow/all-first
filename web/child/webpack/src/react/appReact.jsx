import React, { lazy, Suspense } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
const One = lazy(() => import('./view/one'))
const Two = lazy(() => import('./view/two'))
export default function App() {
    return (
        <HashRouter>
            <Suspense fallback="加载中">
                <Switch>
                    <Route path='/one' component={One}></Route>
                    <Route path='/two' component={Two}></Route>
                </Switch>
            </Suspense>
        </HashRouter>
    )
}
