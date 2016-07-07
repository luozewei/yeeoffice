import * as Types from '../constants/actiontypes';

export const get_message = function (message) {
    return {
        type: Types.GET_MESSAGE,
        messages: message
    }
}

