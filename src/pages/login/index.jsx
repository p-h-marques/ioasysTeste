import React, {useCallback, useState} from 'react'
import {LoginStyles} from './styles'

import Input from '../../components/login/input'
import Button from '../../components/login/button'

import ImgLogo from '../../assets/images/logo-home.png'
import IconEmail from '../../assets/images/email.png'
import IconPassword from '../../assets/images/password.png'
import IconShowPassword from '../../assets/images/show-password.png'

const Login = () => {
    const [showPass, setShowPass] = useState('password')

    const handleShowPass = useCallback(()=>{
        let actualType = document.querySelector('#password input').getAttribute('type')

        actualType == 'password'
            ? setShowPass('text')
            : setShowPass('password')

    }, [])

    return (
        <LoginStyles>
            <div className="container">
                <div className="logo">
                    <img src={ImgLogo} alt="ioasys"/>
                </div>

                <div className="description">
                    <h1>BEM VINDO AO<br />EMPRESAS</h1>
                    <p>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>
                </div>

                <div className="login">
                    <form>
                        <Input typeField="email" placeholder="Email" id="email"
                            leftImg={IconEmail} altLeftImg="Email"></Input>

                        <Input typeField={showPass} placeholder="Senha" id="password"
                            leftImg={IconPassword} altLeftImg="Senha"
                            rightImg={IconShowPassword} altrightImg="Mostrar Senha" clickRightImg={handleShowPass}></Input>

                        <Button label="ENTRAR"></Button>
                    </form>
                </div>
            </div>
        </LoginStyles>
    )
}

export default Login