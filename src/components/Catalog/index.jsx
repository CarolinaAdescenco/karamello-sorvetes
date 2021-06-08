import React from 'react';
import { Section, Container, H2 } from '../../utils/styles/styles';
import { Img, Content, Pannel } from './styles';
import Image from '../../images/picole-karamello-sorvetes.png';
import Tab from '../Tab';

const Catalog = () => (
  <Section margin="50px 0 0 0">
    <Container>
      <Pannel>
        <Content>
          <H2>
            nossos produtos
            <span>nossos produtos</span>
          </H2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Minima eaque eum, dolores ipsum id ipsam! Perferendis iste
            natus id excepturi eum, quis soluta animi, quasi obcaecati quas,
            adipisci corporis nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Minima eaque eum, dolores ipsum id ipsam! Perferendis iste
            natus id excepturi eum, quis soluta animi, quasi obcaecati quas,
            adipisci corporis nulla.
          </p>
        </Content>
        <Img src={Image} />
      </Pannel>
    </Container>
    <Tab />
  </Section>
);

export default Catalog;
