import { combineReducers } from 'redux';
import tab from './tab';
import user from './user';
import friend from './friend';
import message from './message';

export default combineReducers({
    tab, user, friend, message
});
