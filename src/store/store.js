/**
 * Created by x.jin on 20/06/2017.
 */

import { createStore, applyMiddleware,combineReducers, compose } from 'redux'
import promiseMiddleware from '../middleware/promise-middleware'
import homeReducer from '../container/home/reducer'
import { routerReducer } from 'react-router-redux'
import { isBrowser } from '../util/utils'
export default function () {

    const reducers = combineReducers({
        home: homeReducer,
        router: routerReducer

    });

    let initialState = reducers();

    if(isBrowser() &&  window.__INITIAL_STATE__ !== 'undefined' ) {
        initialState = JSON.parse(decodeURIComponent(window.__INITIAL_STATE__))
    }
    const finalCreateStore = compose(
        applyMiddleware(promiseMiddleware),
        isBrowser() && window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)

    return finalCreateStore(reducers,initialState);

}