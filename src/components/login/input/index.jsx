import React, {useCallback, useState} from 'react'
import {InputStyles} from './styles'

import IconAlert from '../../../assets/images/alert.png'
import IconShowPassword from '../../../assets/images/show-password.png'
import IconHidePassword from '../../../assets/images/hide-password.png'

const Input = ({
    typeField, placeholder, id, error,
    img, altImg
}) => {
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

    return (
        <InputStyles id={id} className={error ? 'error' : ''}>
            {img && (<img src={img} alt={altImg}/>)}

            <input type={showPass} placeholder={placeholder} autoComplete="new-password"/>

            {typeField == 'password' && !error && (
                <img src={iconPass} alt="Mostrar ou Exibir Senha" onClick={handleShowPass}/>
            )}

            {error && (<img src={IconAlert} alt="Erro!"/>)}
        </InputStyles>
    )
}

export default Input