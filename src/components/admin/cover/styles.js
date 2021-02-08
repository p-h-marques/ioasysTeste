import styled from 'styled-components'

import {colors} from '../../../themes/colors'

export const CoverStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 293px;
    margin-right: 39px;
    height: 160px;
    background-color: #7dc075;

    .details &{
       height: 295px!important;
       width: 100%;
       max-width: unset;

        @media(max-width: 576px){
           height: 120px!important;

           h2{
               font-size: 2.5rem;
           }
        }
    }

    h2{
        font-size: 4.813rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${colors.whiteTwo};
    }

    @media(max-width: 991px){
        margin: 0px;
    }
`