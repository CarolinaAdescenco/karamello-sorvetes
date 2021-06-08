import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { device } from '../../utils/styles/devices';

export const Info = styled.div`
    width: 90%;
    margin: 0 auto 50px auto;

    p{
        color: ${colors.white};
    }

    @media ${device.md}{
        margin: 0 auto 100px auto;
    }

    @media ${device.lg}{
        width: 100%;
        max-width: 600px;
        margin: 0 auto 0 0;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-end;

    width: 100%;
    height: 100%;

    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: top left;
    background-color: #00000082;
    background-blend-mode: multiply;

    height: 500px;


    @media ${device.lg}{
        align-items: center;

        background-size: auto;
        background-repeat: no-repeat;
    }
`;

export const Title = styled.h1`
    font-family: 'Pacifico';
    color: ${colors.white};
    position: relative;
    font-size: 32px;

    @media ${device.md}{
        font-size: 52px;
    }

    @media ${device.lg}{
        font-size: 72px;
        line-height: 72px;
        margin: 0 0 45px 0;
    }
`;

export const Subtitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: ${colors.white};
`;

export const ContainerAction = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 20px 0 0 0;

    button, a{
        margin: 15px 0 0 0;
    }

    @media ${device.md}{
        margin: 45px 0 0 0;
        flex-direction: row;

        button, a{
            margin: 0 15px 0 0;
            min-width: 170px;
        }
    }
`;
