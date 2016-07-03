import * as Types from '../constants/actiontypes';

export const update_tab = function (currentIndex) {
    return {
        type: Types.UPDATE_TAB,
        activeIndex: currentIndex
    }
}