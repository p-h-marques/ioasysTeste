import React from 'react'
import {InputStyles} from './styles'

import IconAlert from '../../../assets/images/alert.png'

const Input = ({

    typeField, placeholder, id, error,
    leftImg, altLeftImg,
    rightImg, altRightImg, clickRightImg

}) => {

    let classes = error ? 'error' : ''

    return (
        <InputStyles id={id} className={classes}>
            {leftImg && (<img src={leftImg} alt={altLeftImg}/>)}

            <input type={typeField} placeholder={placeholder} className={classes} autoComplete="new-password"/>

            {rightImg && !error && (<img src={rightImg} alt={altRightImg} onClick={clickRightImg}/>)}

            {error && (<img src={IconAlert} alt="Erro!"/>)}
        </InputStyles>
    )
}

export default Input