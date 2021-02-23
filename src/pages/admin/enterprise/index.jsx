import React, {useEffect, useContext, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'

import AuthContext from '../../../store/auth/context'
import {fetchIdEnterprise} from '../../../store/enterprises/actions'

import Loading from '../../../components/login/loading'
import Cover from '../../../components/admin/cover'

import {AdminStyles} from './../styles'
import IconBack from '../../../assets/images/back.png'

const Enterprise = () => {
    const {stateAuth, dispatchAuth} = useContext(AuthContext)
    const [enterprise, setEnterprise] = useState(null)

    const {id}      = useParams()
    const history   = useHistory()

    useEffect(()=>{
        if(stateAuth.login){
            fetchIdEnterprise(stateAuth, id)
                .then(resp => {
                    if(!resp){
                        dispatchAuth({
                            type: 'refuseUser'
                        })

                        history.push('/login')
                    } else {
                        setEnterprise(resp)
                    }
                })
        }

        if(stateAuth.logout){
            dispatchAuth({
                type: 'afterRefuseUser'
            })

            history.push('/login')
        }
    }, [id, stateAuth])

    return (
        <AdminStyles>
            {enterprise == null && <Loading />}
            <nav>
                <div className="enterprise">
                    <img src={IconBack} alt="Voltar"
                        onClick={()=>{history.goBack()}}/>
                    <span>{enterprise ? (<>{enterprise.enterprise_name}</>) : (<>Carregando...</>)}</span>
                </div>
            </nav>
            <main>
                {
                    enterprise && (
                        <div className="details">
                            <Cover id={enterprise.id}/><p>{enterprise.description}</p>
                        </div>
                    )
                }

            </main>
        </AdminStyles>
    )
}

export default Enterprise