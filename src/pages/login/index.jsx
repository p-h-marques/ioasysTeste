import React, {useCallback, useState, useContext} from 'react'
import {LoginStyles, LoadingStyles} from './styles'

import AuthContext from '../../store/context/AuthContext'
import {handleAuth} from '../../store/actions'

import Input from '../../components/login/input'
import Button from '../../components/login/button'

import ImgLogo from '../../assets/images/logo-home.png'
import ImgLoading from '../../assets/images/loader.png'
import IconEmail from '../../assets/images/email.png'
import IconPassword from '../../assets/images/password.png'
import IconShowPassword from '../../assets/images/show-password.png'

const Login = () => {
    const {state, dispatch}         = useContext(AuthContext)
    const [showPass, setShowPass]   = useState('password')
    const [error, setError]         = useState(false)
    const [loading, setLoading]     = useState(false)

    const handleShowPass = useCallback(()=>{
        let actualType = document.querySelector('#password input').getAttribute('type')

        actualType == 'password'
            ? setShowPass('text')
            : setShowPass('password')

    }, [])

    const tryAuth = useCallback(() => {
        setError(false)

        const email = document.querySelector('#email input').value
        const password = document.querySelector('#password input').value

        if(email.length < 3 || password.length < 3){

            setError(true)
            return false

        } else {

            setLoading(true)
            const data = {email, password, error}

            handleAuth(dispatch, data)
                .then(response => {
                    setLoading(!response)
                })
        }
    }, [])

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
                            <Input typeField="email" placeholder="Email" id="email" error={error}
                                leftImg={IconEmail} altLeftImg="Email"></Input>

                            <Input typeField={showPass} placeholder="Senha" id="password" error={error}
                                leftImg={IconPassword} altLeftImg="Senha"
                                rightImg={IconShowPassword} altrightImg="Mostrar Senha" clickRightImg={handleShowPass}></Input>

                            {error && (<p className="feedback">Credenciais informadas são inválidas, tente novamente.</p>)}

                            <Button label="ENTRAR" event={tryAuth}></Button>
                        </form>
                    </div>
                </div>
            </LoginStyles>
        </>
    )
}

export default Login