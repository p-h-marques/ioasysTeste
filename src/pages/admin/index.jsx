import React, {useEffect, useContext, useState, useCallback} from 'react'
import {useHistory} from 'react-router-dom'

import AuthContext from '../../store/auth/context'
import EnterprisesContext from '../../store/enterprises/context'
import {fetchAllEnterprises, fetchFilteredEnterprises} from '../../store/enterprises/actions'

import Card from '../../components/admin/card'

import {AdminStyles} from './styles'
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
        if(stateAuth.logout){
            dispatchAuth({
                type: 'afterRefuseUser'
            })

            history.push('/login')
        }
    }, [stateAuth])

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
                            <div className="enterprises"> {stateEnterprises.map(el => { return (<Card {...el} key={el.id}/>) })} </div>
                        )
                }

            </main>
        </AdminStyles>
    )
}

export default Admin