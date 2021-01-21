import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Login from './pages/login'
import Admin from './pages/admin'
import './reset.css'

function RoutesList() {
    return (
        <Switch>
            <Route exact path="/login">
                <Login></Login>
            </Route>

            <Route exact path="/">
                <Redirect to="/login" />
            </Route>

            <Route exact path="/admin">
                <Admin></Admin>
            </Route>

            <Route path="*">
                <h1>Erro 404</h1>
            </Route>
        </Switch>
    )
}

export default RoutesList