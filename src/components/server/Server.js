import React from "react";
import _ from "lodash";

const template = _.template(`
    <!DOCTYPE html>
    <html>
            <head>
            	<meta charSet="utf-8" />
            	<title>React SSR stub</title>
            	<meta name="viewport"
                      content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
                <% isProduction ? '<link href="/assets/bundle.css" media="all" rel="stylesheet" />' : '' %>
                <%= styleTags %>
                <script type="text/javascript">window.__INITIAL_STATE__ = <%= JSON.stringify(initialState) %></script>
            </head>
            <body>
                <div id="root"><%= componentHTML %></div>
                <script type="application/javascript" src="/assets/bundle.js"></script>
            </body>
    </html>
`);

export const Server = ({ componentHTML, isProduction, styleTags, initialState }) =>
    template({ componentHTML, isProduction, styleTags, initialState });
