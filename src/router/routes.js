import Error from "../pages/Error";
import React from "react";
import Ward from "../pages/Ward";
import Cabinet from "../pages/Cabinet";
import Login from "../pages/Login";
import Devices from "../pages/Devices";

export const routes = [
    { path: "/", element: <Login />, exact: true },
    { path: "/cabinet", element: <Cabinet />, exact: true },
    { path: "/devices", element: <Devices />, exact: true },

    // { path: "/ward", element: <Ward />, exact: true },
    { path: "*", element: <Error />, exact: true },
]