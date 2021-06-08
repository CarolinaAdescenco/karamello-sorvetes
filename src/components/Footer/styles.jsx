import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { device } from '../../utils/styles/devices';

export const FooterContainer = styled.footer`
    background: ${colors.primary};
    padding: 30px 0;
    bottom: 0;
    width: 100%;

    @media ${device.md}{
      height: 100px;
    }
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 150px;
`;

export const FooterItem = styled.div`
  display: flex;
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  width: 100%;

  @media ${device.lg}{
    width: 50%;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 19px;
  color: ${colors.white};
  margin: 0 0 15px 0;
`;

export const Link = styled.a`
  color: ${colors.white};
  font-size: 17px;
  cursor: pointer;

  display: flex;
  align-items: center;

  svg{
    margin-right: 15px;
    font-size: 24px;
  }
`;
