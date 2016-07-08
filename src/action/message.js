import * as Types from '../config/actiontypes';

export const get_message = function (message) {
    return {
        type: Types.GET_MESSAGE,
        messages: message
    }
}

