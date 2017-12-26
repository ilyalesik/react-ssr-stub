export const SET_IS_DESKTOP = "adaptive/SET_IS_DESKTOP";
export const SET_IS_PHONE = "adaptive/SET_IS_PHONE";
export const SET_IS_TABLET = "adaptive/SET_IS_TABLET";
export const SET_IS_LANDSCAPE = "adaptive/SET_IS_LANDSCAPE";
export const SET_IS_PRODUCTION = "adaptive/SET_IS_PRODUCTION";

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
