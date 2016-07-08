import * as Types from '../config/actiontypes';

const initialState = {
    activeIndex: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Types.TAB_CHANGE:
            return Object.assign({}, state, {
                activeIndex: action.activeIndex
            });
        default:
            return state;
    }
}