import React, {useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AuthContext from '../../store/context/AuthContext'

const Admin = () => {
    const {state, dispatch} = useContext(AuthContext)
    const history           = useHistory()

    useEffect(()=>{
        if(state['access-token'] == ''){
            let localState = JSON.parse(localStorage.getItem('io_auth'))

            if(!localState){
                history.push('/login')
                return false
            }

            dispatch({
                type: 'authUser',
                payload: localState
            })
        }
    }, [])

    return (
        <div>
            {state.client}
        </div>
    )
}

export default Admin