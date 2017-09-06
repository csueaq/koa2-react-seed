/**
 * Created by x.jin on 06/09/2017.
 */

import React from 'react'
import {
    Route,
    Redirect,
} from 'react-router-dom'


let auth = false
export default ({ component: Component, ...rest }) => {
    console.log('redirect');
    return <Route {...rest} render={props => (
        auth ? (
            <Component {...props}/>
        ) : (
            <Redirect to='/about' />
        )
    )}/>
}