import styled from 'styled-components'

import {colors, texts} from '../../themes/colors'

export const LoginStyles = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${colors.background};
    display: flex;
    justify-content: center;
    align-items: center;

    div.container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 348px;

        div.logo img{
            width: 295px;
            margin-bottom: 64px;
        }

        div.description{
            h1{
                ${texts.style11}
                margin-bottom: 25px;
            }

            p{
                line-height: 1.48;
                letter-spacing: 0.2px;
                text-align: center;
                color: ${colors.charcoalGrey};
                margin-bottom: 46px;
            }
        }
    }
`