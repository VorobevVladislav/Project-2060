import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { authRoutes, publicRoutes } from "../router/routes";
import { MainContext } from '..';

const AppRouter = () => {

    const { user } = useContext(MainContext)

    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    element={route.element}
                />
            )}
            {user.isAuth && authRoutes.map(route =>
                <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    element={route.element}
                />
            )}
        </Routes>
    );
};

export default AppRouter;