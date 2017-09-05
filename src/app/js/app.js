/**
 * Created by x.jin on 20/06/2017.
 */

import React from 'react'
import {render} from 'react-dom'
import createStore from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './view/routes'
import domready from 'domready'
import {createBrowserHistory} from 'history'
import { ConnectedRouter } from 'react-router-redux'

const store = createStore();

domready(function() {

    render(
        <Provider store={store}>
            <ConnectedRouter history={createBrowserHistory()} >
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </ConnectedRouter>
        </Provider>,
        document.getElementById("content")
    );
});