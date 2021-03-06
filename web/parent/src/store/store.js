import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import userReducer from './module/user'
import appReducer from './module/app'
import testReducer from './module/test';

const reducers = combineReducers({
    userReducer,
    appReducer,
    testReducer
})

const middleware = [thunk]

function cretaMyStore() {
    const store = window.__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(
            reducers,
            compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__({})),
        )
        : createStore(reducers, applyMiddleware(...middleware));
    return store;
}

const store = cretaMyStore()
export default store