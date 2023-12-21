import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from "./App";
import Login from "./Login";
import Root from "./Root";
import Profile from "./Profile";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const [userId, setUserId] = useState(0) 



const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children:[
        {
            path: "/app",
            element: <App />
        },
        {
            path: "/profile",
            element: <Profile />
        }
    ]
},
{
    path: "/login",
    element: <Login />,
}

]);

root.render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
);
