import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import thunkMiddleware from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import App from "./App";
import { locationChangeSaga } from "./redux_modules/routes/sagas";
import { AppContainer } from "react-hot-loader";

const history = createHistory();
const initialState = window.__INITIAL_STATE__;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    initialState, // Hydrate the store with server-side data
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunkMiddleware, sagaMiddleware))
);

sagaMiddleware.run(locationChangeSaga);

const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Component />
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById("root")
    );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./App", () => {
        render(App);
    });
}
