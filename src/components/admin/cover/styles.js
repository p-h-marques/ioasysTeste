import styled from 'styled-components'

import {colors} from '../../../themes/colors'

export const CoverStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 293px;
    margin-right: 39px;
    height: 160px;
    background-color: #7dc075;

    .details &{
       height: 295px!important;
       width: 100%;
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
`