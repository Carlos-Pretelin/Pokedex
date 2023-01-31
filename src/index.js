import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx"
import { pokemonReducer } from "./reducers/pokemon.js";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
          
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
          
const store = createStore(pokemonReducer);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    
    </StrictMode>
);