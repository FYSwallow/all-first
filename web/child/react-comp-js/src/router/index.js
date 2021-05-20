import React, { lazy } from "react";

const ButtonPage = lazy(() => import("../pages/button"));

export const routes = [
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
