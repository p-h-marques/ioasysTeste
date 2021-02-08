import React, {useCallback, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {LoginStyles} from './styles'

import AuthContext from '../../store/context/AuthContext'
import {handleAuth} from '../../store/actions'

import Input from '../../components/login/input'
import Button from '../../components/login/button'
import Loading from '../../components/login/loading'

import ImgLogo from '../../assets/images/logo-home.png'
import IconEmail from '../../assets/images/email.png'
import IconPassword from '../../assets/images/password.png'

const Login = () => {
    const {stateAuth, dispatchAuth} = useContext(AuthContext)
    const history                   = useHistory()

    //
    // verificando localStorage em busca de autenticação prévia
    //
    useEffect(()=>{
        if(stateAuth.login){
            dispatchAuth({
                type: 'authSingleUpdate',
                payload: {loading: false}
            })

            history.push('/admin')
        }
    }, [stateAuth])

    //
    // executando tentativa de autenticação
    //
    const tryAuth = useCallback(() => {
        const email = document.querySelector('#email input').value
        const password = document.querySelector('#password input').value

        if(email.length < 3 || password.length < 3){

            dispatchAuth({
                type: 'authSingleUpdate',
                payload: {errors: true}
            })

            return false

        } else {
            dispatchAuth({
                type: 'authSingleUpdate',
                payload: {loading: true}
            })

            handleAuth(dispatchAuth, {email, password})
                .then(resp => {
                    if(resp.success){
                        dispatchAuth({
                            type: 'authSingleUpdate',
                            payload: {loading: false}
                        })

                        history.push('/admin')
                    } else {
                        dispatchAuth({
                            type: 'authSingleUpdate',
                            payload: {errors: true}
                        })
                    }
                })
        }
    }, [stateAuth])

    return (
        <>
            {stateAuth.loading && (<Loading />)}

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
                            <Input typeField="email" placeholder="Email" id="email"
                                img={IconEmail} altImg="Email"></Input>

                            <Input typeField="password" placeholder="Senha" id="password"
                                img={IconPassword} altImg="Senha"></Input>

                            {stateAuth.errors && (<p className="feedback">Credenciais informadas são inválidas, tente novamente.</p>)}

                            <Button label="ENTRAR" event={tryAuth}></Button>
                        </form>
                    </div>
                </div>
            </LoginStyles>
        </>
    )
}

export default Login