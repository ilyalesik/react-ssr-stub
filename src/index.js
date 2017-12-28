import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import thunkMiddleware from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const history = createHistory();
const initialState = window.__INITIAL_STATE__;
const sagaMiddleware = createSagaMiddleware();

import App from "./App";
import { locationChangeSaga } from "./redux_modules/routes/sagas";

const store = createStore(
    reducer,
    initialState, // Hydrate the store with server-side data
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunkMiddleware, sagaMiddleware))
);

sagaMiddleware.run(locationChangeSaga);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
