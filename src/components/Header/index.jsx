import React from 'react';
import { SiIfood, SiWhatsapp } from 'react-icons/si';
import { Container } from '../../utils/styles/styles';
import data from '../../utils/data/data.json';

import {
  Hamburguer, HeaderContainer, Logo, Nav, NavItem,
} from './styles';
import LogoKaramello from '../../images/logo-karamello.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <Container>
        <Logo
          src={LogoKaramello}
          alt="Karamello Sorvetes - Revenda açaí, sorvete de massa e picolé"
          title="Karamello Sorvetes - Revenda açaí, sorvete de massa e picolé"
        />

        <Nav show={menuOpen}>

          <NavItem show={menuOpen} target="_blank" href={data.contact[0].path}>
            <SiWhatsapp />
            Entrar em contato
          </NavItem>
          {/* <NavItem show={menuOpen} target="_blank" href={data.contact[1].path}>
            <SiIfood />
            Comprar agora
          </NavItem> */}
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
