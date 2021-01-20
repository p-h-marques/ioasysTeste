import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'

import AuthProvider from './store/providers/AuthProvider'

import Login from './pages/login'
import './reset.css'

function App() {
    return (
        <Router>
            <Switch>
                <AuthProvider>
                    <Route exact path="/login">
                        <Login></Login>
                    </Route>

                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>

                    <Route path="*">
                        <h1>Erro 404</h1>
                    </Route>
                </AuthProvider>
            </Switch>
        </Router>
    )
}

export default App
