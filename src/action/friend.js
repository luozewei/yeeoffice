import * as Types from '../config/actiontypes';

export const get_all_user = function (friends) {
    return {
        type: Types.GET_ALL_USER,
        friends: friends
    }
}

