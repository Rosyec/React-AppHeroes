import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
import { type } from '../types/type'

export const AuthProvider = ({ children }: Props) => {

    const initializer = () => {
        const data: State = JSON.parse( localStorage.getItem('user') || 'null' ) || { logged: false };
        return data;
    }
        
    
    const initialState: State = {
        logged: false,
    }

    const [state, dispatch] = useReducer(authReducer, initialState, initializer);

    const onLoginProvider = (username: string) => {
        const user:State = {
            logged: true,
            name: username
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: type.login, payload: username });
    }

    const onLogoutProvider = () => {
        localStorage.removeItem('user')
        dispatch({ type: type.logout, payload: '' })
    }

    return (
        <AuthContext.Provider value={{ onLogin: onLoginProvider, onLogout: onLogoutProvider, state }}>
            {children}
        </AuthContext.Provider>
    )
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

interface State {
    logged: boolean,
    name?: string
}