import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { device } from '../../utils/styles/devices';

export const FooterItem = styled.div`
  display: flex;
`;

export const FooterTitle = styled.h4`
  font-size: 19px;
  color: ${colors.white};
  margin: 0 0 15px 0;
`;

export const Link = styled.a`
  color: ${colors.white};
  font-size: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;

  svg{
    margin-right: 10px;
    font-size: 24px;
  }
`;

export const FooterCopy = styled.footer`
    width: 100%;
    background: ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    span{
        color: ${colors.white};
        font-size: 14px;
        line-height: 22px;
        display: block;
        margin: 0 0 30px 0;

        @media ${device.md}{
            margin: 0;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.md}{
        width: 100%;
        max-width: 90%;
        justify-content: space-between;
        flex-direction: row;
    }
`;
