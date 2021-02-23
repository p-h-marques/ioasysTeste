import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import AuthProvider from './store/auth/Provider'
import EnterprisesProvider from './store/enterprises/Provider'
import RoutesList from './routes'

function App() {
    return (
        <AuthProvider>
            <EnterprisesProvider>
                <Router>
                    <RoutesList></RoutesList>
                </Router>
            </EnterprisesProvider>
        </AuthProvider>
    )
}

export default App
