import React from 'react';
import * as Icon from 'react-icons/fi';
import { SiIfood, SiWhatsapp } from 'react-icons/si';

import { Container } from '../../utils/styles/styles';
import { contact, social } from '../../utils/data/data.json';

import {
  FooterContainer, FooterItem, FooterTitle, Link,
} from './styles';

const Footer = () => {
  const whatsapp = contact[0];
  const ifood = contact[1];

  // eslint-disable-next-line consistent-return
  function getIcon(icon) {
    switch (icon) {
      case 'FiInstagram':
        return <Icon.FiInstagram />;
      case 'FiFacebook':
        return <Icon.FiFacebook />;
      case 'FiFlag':
        return <Icon.FiFlag />;
      case 'FiPhone':
        return <Icon.FiPhone />;
      default:
        break;
    }
  }

  return (
    <FooterContainer>
      <Container directionSM="column">
        <FooterItem margin="0 0 30px 0" direction="column">
          <FooterTitle>Visite nossas redes sociais</FooterTitle>
          <FooterItem>
            {
                social.map((item) => (
                  <Link key={item.name} href={item.path} target="_blank">{getIcon(item.icon)}</Link>
                ))
            }
          </FooterItem>
        </FooterItem>
        <FooterItem margin="0 0 30px 0" direction="column">
          <FooterTitle>Contatos</FooterTitle>
          <FooterItem margin="0 0 10px 0">
            <Link href={whatsapp.path} target="_blank">
              <SiWhatsapp />
              {whatsapp.additional}
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href={ifood.path} target="_blank">
              <SiIfood />
              {ifood.additional}
            </Link>
          </FooterItem>
        </FooterItem>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
