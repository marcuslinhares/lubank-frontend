import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from './../shared/hooks';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export const Routes: React.FC = () => {
    const { isLogged } = useAuth();

    return (
        <BrowserRouter>
            {
                !isLogged
                    ? <AuthRoutes />
                    : <AppRoutes />
            }
        </BrowserRouter>
    );
}
