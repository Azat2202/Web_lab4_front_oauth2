import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './utils/reportWebVitals';
import LoginPage from "./views/LoginPage";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import Dots from "./views/Dots";
import ErrorPage from "./views/ErrorPage";
import {Toaster} from "react-hot-toast";
import { Provider } from 'react-redux'
import { AuthorizationStore } from './redux/authorizationStore';
import keycloak from "./KeyCloak";
import PrivateRoute from "./containers/PrivatePath";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const eventLogger = (event: unknown, error: unknown) => {
    console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
    console.log('onKeycloakTokens', tokens)
}

root.render(
  <ReactKeycloakProvider
      initOptions={{onLoad: 'login-required'}}
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
  >
      <Provider store={AuthorizationStore}>
          <Toaster
              position="top-right"
              reverseOrder={false}
          />
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<LoginPage/>}/>
                  <Route path={"/dots"} element={<PrivateRoute><Dots/></PrivateRoute>}/>
                  <Route path={"/*"} element={<ErrorPage/>}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  </ReactKeycloakProvider>
);

// Report website speed
reportWebVitals();
