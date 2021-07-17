import React, { createContext, useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie, destroyCookie } from 'nookies';

import api from '../../service/api';
import { IUser } from '../models';

interface AuthState {
    user: IUser;
    token: string;
}

interface AuthContextData {
    user: IUser;
    token: string;
    login(cred: LoginCredentials): void;
    logout(): void;
}

interface LoginCredentials {
    email: string;
    password: string;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const [userData, setUserData] = useState<AuthState>({} as AuthState);
    const router = useRouter();

    const login = useCallback(
        async ({ email, password }: LoginCredentials) => {
            try {
                const response = await api.post('/sessions/login/', {
                    email,
                    password
                });

                const { token, user } = response.data;
                const { username } = response.data.user;

                if (token) {
                    api.defaults.headers.Authorization = `Bearer ${token}`;

                    setCookie(undefined, '@Project:token', token, {
                        maxAge: 60 * 60 * 1 // 1 hour
                    });
                    setCookie(undefined, '@Project:username', username, {
                        maxAge: 60 * 60 * 1 // 1 hour
                    });
                    setUserData({ token, user });
                    router.push('/Feed');
                }
                return null;
            } catch {
                return null;
            }
        },
        [router]
    );

    const logout = () => {
        destroyCookie(undefined, '@Project:token');
        destroyCookie(undefined, '@Project:username');

        setUserData({} as AuthState);
        router.push('/');
    };

    return (
        <AuthContext.Provider
            value={{
                logout,
                login,
                token: userData.token,
                user: userData.user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextData => {
    const context = useContext(AuthContext);
    return context;
};
