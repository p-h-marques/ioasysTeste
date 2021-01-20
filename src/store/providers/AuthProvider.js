import React, { useReducer } from 'react'
import AuthContext, {initialData} from '../context/AuthContext'
import reducers from '../reducers'

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducers, initialData)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Provider