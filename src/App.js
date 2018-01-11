import React, { Component } from "react";
import "./components/styleguide/Global";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import OrientationDetector from "./components/orientation-detector/OrientationDetector";
import HomePage from "./components/home-page/HomePage";
import ErrorPage from "./components/error-page/ErrorPage";

class App extends Component {
    render() {
        const { isNotFound } = this.props;
        return (
            <div>
                <OrientationDetector />

                {!isNotFound ? (
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route component={ErrorPage} />
                    </Switch>
                ) : (
                    <Route component={ErrorPage} />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({ isNotFound: state.notfound.isNotFound });

export default withRouter(connect(mapStateToProps)(App));
