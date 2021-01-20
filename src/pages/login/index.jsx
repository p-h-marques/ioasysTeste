import React, {useCallback, useState} from 'react'
import {LoginStyles} from './styles'

import ImgLogo from '../../assets/images/logo-home.png'
import IconEmail from '../../assets/images/email.png'
import IconPassword from '../../assets/images/password.png'
import IconShowPassword from '../../assets/images/show-password.png'

const Login = () => {
    const [showPass, setShowPass] = useState('password')

    const handleShowPass = useCallback(()=>{
        let actualType = document.querySelector('.password').getAttribute('type')

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
                        <div className="field">
                            <img src={IconEmail} alt="Email"/>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="field">
                            <img src={IconPassword} alt="Senha"/>
                            <input className="password" type={showPass} autoComplete="new-password" placeholder="Senha"/>
                            <img src={IconShowPassword} alt="Senha"
                                onClick={handleShowPass}/>
                        </div>
                        <button>ENTRAR</button>
                    </form>
                </div>
            </div>
        </LoginStyles>
    )
}

export default Login