import * as Types from '../config/actiontypes';

export const user_login = function (username, login) {
    return {
        type: Types.USER_LOGIN,
        isLogin: login,
        sendMessage: username
    }
}

