import React, {useEffect, useContext, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'

import AuthContext from '../../../store/context/AuthContext'
import {fetchIdEnterprise} from '../../../store/actions/enterprises'

import {AdminStyles} from './../styles'
import IconBack from '../../../assets/images/back.png'
import ImgEmpresa from '../../../assets/images/empresa.png'

const Enterprise = () => {
    const {stateAuth, dispatchAuth} = useContext(AuthContext)
    const [enterprise, setEnterprise] = useState(null)

    const {id}      = useParams()
    const history   = useHistory()

    useEffect(()=>{
        fetchIdEnterprise(stateAuth, id)
            .then(resp => {
                if(!resp){
                    dispatchAuth({
                        type: 'refuseUser',
                        payload: {error: true}
                    })

                    history.push('/login')
                } else {
                    setEnterprise(resp)
                }
            })
    }, [id, stateAuth])

    return (
        <AdminStyles>
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
                            <img src={ImgEmpresa} alt={enterprise.enterprise_name}/><p>{enterprise.description}</p>
                        </div>
                    )
                }

            </main>
        </AdminStyles>
    )
}

export default Enterprise