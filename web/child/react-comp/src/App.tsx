import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "./router/index";
import { RouteProps } from "./router/index";

const renderRoutes = (routes: RouteProps[]):any => {
    return routes.map((route) => {
        const { component: Component } = route;
        return (
            <Route
                key={route.path}
                path={route.path}
                render={(props) => {
                    document.title = route.meta.title;
                    return (
                        <Suspense fallback={"加载中。。。"}>
                            <Component {...props}></Component>
                        </Suspense>
                    );
                }}
            ></Route>
        );
    });
};

function App() {
    return (
        <HashRouter>
            <Switch>{renderRoutes(routes)}</Switch>
        </HashRouter>
    );
}

export default App;
