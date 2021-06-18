import React from 'react';
import { Container, H2, Section } from '../../utils/styles/styles';
import { Pannel } from './styles';

const About = () => (
  <Section>
    <Container>
      <Pannel>
        <H2>
          <span>quem somos</span>
          quem somos
        </H2>

        <p>
          A Karamello Sorvetes está há mais de 5 anos no ramo de fabricação e
          comercialização de sorvetes de massa, picolés e açaís. Estamos localizados
          em Suzano e atendemos clientes em todo Alto Tietê, como Mogi das Cruzes,
          Itaquaquecetuba, Poá, entre outras cidades.
        </p>

        <p>
          Buscando sempre inovar em cada um de nossos produtos, trazemos frequentemente
          novidades aos nossos clientes. Afinal quem não resiste a um açaí? Ainda mais quando
          o açaí é com banana, morango ou o nosso delicioso e irresistível açaí trufado...
        </p>

        <p>
          Contamos também com duas lojas próprias em Suzano, localizadas no supermercados
          <a href="https://goo.gl/maps/zCEWLZsZ7eC9PS2x7" target="_blank" rel="noreferrer"> Semar do Raffo</a>
          {' '}
          e
          {' '}
          <a href="https://goo.gl/maps/ryp1WYN35iuQn7hz9" target="_blank" rel="noreferrer">Nagumo Dona Benta</a>
          . Além de nossas lojas próprias, fornecemos nossos produtos de forma
          exclusiva para sorveterias em Suzano, Mogi das Cruzes, Itaquaquecetuba.
        </p>

      </Pannel>
    </Container>
  </Section>
);

export default About;
