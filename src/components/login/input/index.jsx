import React from 'react'
import {InputStyles} from './styles'

const Input = ({typeField, placeholder, id,
    leftImg, altLeftImg,
    rightImg, altRightImg, clickRightImg}) => {
    return (
        <InputStyles id={id}>
            {leftImg && (<img src={leftImg} alt={altLeftImg}/>)}

            <input type={typeField} placeholder={placeholder}  autoComplete="new-password"/>

            {rightImg && (<img src={rightImg} alt={altRightImg} onClick={clickRightImg}/>)}
        </InputStyles>
    )
}

export default Input