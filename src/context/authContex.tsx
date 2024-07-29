import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authToken, setAuthTokenState] = useState<string | null>(null);

    const setAuthToken = (token: string) => {
        localStorage.setItem('authToken', token);
        setAuthTokenState(token);
    };

    const getAuthToken = () => {
        return localStorage.getItem('authToken');
    };

    const removeAuthToken = () => {
        localStorage.removeItem('authToken');
        setAuthTokenState(null);
    };


    useEffect(() => {
        const tokenFromLocalStorage = getAuthToken();
        if (tokenFromLocalStorage) {
            setAuthTokenState(tokenFromLocalStorage);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, removeAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
