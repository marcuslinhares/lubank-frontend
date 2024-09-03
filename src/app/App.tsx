import React from 'react';

import { AuthProvider } from './shared/contexts';
import { Routes } from './routes';

export const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};
