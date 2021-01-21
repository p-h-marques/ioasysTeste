import styled from 'styled-components'

import {colors, gradients, texts} from '../../themes/colors'

export const AdminStyles = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${colors.background};
    display: flex;
    flex-direction: column;

    nav{
        background: ${gradients.pink};
        min-height: 158px;
        max-height: 158px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        div.default{
            img.logo{
                width: 234px;
            }

            img.search{
                width: 60px;
                position: absolute;
                right: 40px;
                cursor: pointer;
            }
        }

        div.search{
            display: flex;
            flex-direction: row;
            width: 100%;
            padding: 61px 42px 22px 42px;
            height: 100%;

            img.search{
                position: absolute;
                width: 60px;
            }

            input{
                border: 0px;
                border-bottom: 1px solid ${colors.whiteTwo};
                background-color: transparent!important;
                width: 100%;
                font-size: 2.125rem;
                color: ${colors.whiteTwo};
                padding: 0px 0px 19px 71px;

                &::placeholder{
                    color: ${colors.claret};
                }
            }

            img.close{
                width: 60px;
                position: absolute;
                right: 40px;
                cursor: pointer;
            }
        }
    }

    main{
        width: 100%;
        height: 100%;
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; */
        padding: 50px;

        div.instructions{
            width: 100%;
            height: 100%;
        }

        p{
            font-size: 2rem;
            line-height: 1.22;
            letter-spacing: -0.45px;
            color: ${colors.charcoalGrey};
            text-align: center;
        }

        div.enterprises{
            display: grid;
            row-gap: 30px;

            @media(min-width: 1400px){
                grid-template-columns: auto auto;
                column-gap: 30px;
            }
        }

        div.card{
            background-color: ${colors.whiteTwo};
            border-radius: 4.7px;
            width: 100%;
            padding: 27px 30px;
            display: flex;
            flex-direction: row;
            cursor: pointer;

            div.img img{
                width: 293px;
                margin-right: 39px;
            }

            div.infos{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                h2{
                    ${texts.style6}
                }

                p.type{
                    ${texts.style7}
                }

                p.country{
                    ${texts.style8}
                }
            }
        }
    }
`