import { SET_NOT_FOUND } from "./actions";

function getDefaultState() {
    return {
        isNotFound: false
    };
}

export default function(state = getDefaultState(), action) {
    switch (action.type) {
        case SET_NOT_FOUND:
            return { ...state, isNotFound: action.value };
    }
    return state;
}
