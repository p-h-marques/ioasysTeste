import React from 'react'
import {LoadingStyles} from './styles'
import ImgLoading from '../../../assets/images/loader.png'

const Loading = () => {
    return (
        <LoadingStyles>
            <img src={ImgLoading} alt="Autenticando..."/>
        </LoadingStyles>
    )
}

export default Loading