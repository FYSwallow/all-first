import React, { lazy } from "react";

const Button = lazy(() => import("../pages/button"));

export const routes = [
    {
        path: "/button",
        component: Button,
        meta: {
            title: "Button页面",
        },
    },
];
