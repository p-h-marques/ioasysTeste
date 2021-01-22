import React from 'react'
import {CoverStyles} from './styles'

const Cover = ({id, className}) => {
    return (
        <CoverStyles className={className}>
            <h2>E{id}</h2>
        </CoverStyles>
    )
}

export default Cover