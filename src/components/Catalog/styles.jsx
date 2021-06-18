import styled from 'styled-components';
import { device } from '../../utils/styles/devices';

export const Pannel = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.lg}{
        flex-direction: row;
    }
`;

export const Img = styled.img`
    width: 100%;
    display: none;

    @media ${device.lg}{
        max-width: 50%;
        display: flex;
    }
`;

export const Content = styled.article`
    margin: 0 auto 0 0;
    align-self: center;
    width: 100%;

    @media ${device.lg}{
        width: 40%;
    }
`;
