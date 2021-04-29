import React, { lazy, Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

const One = lazy(() => import("./views/one"));
const Two = lazy(() => import("./views/two"));
function App() {
    return (
        <HashRouter>
            <Suspense fallback="加载中。。。">
                <Switch>
                    <Route path="/one" component={One} />
                    <Route path="/two" component={Two} />
                </Switch>
            </Suspense>
        </HashRouter>
    );
}

export default App;
