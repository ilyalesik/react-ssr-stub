import React from "react";
import Status from "../status/Status";

export default class ErrorPage extends React.PureComponent {
    render() {
        return (
            <Status code={404}>
                <h1>404</h1>
            </Status>
        );
    }
}
