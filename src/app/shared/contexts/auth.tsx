import React, { createContext, useState, useCallback, useEffect } from 'react';

import { Api, LocalStorageService } from './../services';

interface IAuthContextData {
    hasError: boolean;
    isLogged: boolean;
    isLoading: boolean;
    logout(): Promise<void>;
    login(email: string, password: string): void;
    signup(name: string, email: string, password: string): void;
    user: {
        name: string;
        email: string;
        agency: string;
        accountNumber: string;
    }
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    useEffect(() => {
        const accessToken = LocalStorageService.getAuthToken();
        const userData = LocalStorageService.getUserData();
        setAuthData(oldState => ({
            ...oldState,
            isLogged: accessToken ? true : false,
            user: userData,
        }));
    }, []);

    const handleSignup = useCallback(async (name: string, email: string, password: string) => {
        setAuthData(oldState => ({
            ...oldState,
            isLoading: true,
            hasError: false,
        }));

        try {
            Api(false).post('/signup', {}, {
                headers: {
                    email,
                    password,
                    name,
                }
            })
                .then(({ data: { data } }) => {
                    LocalStorageService.setAuthToken(data.accessToken);
                    LocalStorageService.setUserData(data.user);
                    setAuthData(oldState => ({
                        ...oldState,
                        isLoading: false,
                        user: data.user,
                        hasError: false,
                        isLogged: true,
                    }));
                })
                .catch((_) => {
                    setAuthData(oldState => ({
                        ...oldState,
                        isLoading: false,
                        hasError: true,
                    }));
                });
        } catch (error) {
            setAuthData(oldState => ({ ...oldState, isLoading: false, hasError: true }));
        }
    }, []);

    const handleLogin = useCallback(async (email: string, password: string) => {
        setAuthData(oldState => ({
            ...oldState,
            isLoading: true,
            hasError: false,
        }));

        try {
            Api(false).get('/sign', {
                headers: {
                    email,
                    password
                }
            })
                .then(({ data: { data } }) => {
                    LocalStorageService.setAuthToken(data.accessToken);
                    LocalStorageService.setUserData(data.user);
                    setAuthData(oldState => ({
                        ...oldState,
                        isLoading: false,
                        user: data.user,
                        hasError: false,
                        isLogged: true,
                    }));
                })
                .catch((_) => {
                    setAuthData(oldState => ({
                        ...oldState,
                        isLoading: false,
                        hasError: true,
                    }));
                });
        } catch (_) {
            setAuthData(oldState => ({ ...oldState, isLoading: false, hasError: true }));
        }
    }, []);

    const handleLogout = useCallback(async () => {

        if (!window.confirm('Realmente deseja encerrar o login?')) return;

        LocalStorageService.removeAuthToken();
        LocalStorageService.removeUserData();

        setAuthData(oldState => ({
            ...oldState,
            isLogged: false,
            user: { email: '', name: '', accountNumber: '', agency: '' }
        }))
    }, []);

    const [authData, setAuthData] = useState<IAuthContextData>({
        isLogged: false,
        hasError: false,
        isLoading: false,
        login: handleLogin,
        logout: handleLogout,
        signup: handleSignup,
        user: { name: '', email: '', accountNumber: '', agency: '' }
    });

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}
