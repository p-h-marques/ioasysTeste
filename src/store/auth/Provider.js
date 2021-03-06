import React, { useReducer, useEffect } from 'react'
import AuthContext, {initialData} from '../auth/context'
import reducers from './reducers'

import { verifyAuth } from  './actions'

function Provider({ children }) {
    const [stateAuth, dispatchAuth] = useReducer(reducers, initialData)

    useEffect(()=>{
        console.log('Para testar o app, use o login <testeapple@ioasys.com.br> e a senha <12341234>.')
        verifyAuth(stateAuth)
            .then(resp => {
                if(resp.validate){
                    dispatchAuth({
                        type: 'authUser',
                        payload: { ...resp.actualAuth }
                    })
                } else {
                    if(location.pathname !== '/login'){
                        dispatchAuth({
                            type: 'refuseUser'
                        })
                    } else {
                        dispatchAuth({
                            type: 'authSingleUpdate',
                            payload: { loading: false }
                        })
                    }
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