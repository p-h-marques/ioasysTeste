import styled from 'styled-components'

import {colors} from '../../../themes/colors'

export const ButtonStyles = styled.button`
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
`
