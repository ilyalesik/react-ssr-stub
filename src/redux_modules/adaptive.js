// Actions
const SET_IS_DESKTOP = "adaptive/SET_IS_DESKTOP";
const SET_IS_PHONE = "adaptive/SET_IS_PHONE";
const SET_IS_TABLET = "adaptive/SET_IS_TABLET";
const SET_IS_LANDSCAPE = "adaptive/SET_IS_LANDSCAPE";
const SET_IS_PRODUCTION = "adaptive/SET_IS_PRODUCTION";

function getDefaultState() {
    return {};
}

// Reducer
export default function(state = getDefaultState(), action = {}) {
    switch (action.type) {
        case SET_IS_DESKTOP:
            return { ...state, isDesktop: true };
        case SET_IS_PHONE:
            return { ...state, isPhone: true };
        case SET_IS_TABLET:
            return { ...state, isTablet: true };

        case SET_IS_LANDSCAPE:
            return { ...state, isLandscape: value };

        case SET_IS_PRODUCTION:
            return { ...state, isProduction: value };
    }
    return state;
}

// Action Creators
export const detectUserAgent = md => dispatch => {
    if (!md.mobile()) {
        dispatch({ type: SET_IS_DESKTOP });
    }

    if (md.phone() || md.mobile() === "UnknownMobile") {
        dispatch({ type: SET_IS_PHONE });
    }

    if (md.tablet()) {
        dispatch({ type: SET_IS_TABLET });
    }
};

export const setIsProduction = isProduction => {
    return { type: SET_IS_PRODUCTION, value: isProduction };
};

export const setOrientation = isLandscape => (dispatch, getState) => {
    if (getState().adaptive.isLandscape !== isLandscape) {
        dispatch({ type: SET_IS_LANDSCAPE, value: isLandscape });
    }
};
