import * as Types from '../config/actiontypes';

const initialState = {
    isLogin: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Types.USER_LOGIN:
            return Object.assign({}, state, {
                isLogin: action.isLogin,
                sendMessage:action.sendMessage
            });
        default:
            return state;
    }
}