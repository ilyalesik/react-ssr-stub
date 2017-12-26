require("es6-promise").polyfill();
require("isomorphic-fetch");
import param from "jquery-param";
import apiPath from "./apiPath";

export const API_PREFIX = apiPath;
const COMMON_HEADERS = {
    Accept: "application/json, application/xml, text/plain, text/html, *.*",
    "Content-Type": "application/json; charset=utf-8"
};

function commonRequestWithParseResponse(api, params) {
    return fetch(API_PREFIX + api, {
        headers: COMMON_HEADERS,
        credentials: "include",
        ...params
    }).then(
        response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => {
                    throw error;
                });
            }
        },
        error => {
            throw error;
        }
    );
}
