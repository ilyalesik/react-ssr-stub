import _ from "lodash";

export const parseQueryParams = text => {
    if (!text || _.isEmpty(text)) {
        return {};
    }
    const json =
        '{"' +
        decodeURI(text.substring(1))
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}';
    return JSON.parse(json);
};
