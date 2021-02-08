import React, { useReducer, useEffect } from 'react'
import AuthContext, {initialData} from '../context/AuthContext'
import reducers from '../reducers'

import { verifyAuth } from  '../actions/auth'

function Provider({ children }) {
    const [stateAuth, dispatchAuth] = useReducer(reducers, initialData)

    useEffect(()=>{
        verifyAuth(stateAuth)
            .then(resp => {
                if(resp.validate){
                    dispatchAuth({
                        type: 'authUser',
                        payload: { ...resp.actualAuth }
                    })
                } else {
                    dispatchAuth({
                        type: 'refuseUser'
                    })
                }
            })
    }, [])

    return (
        <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Provider