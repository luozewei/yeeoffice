import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import contacts from './contacts';
import chat from './chat';
import chatlist from './chatlist';

export default combineReducers({
    login,
    user,
    contacts,
    chat,
    chatlist
});
