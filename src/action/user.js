import * as Types from '../constants/actiontypes';

export const user_login = function (name, pwd) {
    return {
        type: Types.USER_LOGIN,
        isLogin: true
    }
}