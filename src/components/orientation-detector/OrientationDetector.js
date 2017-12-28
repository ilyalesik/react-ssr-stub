import React from "react";

import MediaQuery from "react-responsive";
import ExecutionEnvironment from "exenv";

import { connect } from "react-redux";
import { setOrientation } from "../../redux_modules/adaptive/action_creators";

class OrientationDetector extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    detect(matches, isLandscape) {
        if (matches) {
            this.props.setOrientation(isLandscape);
        }
        return <div />;
    }

    detectPortrait = matches => {
        return this.detect(matches, false);
    };

    detectLandscape = matches => {
        return this.detect(matches, true);
    };

    render() {
        return (
            <div>
                {ExecutionEnvironment.canUseDOM ? (
                    <MediaQuery query="(orientation: portrait)">{this.detectPortrait}</MediaQuery>
                ) : (
                    <div />
                )}

                {ExecutionEnvironment.canUseDOM ? (
                    <MediaQuery query="(orientation: landscape)">{this.detectLandscape}</MediaQuery>
                ) : (
                    <div />
                )}
            </div>
        );
    }
}

export default connect(null, { setOrientation })(OrientationDetector);
