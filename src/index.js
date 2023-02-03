import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx"
import { pokemonReducer } from "./reducers/pokemon.js";
import { Provider } from "react-redux";
import { applyMiddleware,
        compose,
        legacy_createStore as createStore } from "redux";
import {logger}  from  "./middlewares/index";
import {featuring} from "./middlewares/index"
          
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
          
const composedEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, featuring)
    )
const store = createStore(pokemonReducer, composedEnhancers);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    
    </StrictMode>
);