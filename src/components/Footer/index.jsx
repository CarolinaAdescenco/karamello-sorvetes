import React from 'react';
import * as Icon from 'react-icons/fi';

import data from '../../utils/data/data.json';

import {
  FooterCopy, FooterItem, Link, Container,
} from './styles';

const Footer = () => {
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

    <FooterCopy>
      <Container>
        <span>
          &copy; Copyright 2021 - Karamello Sorvetes
        </span>

        <FooterItem>
          {
            data.social.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                target="_blank"
              >
                {getIcon(item.icon)}

              </Link>
            ))
          }
        </FooterItem>
      </Container>
    </FooterCopy>
  );
};

export default Footer;
