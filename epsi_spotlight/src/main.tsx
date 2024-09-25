import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-npovulkz38c3imdj.eu.auth0.com"
            clientId="7TYYhIKH9tv1lUx55RnxAZzSQNCab3e3"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <BrowserRouter>
                <Provider>
                    <App />
                </Provider>
            </BrowserRouter>
        </Auth0Provider>
    </React.StrictMode>,
);
