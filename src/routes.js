import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Login from './pages/login'
import Admin from './pages/admin'
import Enterprise from './pages/admin/enterprise'
import './reset.css'

function RoutesList() {
    return (
        <Switch>
            <Route exact path="/admin/:id">
                <Enterprise></Enterprise>
            </Route>

            <Route exact path="/admin">
                <Admin></Admin>
            </Route>

            <Route exact path="/login">
                <Login></Login>
            </Route>

            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
        </Switch>
    )
}

export default RoutesList