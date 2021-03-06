import styled from 'styled-components'

import {colors, gradients} from '../../themes/colors'

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

            @media(max-width: 576px){
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                padding: 0px 15px;

                img.logo{
                    width: 160px;
                    height: 40px;
                }

                img.search{
                    position: unset;
                    width: 30px;
                }
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

            @media(max-width: 576px){
                padding: 30px 15px;
                align-items: center;

                img.search{
                    width: 30px;
                    padding-bottom: 10px;
                }

                input{
                    font-size: 1.5rem;
                    padding: 0px 0px 10px 40px;
                }

                img.close{
                    width: 30px;
                    padding-bottom: 10px;
                    right: 15px;
                }
            }
        }

        div.enterprise{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 80px 42px 24px 42px;

            img{
                width: 60px;
                cursor: pointer;
            }

            span{
                margin-left: 80px;
                font-size: 2.125rem;
                line-height: 2.125rem;
                color: ${colors.whiteTwo}
            }

            @media(max-width: 576px){
                img{
                    width: 30px;
                }

                span{
                    font-size: 1.5rem;
                    line-height: 1.5rem;
                    margin-left: 30px;
                }
            }
        }
    }

    main{
        width: 100%;
        min-height: calc(100vh - 158px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 44px;

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
            row-gap: 44px;
            width: 100%;
            column-gap: 30px;

            @media(min-width: 767px){
                grid-template-columns: auto auto;
            }

            @media(min-width: 991px){
                grid-template-columns: auto;
            }

            @media(min-width: 1400px){
                grid-template-columns: auto auto;
            }
        }

        div.details{
            background-color: ${colors.whiteTwo};
            border-radius: 4.7px;
            width: 100%;
            padding: 48px 75px;
            display: flex;
            flex-direction: column;

            img{
                width: 100%;
            }

            p{
                margin-top: 49px;
                font-size: 2.125rem;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                text-align: left;
                color: ${colors.warmGrey};
            }

            @media(max-width: 576px){
                padding: 40px 20px;

                p{
                    font-size: 1.5rem;
                }
            }
        }
    }
`