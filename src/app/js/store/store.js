/**
 * Created by x.jin on 20/06/2017.
 */

import { createStore, applyMiddleware,combineReducers, compose } from 'redux'
import promiseMiddleware from '../../../../../poc-nap/middleware/promise-middleware'
import homeReducer from '../home/reducer'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export default function () {

    const reducers = combineReducers({
        home: homeReducer,
        router: routerReducer

    });

    let initialState = reducers();

    const finalCreateStore = compose(
        applyMiddleware(promiseMiddleware,routerMiddleware(createHistory())),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)

    return finalCreateStore(reducers,initialState);

}