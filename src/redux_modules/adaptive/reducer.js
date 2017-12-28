import { SET_IS_DESKTOP, SET_IS_LANDSCAPE, SET_IS_PHONE, SET_IS_PRODUCTION, SET_IS_TABLET } from "./action_creators";

function getDefaultState() {
    return {};
}

export default function(state = getDefaultState(), action = {}) {
    switch (action.type) {
        case SET_IS_DESKTOP:
            return { ...state, isDesktop: true };
        case SET_IS_PHONE:
            return { ...state, isPhone: true };
        case SET_IS_TABLET:
            return { ...state, isTablet: true };

        case SET_IS_LANDSCAPE:
            return { ...state, isLandscape: action.value };

        case SET_IS_PRODUCTION:
            return { ...state, isProduction: action.value };
    }
    return state;
}
