import styled, { css } from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { device } from '../../utils/styles/devices';

const variable = {
  outline: css`
        background: ${colors.white};
        border: 2px solid ${colors.secondary};
        color: ${colors.primary};

        &:hover{
            background: ${colors.secondary};
            color: ${colors.white};
        }
    `,
  filled: css`
        background: ${colors.primary};
        border: 2px solid ${colors.primary};
        color: ${colors.white};

        &:hover{
            background: ${colors.primary};
            color: ${colors.white};
        }
    `,
};

export const ButtonComponent = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    font-size: 18px;
    border-radius: 8px;
    transition: all 0.3s;
    padding: 8px 8px;
    ${(props) => (props.var ? variable[props.var] : variable.filled)};


    @media ${device.md}{
        min-width: auto;
    }
`;
