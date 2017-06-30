import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import Home from './containers/Home';
import * as storeConfig from './store';

render(
	<Provider store={storeConfig.store}>
		<ConnectedRouter history={storeConfig.history}>
			<Switch>
				<Route exact path="/" component={Home}/>
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);