import React, {useCallback, useState, useContext, useEffect} from 'react'
import {LoginStyles, LoadingStyles} from './styles'

import AuthContext from '../../store/context/AuthContext'
import {handleAuth} from '../../store/actions'

import Input from '../../components/login/input'
import Button from '../../components/login/button'

import ImgLogo from '../../assets/images/logo-home.png'
import ImgLoading from '../../assets/images/loader.png'
import IconEmail from '../../assets/images/email.png'
import IconPassword from '../../assets/images/password.png'

const Login = () => {
    const {state, dispatch}         = useContext(AuthContext)
    const [error, setError]         = useState(false)
    const [loading, setLoading]     = useState(false)

    const tryAuth = useCallback(() => {
        dispatch({
            type: 'resetAuth',
            payload: {}
        })

        const email = document.querySelector('#email input').value
        const password = document.querySelector('#password input').value

        if(email.length < 3 || password.length < 3){

            dispatch({
                type: 'refuseUser',
                payload: {error: true}
            })
            return false

        } else {
            setLoading(true)
            const data = {email, password, error}

            handleAuth(dispatch, data)
                .then(()=>{setLoading(false)})
        }
    }, [])

    useEffect(()=>{
        //se access token tiver vazio, tenta pegar do local storage
        //se access token tiver cheio, grava no local storage e autentica
        if(state['access-token'] != ''){
            localStorage.setItem('io_auth', JSON.stringify({
                'access-token': state['access-token'],
                'client':       state['client'],
                'uid':          state['uid']
            }))
        }
    }, [state])

    return (
        <>
            {loading && (
                <LoadingStyles>
                    <img src={ImgLoading} alt="Autenticando..."/>
                </LoadingStyles>
            )}

            <LoginStyles>
                <div className="container">
                    <div className="logo">
                        <img src={ImgLogo} alt="ioasys"/>
                    </div>

                    <div className="description">
                        <h1>BEM VINDO AO<br />EMPRESAS</h1>
                        <p>Lorem ipsum dolor sit amet, contetur<br />adipiscing elit. Nunc accumsan.</p>
                    </div>

                    <div className="login">
                        <form>
                            <Input typeField="email" placeholder="Email" id="email" error={state.error}
                                img={IconEmail} altImg="Email"></Input>

                            <Input typeField="password" placeholder="Senha" id="password" error={state.error}
                                img={IconPassword} altImg="Senha"></Input>

                            {state.error && (<p className="feedback">Credenciais informadas são inválidas, tente novamente.</p>)}

                            <Button label="ENTRAR" event={tryAuth}></Button>
                        </form>
                    </div>
                </div>
            </LoginStyles>
        </>
    )
}

export default Login