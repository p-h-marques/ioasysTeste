import React, {useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'

import {AdminStyles} from './../styles'
import IconBack from '../../../assets/images/back.png'
import ImgEmpresa from '../../../assets/images/empresa.png'

const Enterprise = () => {
    const {id}      = useParams()
    const history   = useHistory()

    useEffect(()=>{
        console.log(`Enterprise ${id}`)
    }, [id])

    return (
        <AdminStyles>
            <nav>
                <div className="enterprise">
                    <img src={IconBack} alt="Voltar"
                        onClick={()=>{history.goBack()}}/><span>EMPRESA PENDENTE</span>
                </div>
            </nav>
            <main>
                <div className="details">
                    <img src={ImgEmpresa} alt="EMPRESA PENDENTE"/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </main>
        </AdminStyles>
    )
}

export default Enterprise