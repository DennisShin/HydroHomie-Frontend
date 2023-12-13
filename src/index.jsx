import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from "./App";
import Login from "./Login";
import Root from "./Root";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children:[
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/home",
            element: <App />
        }
    ]
}]);

root.render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
);
