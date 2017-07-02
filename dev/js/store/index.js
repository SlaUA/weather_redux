import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import searchReducer from '../reducers/Search';
import homeReducer from '../reducers/Home';
import tabsReducer from '../reducers/Tabs';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
	combineReducers({
		homeReducer,
		searchReducer,
		tabsReducer,
		routerReducer: routerReducer
	}),
	applyMiddleware(thunk, middleware, createLogger())
);

export {
	store,
	history
}