import regeneratorRuntime from "regenerator-runtime";
import { takeEvery, put, call, select, all, fork } from "redux-saga/effects";
import { routes } from "../../api/routes";
import { matchPath } from "react-router-dom";

export function* fetchComponentData(matches) {
    const needs = matches.reduce((prev, current) => {
        return [...prev, ...current.route.needs.map(need => fork(need, current.match.params))];
    }, []);

    yield all(needs);
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
