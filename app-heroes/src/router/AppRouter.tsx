import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage';
import { BuscarPage } from '../heroes/pages/BuscarPage';
import { DcPage } from '../heroes/pages/DcPage';
import { HeroePage } from '../heroes/pages/HeroePage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { HeroesApp } from '../HeroesApp';

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/login'} />
    },
    {
        path: 'app',
        element: <HeroesApp></HeroesApp>,
        children: [
            {
                path: 'dc',
                element: <DcPage></DcPage>
            },
            {
                path: 'marvel',
                element: <MarvelPage></MarvelPage>
            },
            {
                path: 'buscar',
                element: <BuscarPage></BuscarPage>
            },
            {
                path: 'heroe/:id', 
                element: <HeroePage></HeroePage>
            },
            {
                path: '*',
                element: <Navigate to={'dc'}></Navigate>
            }
        ],

    },
    {
        path: 'login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '*',
        element: <Navigate to={'app/dc'}></Navigate>
    }
]);
