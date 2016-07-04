import * as Types from '../constants/actiontypes';

const initialState = {
    activeIndex: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_TAB:
            return Object.assign({}, state, {
                activeIndex: action.activeIndex
            });
        default:
            return state;
    }
}