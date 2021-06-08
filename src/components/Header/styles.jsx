import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { device } from '../../utils/styles/devices';

export const HeaderContainer = styled.header`
    padding: 10px 0;
    overflow-x: hidden;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 150px;
`;

export const Nav = styled.nav`
    display: ${(props) => (props.show ? 'flex' : 'none')};
    width: 250px;
    background: ${(props) => (props.show ? colors.third : 'transparent')};

    transform: ${(props) => (props.show ? 'translateX(0px)' : 'translateX(-250px)')};
    transition: all .5s;
    position: absolute;
    z-index: 99;
    height: 100vh;
    right: 0px;
    top: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 1px 0px 20px 0px #000000;
    box-shadow: 1px 0px 20px 0px #000000;


    @media ${device.lg}{
        flex-direction: row;
        margin-left: auto;
        display: flex;
        position: inherit;
        height: auto;
        width: auto;
        transform: translateX(0);
        -webkit-box-shadow: none;
        box-shadow: none;
    }
`;

export const NavItem = styled.a`
    margin: 10px auto;
    color: ${(props) => (props.show ? colors.gray1 : colors.primary)};

    @media ${device.lg}{
        margin: 0 10px;
        font-size: 20px;
        color: ${colors.gray1};
    }
`;

export const Hamburguer = styled.div`
  width: 25px;
  height: 25px;
  margin-left: auto;
  align-self: center;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 9999;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${colors.white};
    border-radius: 3px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  span:nth-child(1) {
    width: 60%;
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 10px;
  }

  span:nth-child(4) {
    top: 20px;
  }

  &.open span{
    background: ${colors.primary};
  }

  &.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  @media ${device.lg}{
    display: none;
  }
`;
