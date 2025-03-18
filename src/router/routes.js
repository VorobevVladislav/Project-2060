import Error from "../pages/Error";
import React from "react";
import Ward from "../pages/Ward";
import Cabinet from "../pages/Cabinet";

export const routes = [
    { path: "/ward", element: <Ward />, exact: true },
    { path: "/cabinet", element: <Cabinet />, exact: true },
    { path: "*", element: <Error />, exact: true },
]