import styled from 'styled-components';
import { colors } from './colors';
import { device } from './devices';

export const Container = styled.div`
    width: 100%;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: ${(props) => props.directionSM || 'row'};
    position: ${(props) => props.positionSM};

    @media ${device.md}{
        width: 100%;
        max-width: 90%;
        flex-direction: ${(props) => props.directionLG || 'row'};
        height: ${(props) => props.heightLG};
    }
`;

export const Section = styled.section`
    margin: ${(props) => props.margin};

    @media ${device.lg}{
        margin: ${(props) => props.marginLG};
    }
`;

export const H2 = styled.h2`
    margin: 0;
    font-size: 32px;
    position: relative;
    color: ${colors.secondary};
    font-family: 'Pacifico';

    span{
        z-index: -1;
        position: absolute;
        left: -1.75px;
        bottom: -1.75px;
        color: ${colors.primary};
    }

    @media ${device.lg}{
        font-size: 50px;
    }
`;
