import React, { lazy, ReactNode } from "react";

export interface MetaProps {
    title: string;
    icon?: ReactNode;
}
export interface RouteProps {
    path: string;
    component: any;
    meta: MetaProps;
}

const ButtonPage = lazy(() => import("../pages/button"));

export const routes: Array<RouteProps> = [
    {
        path: "/button",
        component: ButtonPage,
        meta: {
            title: "Button页面",
        },
    },
    {
        path: "/",
        component: ButtonPage,
        meta: {
            title: "Button页面",
        },
    },
];
