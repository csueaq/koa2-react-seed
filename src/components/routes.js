import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/home/container'
import Protected from './protected'


export default () =>
(

    <Switch>
         <Route exact path='/about' component={Home}/>
         <Route exact path='/' component={Home}/>
         <Protected exact path='/private' component={Home}/>
    </Switch>
)