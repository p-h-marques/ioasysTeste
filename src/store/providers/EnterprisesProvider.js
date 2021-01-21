import React, { useReducer } from 'react'
import EnterprisesContext from '../context/EnterprisesContext'
import reducers from '../reducers'

function Provider({ children }) {
    const [stateEnterprises, dispatchEnterprises] = useReducer(reducers, [])

    return (
        <EnterprisesContext.Provider value={{ stateEnterprises, dispatchEnterprises }}>
            {children}
        </EnterprisesContext.Provider>
    )
}

export default Provider