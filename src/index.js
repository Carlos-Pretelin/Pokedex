import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx"
import { pokemonReducer } from "./reducers/pokemon.js";
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import { applyMiddleware,
        compose,
        legacy_createStore as createStore } from "redux";
import {logger}  from  "./middlewares/index";
//import {featuring} from "./middlewares/index"
          
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(
    
    //This enables the other middleware "featuring" that i created. it adds an extra pokemon to the list called Antonio
    //applyMiddleware(logger, featuring)
    applyMiddleware(thunk, logger)
    )
const store = createStore(pokemonReducer, composedEnhancers);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    
    </StrictMode>
);