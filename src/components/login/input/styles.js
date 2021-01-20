import styled from 'styled-components'

import {colors} from '../../../themes/colors'

export const InputStyles = styled.div`
    position: relative;
    margin-bottom: 33px;

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

    &.error{
        input{
            border-bottom: 0.6px solid ${colors.danger};
        }

        input+img{
            height: 22px;
            top: 0px;
        }
    }

`
