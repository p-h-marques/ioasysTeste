import React, {useEffect, useContext, useState, useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import AuthContext from '../../store/context/AuthContext'

import {AdminStyles} from './styles'

import ImgNavLogo from '../../assets/images/logo-nav.png'
import ImgSearch from '../../assets/images/search.png'
import ImgClose from '../../assets/images/close.png'

const Admin = () => {
    const {state, dispatch}             = useContext(AuthContext)
    const [searchInput, setSearchInput] = useState(false)
    const history                       = useHistory()

    useEffect(()=>{
        if(state['access-token'] == ''){
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
                dispatch({
                    type: 'authUser',
                    payload: localState
                })
            }
        }
    }, [])

    const handleSearch = useCallback(()=>{
        setSearchInput(!searchInput)
    }, [searchInput])

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
                <p>Clique na busca para iniciar.</p>
            </main>
        </AdminStyles>
    )
}

export default Admin