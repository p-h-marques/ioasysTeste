import React, {useCallback, useState, useContext} from 'react'
import {InputStyles} from './styles'

import AuthContext from '../../../store/auth/context'

import IconAlert from '../../../assets/images/alert.png'
import IconShowPassword from '../../../assets/images/show-password.png'
import IconHidePassword from '../../../assets/images/hide-password.png'

const Input = ({
    typeField, placeholder, id,
    img, altImg
}) => {
    const {stateAuth, dispatchAuth} = useContext(AuthContext)
    const [showPass, setShowPass]   = useState(typeField)
    const [iconPass, setIconPass]   = useState(IconShowPassword)

    const handleShowPass = useCallback(()=>{

        if(showPass == 'password'){
            setShowPass('text')
            setIconPass(IconHidePassword)
        } else {
            setShowPass('password')
            setIconPass(IconShowPassword)
        }

    }, [showPass])

    const clearErrors = useCallback(()=>{
        if(stateAuth.errors){
            dispatchAuth({
                type: 'authSingleUpdate',
                payload: {errors: false}
            })
        }
    }, [stateAuth])

    return (
        <InputStyles id={id} className={stateAuth.errors ? 'error' : ''}>
            {img && (<img src={img} alt={altImg}/>)}

            <input type={showPass} placeholder={placeholder} autoComplete="new-password"
                onChange={clearErrors}/>

            {typeField == 'password' && !stateAuth.errors && (
                <img src={iconPass} alt="Mostrar ou Exibir Senha" onClick={handleShowPass}/>
            )}

            {stateAuth.errors && (<img src={IconAlert} alt="Erro!"/>)}
        </InputStyles>
    )
}

export default Input