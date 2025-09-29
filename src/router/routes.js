import Error from "../pages/Error";
import React from "react";

import Cabinet from "../pages/Cabinet";
import Login from "../pages/Login";
import Devices from "../pages/Devices";
import { CABINET_ROUTE, DEVICES_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, UNCKNOWN_ROUTE } from "../utils/consts";
import { Navigate } from "react-router";

export const publicRoutes = [
    { path: MAIN_ROUTE, element: <Navigate to={LOGIN_ROUTE} replace />, exact: true },
    { path: LOGIN_ROUTE, element: <Login />, exact: true },
    { path: CABINET_ROUTE, element: <Cabinet />, exact: true },
    { path: DEVICES_ROUTE, element: <Devices />, exact: true },
    { path: UNCKNOWN_ROUTE, element: <Error />, exact: true },
]

export const authRoutes = [
    { path: CABINET_ROUTE, element: <Cabinet />, exact: true },
    { path: DEVICES_ROUTE, element: <Devices />, exact: true },
]