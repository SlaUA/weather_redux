import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import Weather from './containers/Weather';
import * as storeConfig from './store';
import DragNDrop from './containers/DragNDrop';
import TopMenu from './components/TopMenu';

render(
    <Provider store={storeConfig.store}>
        <ConnectedRouter history={storeConfig.history}>
            <div>
                <Route component={TopMenu}/>
                <Route exact path="/" component={Weather}/>
                <Route exact path="/dnd" component={DragNDrop}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);