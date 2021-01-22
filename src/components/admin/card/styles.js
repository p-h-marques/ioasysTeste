import styled from 'styled-components'

import {colors, texts} from '../../../themes/colors'

export const CardStyles = styled.div`
    background-color: ${colors.whiteTwo};
    border-radius: 4.7px;
    width: 100%;
    padding: 27px 30px;
    display: flex;
    flex-direction: row;
    cursor: pointer;

    &:hover{
        background-color: ${colors.white};
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
`