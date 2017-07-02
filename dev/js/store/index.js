import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import searchReducer from '../reducers/Search';
import chartReducer from '../reducers/Chart';
import homeReducer from '../reducers/Home';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
	combineReducers({
		homeReducer,
		searchReducer,
		chartReducer,
		routerReducer: routerReducer
	}),
	applyMiddleware(thunk, middleware, createLogger())
);

export {
	store,
	history
}