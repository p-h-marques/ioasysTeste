import React, {useEffect, useContext, useState, useCallback} from 'react'
import {useHistory} from 'react-router-dom'

import AuthContext from '../../store/context/AuthContext'
import EnterprisesContext from '../../store/context/EnterprisesContext'
import {fetchAllEnterprises} from '../../store/actions'

import {AdminStyles} from './styles'

import ImgNavLogo from '../../assets/images/logo-nav.png'
import ImgSearch from '../../assets/images/search.png'
import ImgClose from '../../assets/images/close.png'

const Admin = () => {
    const {stateAuth, dispatchAuth}                 = useContext(AuthContext)
    const {stateEnterprises, dispatchEnterprises}   = useContext(EnterprisesContext)
    const [searchInput, setSearchInput]             = useState(false)
    const history                                   = useHistory()

    useEffect(()=>{
        if(stateAuth['access-token'] == ''){
            let localState = JSON.parse(localStorage.getItem('io_auth'))

            if(!localState){
                history.push('/login')
                return false
            }

            if(
                localState['access-token'] != '' &&
                localState['client']       != '' &&
                localState['uid']          != ''
            ){
                dispatchAuth({
                    type: 'authUser',
                    payload: localState
                })
            }
        }
    }, [])

    const handleSearch = useCallback(()=>{
        setSearchInput(!searchInput)
        fetchAllEnterprises(stateAuth, dispatchEnterprises)
    }, [searchInput, stateAuth])

    useEffect(()=>{
        console.log(stateEnterprises)
    }, [stateEnterprises])

    return (
        <AdminStyles>
            <nav>
                {
                    searchInput
                        ? (
                            <div className="search">
                                <img src={ImgSearch} className="search" alt="Pesquisar" />
                                <input type="text" placeholder="Pesquisar" />
                                <img src={ImgClose} className="close" alt="Fechar" onClick={handleSearch} />
                            </div>
                        )
                        : (
                            <div className="default">
                                <img src={ImgNavLogo} className="logo" alt="ioasys"/>
                                <img src={ImgSearch} className="search" alt="Pesquisar" onClick={handleSearch}/>
                            </div>
                        )
                }
            </nav>
            <main>
                <div>
                    {
                        searchInput
                            ? (<p>Digite para filtrar as empresas desejadas.</p>)
                            : (<p>Clique na busca para iniciar.</p>)
                    }
                </div>
                <div>
                    {
                        stateEnterprises.map(el => {
                            return (<span key={el.id}>{el.enterprise_name} | </span>)
                        })
                    }
                </div>
            </main>
        </AdminStyles>
    )
}

export default Admin