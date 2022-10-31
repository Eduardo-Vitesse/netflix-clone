import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Redirect

import Login from '../pages/Login'
import Home from '../pages/Home'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
