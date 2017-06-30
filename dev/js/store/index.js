import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import searchReducer from '../reducers/Search';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        searchReducer,
        routerReducer: routerReducer
    }),
    applyMiddleware(thunk, middleware, createLogger())
);

export {
    store,
    history
}