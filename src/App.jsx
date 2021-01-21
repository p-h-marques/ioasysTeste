import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'

import AuthProvider from './store/providers/AuthProvider'

import Login from './pages/login'
import Admin from './pages/admin'
import './reset.css'

function App() {
    return (
        <AuthProvider>
            <Router>
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
            </Router>
        </AuthProvider>
    )
}

export default App
