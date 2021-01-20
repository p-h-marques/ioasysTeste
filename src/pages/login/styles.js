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

        div.login form{
            div.field{
                position: relative;
                margin-bottom: 33px;
            }

            img{
                width: 26px;
                height: 26px;
                position: absolute;
                left: 0px;
                top: 2px;
            }

            input+img{
                width: 22px;
                height: 14px;
                right: 0px;
                left: unset;
                top: 8px;
                cursor: pointer;
            }

            input{
                border: 0px;
                border-bottom: 0.6px solid ${colors.charcoalGrey};
                background-color: transparent!important;
                width: 100%;
                font-size: 1.36rem;
                color: ${colors.charcoalGreyTwo};
                padding: 0px 0px 4px 30px;
            }

            button{
                margin-top: 12px;
                display: inline-block;
                width: 100%;
                border: 0px;
                border-radius: 4px;
                background-color: ${colors.blue};
                padding: 16px;
                color: ${colors.whiteTwo};
                font-size: 1.2rem;
                cursor: pointer;

                &:hover{
                    background-color: ${colors.blue}d0;
                }
            }
        }
    }
`