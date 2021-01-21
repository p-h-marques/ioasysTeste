import React, {useCallback, useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {LoginStyles, LoadingStyles} from './styles'

import AuthContext from '../../store/context/AuthContext'
import {handleAuth, codeStorage} from '../../store/actions'

import Input from '../../components/login/input'
import Button from '../../components/login/button'

import ImgLogo from '../../assets/images/logo-home.png'
import ImgLoading from '../../assets/images/loader.png'
import IconEmail from '../../assets/images/email.png'
import IconPassword from '../../assets/images/password.png'

const Login = () => {
    const {state, dispatch}     = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const history               = useHistory()

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
            const data = {email, password}

            handleAuth(dispatch, data)
                .then(()=>{setLoading(false)})
                .then(()=>{history.push('/admin')})
        }
    }, [])

    useEffect(()=>{
        //função
        if(
            state['access-token'] != '' &&
            state['client']       != '' &&
            state['uid']          != ''
        ){
            history.push('/admin')
        }

        let localState = JSON.parse(localStorage.getItem(codeStorage))

        if(!localState) return false

        if(
            localState['access-token'] != '' &&
            localState['client']       != '' &&
            localState['uid']          != ''
        ){
            dispatch({
                type: 'authUser',
                payload: localState
            })

            history.push('/admin')
        }
    },[])

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