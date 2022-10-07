import React from 'react'
import ReactDOM from 'react-dom/client'
import ApiContext from './ApiContext';
import api from './apiSingleton';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import FirstTask from "./routes/task-1";
import SecondTask from "./routes/task-2";

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "task-1",
        element: <FirstTask />
    },
    {
        path: "task-2",
        element: <SecondTask />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ApiContext.Provider value={{ apiAdapter: api }}>
            <RouterProvider router={router} />
        </ApiContext.Provider>
    </React.StrictMode>
)
