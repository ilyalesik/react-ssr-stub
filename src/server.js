import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import App from "./App";
import { Server } from "./components/server/Server";
import { ServerStyleSheet } from "styled-components";

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducer";
import MobileDetect from "mobile-detect";
import { detectUserAgent, setIsProduction } from "./redux_modules/adaptive";
import { routes } from "./api/routes";
import createSagaMiddleware from "redux-saga";
import { fetchComponentData } from "./sagas/routes";

const app = new express();

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
    require("../webpack.config").default(app);
} else {
    app.use("/", express.static("./dist"));
    app.use("/assets", express.static("./dist"));
}

app.use("/public", express.static("./public"));
app.use("/fonts", express.static("./fonts"));

app.use((req, res) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        applyMiddleware(thunkMiddleware, sagaMiddleware)
    );

    const md = new MobileDetect(req.headers["user-agent"]);
    store.dispatch(detectUserAgent(md));
    store.dispatch(setIsProduction(isProduction));

    const matches = [];
    routes.forEach(route => {
        const match = matchPath(req.url, route);
        if (match) {
            matches.push({ match, route });
        }
    });

    sagaMiddleware.run(fetchComponentData, matches).done.then(() => {
        const context = {};
        const sheet = new ServerStyleSheet();
        const componentHTML = ReactDOMServer.renderToString(
            sheet.collectStyles(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <App />
                    </StaticRouter>
                </Provider>
            )
        );
        const styleTags = sheet.getStyleTags();
        const initialState = store.getState();

        const html = Server({
            componentHTML,
            isProduction,
            styleTags,
            initialState
        });

        res.set("Content-Type", "text/html");
        res.send(html);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on: " + PORT);
});

export default app;
