import styled, { css } from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { device } from '../../utils/styles/devices';

export const Pannel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 50px 0;

    @media ${device.md}{
        flex-direction: row;
    }
`;

export const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;


    @media ${device.md}{
        flex-direction: column;
        min-width: 200px;
        max-width: 200px;
    }
`;

export const Li = styled.li`
    color: ${colors.black};
    padding: 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    transition: all 0.2s;

    @media ${device.md}{
        padding: 15px 15px 15px 30px;
    }

    ${
  (props) => props.selected && css`
            background: ${colors.gray};
            color: ${colors.primary};

            &:before{
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                background: ${colors.primary};
                left: 0;
                top: 0;
            }

            @media ${device.md}{
                &:before{
                    content: '';
                    width: 5px;
                    height: 100%;
                    left: 0;
                    top: 0;
                }
            }

        `
}
`;

export const Content = styled.div`
    background: ${colors.gray};
    width: -webkit-fill-available;
    height: 100%;
    max-height: 100%;
    padding: 15px 20px;
    flex: 1;

    @media ${device.md}{
        width: 100%;
    }
`;

export const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
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
