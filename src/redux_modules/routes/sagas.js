import regeneratorRuntime from "regenerator-runtime";
import { takeEvery, put, call, select, all, fork } from "redux-saga/effects";
import { routes } from "../../api/routes";
import { matchPath } from "react-router-dom";
import _ from "lodash";
import { SET_NOT_FOUND } from "../notfound/actions";

export function* fetchComponentData(matches) {
    try {
        const needs = matches.reduce((prev, current) => {
            return [...prev, ...current.route.needs.map(need => call(need, current.match.params))];
        }, []);

        yield all(needs);
        yield put({ type: SET_NOT_FOUND, value: false });
    } catch (e) {
        if (_.isObject(e) && e.name === "NotFound") {
            yield put({ type: SET_NOT_FOUND, value: true });
        }
    }
}

export function* locationChangeSaga() {
    yield takeEvery("@@router/LOCATION_CHANGE", locationChange);
}

function* locationChange() {
    const location = yield select(state => state.router.location);

    const matches = [];
    routes.forEach(route => {
        const match = matchPath(location.pathname, route);
        if (match) {
            matches.push({ match, route });
        }
    });

    yield call(fetchComponentData, matches);
}
