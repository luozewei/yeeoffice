import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/';

let middlewares = [
    thunkMiddleware //redux推荐的中间件，虽然还不懂为啥要用，先放着吧 http://cn.redux.js.org/docs/api/applyMiddleware.html
];

//初始化Store
export default function configureStore(initialState) {
    const store = applyMiddleware(
        ...middlewares
    )(createStore)(reducers, initialState);

    return store;
}