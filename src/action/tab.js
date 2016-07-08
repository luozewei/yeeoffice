import * as Types from '../config/actiontypes';

export const update_tab = function (currentIndex) {
    return {
        type: Types.TAB_CHANGE,
        activeIndex: currentIndex
    }
}