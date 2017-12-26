import React, { Component } from "react";
import "./components/styleguide/Global";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import OrientationDetector from "./components/orientation-detector/OrientationDetector";
import HomePage from "./components/home-page/HomePage";

class App extends Component {
    render() {
        return (
            <div>
                <OrientationDetector />
                <Route exact path="/" component={HomePage} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

export default withRouter(connect(mapStateToProps)(App));
