import React, {useCallback, useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {LoginStyles} from './styles'

import AuthContext from '../../store/context/AuthContext'
import {handleAuth, verifyAuth} from '../../store/actions'

import Input from '../../components/login/input'
import Button from '../../components/login/button'
import Loading from '../../components/login/loading'

import ImgLogo from '../../assets/images/logo-home.png'
import IconEmail from '../../assets/images/email.png'
import IconPassword from '../../assets/images/password.png'

const Login = () => {
    const {stateAuth, dispatchAuth} = useContext(AuthContext)
    const [loading, setLoading]     = useState(true)
    const history                   = useHistory()

    const tryAuth = useCallback(() => {
        dispatchAuth({
            type: 'resetAuth',
            payload: {}
        })

        const email = document.querySelector('#email input').value
        const password = document.querySelector('#password input').value

        if(email.length < 3 || password.length < 3){

            dispatchAuth({
                type: 'refuseUser',
                payload: {error: true}
            })
            return false

        } else {
            setLoading(true)
            const data = {email, password}

            handleAuth(dispatchAuth, data)
                .then(()=>{setLoading(false)})
        }
    }, [stateAuth, setLoading])

    useEffect(()=>{
        if(stateAuth['access-token'] != '') history.push('/admin')
    }, [stateAuth])

    useEffect(()=>{
        verifyAuth(stateAuth)
            .then(resp => {
                if(resp.validate){
                    dispatchAuth({
                        type: 'authUser',
                        payload: resp.stateAuth
                    })

                    setLoading(false)
                    history.push('/admin')
                }
            })
            .then(()=>{setLoading(false)})

    },[])

    return (
        <>
            {loading && (<Loading />)}

            <LoginStyles>
                <div className="container">
                    <div className="logo">
                        <img src={ImgLogo} alt="ioasys"/>
                    </div>

                    <div className="description">
                        <h1>BEM VINDO AO<br />EMPRESAS {stateAuth.uid}</h1>
                        <p>Lorem ipsum dolor sit amet, contetur<br />adipiscing elit. Nunc accumsan.</p>
                    </div>

                    <div className="login">
                        <form>
                            <Input typeField="email" placeholder="Email" id="email"
                                img={IconEmail} altImg="Email"></Input>

                            <Input typeField="password" placeholder="Senha" id="password"
                                img={IconPassword} altImg="Senha"></Input>

                            {stateAuth.error && (<p className="feedback">Credenciais informadas são inválidas, tente novamente.</p>)}

                            <Button label="ENTRAR" event={tryAuth}></Button>
                        </form>
                    </div>
                </div>
            </LoginStyles>
        </>
    )
}

export default Login