import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../home/container'


export default () =>
(

     <div>
         <Route exact path='/about' component={Home}/>
         <Route exact path='/' component={Home}/>
    </div>
)