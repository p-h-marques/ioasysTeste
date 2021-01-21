import React, { useReducer } from 'react'
import AuthContext, {initialData} from '../context/AuthContext'
import reducers from '../reducers'

function Provider({ children }) {
    const [stateAuth, dispatchAuth] = useReducer(reducers, initialData)

    return (
        <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Provider