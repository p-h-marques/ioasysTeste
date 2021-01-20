import React, {useCallback, useState, useContext} from 'react'
import {LoginStyles} from './styles'

import AuthContext from '../../store/context/AuthContext'
import {handleAuth} from '../../store/actions'

import Input from '../../components/login/input'
import Button from '../../components/login/button'

import ImgLogo from '../../assets/images/logo-home.png'
import IconEmail from '../../assets/images/email.png'
import IconPassword from '../../assets/images/password.png'
import IconShowPassword from '../../assets/images/show-password.png'

const Login = () => {
    const {state, dispatch}         = useContext(AuthContext)
    const [showPass, setShowPass]   = useState('password')
    const [error, setError]         = useState(false)

    const handleShowPass = useCallback(()=>{
        let actualType = document.querySelector('#password input').getAttribute('type')

        actualType == 'password'
            ? setShowPass('text')
            : setShowPass('password')

    }, [])

    const handleAuth = useCallback(event => {
        console.log(event)
    }, [])

    return (
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

                        <Button label="ENTRAR" event={handleAuth}></Button>
                    </form>
                </div>
            </div>
        </LoginStyles>
    )
}

export default Login