import React from 'react';
import { Container } from '../../utils/styles/styles';

import {
  Hamburguer, HeaderContainer, Logo, Nav, NavItem,
} from './styles';
import LogoKaramello from '../../images/logo-karamello.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <Container>
        <Logo src={LogoKaramello} />

        <Nav show={menuOpen}>
          <NavItem show={menuOpen} href="/">Home</NavItem>
          <NavItem show={menuOpen} href="/">Page 2</NavItem>
          <NavItem show={menuOpen} href="/">Page 3</NavItem>
        </Nav>

        <Hamburguer className={`${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
          <span />
        </Hamburguer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
