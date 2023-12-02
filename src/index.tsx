import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './utils/reportWebVitals';
import LoginPage from "./views/LoginPage";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Dots from "./views/Dots";
import ErrorPage from "./views/ErrorPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoginPage/>
        },
        {
            path: "/dots",
            element: <Dots/>
        },
        {
            path: "/*",
            element: <ErrorPage/>
        }
    ]
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// Report website speed
reportWebVitals();
