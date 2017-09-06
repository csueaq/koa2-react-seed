/**
 * Created by x.jin on 06/09/2017.
 */
import {
    Route,
    Redirect
} from 'react-router-dom'
import React from 'react'

export default ({ from, to, status }) => (
    <Route render={({ staticContext }) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) {
            staticContext.status = status
            staticContext.url = to
        }
        return <Redirect from={from} to={to}/>
    }}/>
)