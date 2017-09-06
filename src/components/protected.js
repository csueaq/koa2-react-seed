/**
 * Created by x.jin on 06/09/2017.
 */

import React from 'react'
import {
    Route,
} from 'react-router-dom'
import RedirectWithStatus from './redirectWithStatus'

let auth = false
export default ({ component: Component, ...rest }) => {
    return <Route {...rest} render={ props => (
        auth ? (
            <Component {...props}/>
        ) : (
            <RedirectWithStatus
                status={301}
                from="/private"
                to="/about"
            />
        )
    )}/>
}





