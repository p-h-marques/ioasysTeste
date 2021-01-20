import React from 'react'
import {ButtonStyles} from './styles'

const Button = ({label, event}) => {
    return(
        <ButtonStyles onClick={event}>{label}</ButtonStyles>
    )
}

export default Button