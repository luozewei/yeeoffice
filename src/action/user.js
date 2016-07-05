import * as Types from '../constants/actiontypes';

export const user_login = function (username) {
    return {
        type: Types.USER_LOGIN,
        isLogin: 'login'
    }
}

