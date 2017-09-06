/**
 * Created by x.jin on 05/09/2017.
 */
import { Provider } from 'react-redux'
import React from 'react'
import Routes from './routes'
import { ConnectedRouter } from 'react-router-redux'


export default ({store, history}) => {

    return <Provider store={store}>
        <ConnectedRouter history={history} >
            <Routes />
        </ConnectedRouter>
    </Provider>
}