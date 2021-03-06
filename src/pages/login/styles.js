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
        width: 350px;

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

        div.login{
            width: 100%;
        }

        div.login form p.feedback{
            font-size: 0.76rem;
            line-height: 1.95;
            text-align: center;
            color: ${colors.danger};
            margin: -20px 0px -2px 0px;
        }
    }
`