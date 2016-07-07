import * as Types from '../constants/actiontypes';

const initialState = {
    isLogin: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Types.GET_ALL_USER:
            return Object.assign({}, state, {
                friends: action.friends
            });
        default:
            return state;
    }
}