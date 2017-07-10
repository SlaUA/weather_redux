import {combineReducers, applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {createLogger} from 'redux-logger';

import searchReducer from '../reducers/Search';
import weatherReducer from '../reducers/Weather';
import tabsReducer from '../reducers/Tabs';
import dragNDropReducer from '../reducers/DragNDrop';

import searchSaga from '../sagas/Search';
import config from '../../../config';

const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middleware = [
	sagaMiddleware,
	reduxRouterMiddleware
];
config.environment !== 'production' && middleware.push(createLogger());

const store = createStore(
	combineReducers({
		weatherReducer,
		searchReducer,
		tabsReducer,
		dragNDropReducer,
		routerReducer: routerReducer
	}),
	applyMiddleware(...middleware)
);

sagaMiddleware.run(searchSaga);

export {
	store,
	history
}