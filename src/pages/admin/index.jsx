import React, {useEffect, useContext, useState, useCallback} from 'react'
import {useHistory} from 'react-router-dom'

import AuthContext from '../../store/context/AuthContext'
import EnterprisesContext from '../../store/context/EnterprisesContext'
import {fetchAllEnterprises, fetchFilteredEnterprises} from '../../store/actions'

import {AdminStyles} from './styles'
import ImgEmpresa from '../../assets/images/empresa.png'

import ImgNavLogo from '../../assets/images/logo-nav.png'
import ImgSearch from '../../assets/images/search.png'
import ImgClose from '../../assets/images/close.png'

const Admin = () => {
    const {stateAuth, dispatchAuth}                 = useContext(AuthContext)
    const {stateEnterprises, dispatchEnterprises}   = useContext(EnterprisesContext)
    const [searchInput, setSearchInput]             = useState(false)
    const [searchText, setSearchText]               = useState('')
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
        if(searchInput) fetchFilteredEnterprises(stateAuth, searchText, dispatchEnterprises)
    }, [searchText])

    return (
        <AdminStyles>
            <nav>
                {
                    searchInput
                        ? (
                            <div className="search">
                                <img src={ImgSearch} className="search" alt="Pesquisar" />
                                <input type="text" placeholder="Pesquisar" onChange={ev => setSearchText(ev.target.value)}/>
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
                {

                    stateEnterprises.length == 0
                        ? (
                            <div className="instructions">
                                {
                                    searchInput
                                        ? (
                                            <p>
                                                {
                                                    searchText.length == 0
                                                        ? (<>Digite para filtrar as empresas desejadas.</>)
                                                        : (<>Pesquisa sem nenhum retorno.<br />Que tal refinar o termo desejado?</>)
                                                }
                                            </p>
                                        )
                                        : (<p>Clique na busca para iniciar.</p>)
                                }
                            </div>
                        )
                        : (
                            <div className="enterprises">
                                {
                                    stateEnterprises.map(el => {
                                        return (
                                            <div key={el.id} className="card">
                                                <div className="img">
                                                    <img src={ImgEmpresa} alt={el.enterprise_name}/>
                                                </div>
                                                <div className="infos">
                                                    <h2>{el.enterprise_name}</h2>
                                                    <p className="type">{el.enterprise_type.enterprise_type_name}</p>
                                                    <p className="country">{el.country}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                }

            </main>
        </AdminStyles>
    )
}

export default Admin