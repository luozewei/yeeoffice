import * as Types from '../constants/actiontypes';

const initialState = {
    isLogin: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Types.GET_MESSAGE:
            return Object.assign({}, state, {
                messages: action.messages
            });
        default:
            return state;
    }
}