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
  title: 'Hmmm, vai um açaí?',
  imagem: Image,
  subtitle: 'Compre nossos produtos no atacado e revenda na sua casa',
  description: (
    <p>
      Com foco na venda de açaí, sorvete e picolé no atacado,
      temos condições especiais de pagamento, consultoria exclusiva em como
      montar sua sorveteria e aumentar suas vendas.
    </p>
  ),
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

            <Subtitle>{data.subtitle}</Subtitle>

            {
                data.description
            }

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
