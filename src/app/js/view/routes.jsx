import React from 'react'
import { Route } from 'react-router'

import Home from '../home/container'


export default (

    <Route>
        <Route exact path='/' component={Home}/>
    </Route>
)