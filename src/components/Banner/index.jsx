import React from 'react';
import { Section, Container } from '../../utils/styles/styles';
import {
  ContainerAction, Content, Info, Subtitle, Title,
} from './styles';
import Image from '../../images/banner-acai-karamello-sorvetes.png';
import Image2 from '../../images/karamello-sorvetes-banner.jpeg';
import Action from '../Action';

import { contact } from '../../utils/data/data.json';

const data = {
  title: 'Açaí é vida',
  imagem: Image,
};

const Banner = () => {
  const whatsapp = contact[0];
  const ifood = contact[1];

  return (
    <Section>
      <Content bg={Image2}>
        <Container>
          <Info>
            <Title>
              {data.title}
            </Title>

            <Subtitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Subtitle>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              exercitationem, ipsam et nisi laudantium inventore dolore est consectetur
              vitae assumenda expedita! Eos molestias expedita, non mollitia dolor quaerat
              maiores nihil?
            </p>

            <ContainerAction>
              <Action
                type="a"
                target="_blank"
                href={whatsapp.path}
                variable="filled"
                name="Entre em contato"
              />

              <Action
                type="a"
                target="_blank"
                href={ifood.path}
                variable="outline"
                name="Comprar agora"
              />
            </ContainerAction>
          </Info>
        </Container>
      </Content>
    </Section>
  );
};

export default Banner;
