/**
 * Created by x.jin on 20/06/2017.
 */

import React from 'react'
import {render} from 'react-dom'
import createStore from './store/store'
import { Provider } from 'react-redux'
import routes from './view/routes.jsx'
import domready from 'domready'
import {createBrowserHistory} from 'history'
import { ConnectedRouter, push } from 'react-router-redux'

const store = createStore();

domready(function() {

    render(
        <Provider store={store}>
            <ConnectedRouter history={createBrowserHistory()} >
                {routes}
            </ConnectedRouter>
        </Provider>,
        document.getElementById("content")
    );
});