import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import AuthProvider from './store/providers/AuthProvider'
import RoutesList from './routes'

function App() {
    return (
        <AuthProvider>
            <Router>
                <RoutesList></RoutesList>
            </Router>
        </AuthProvider>
    )
}

export default App
