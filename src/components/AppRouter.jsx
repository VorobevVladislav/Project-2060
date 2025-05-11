import React from 'react';
import { Route, Routes } from 'react-router';
import { routes } from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route exact={route.exact} path={route.path} element={route.element} key={route.path} />
            )}
        </Routes>
    );
};

export default AppRouter;