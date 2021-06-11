import React from 'react';
import { Section, Container, H2 } from '../../utils/styles/styles';
import { Img, Content, Pannel } from './styles';
import Image from '../../images/picole-karamello-sorvetes.png';
import Tab from '../Tab';

const data = {
  title: 'nossos produtos',
  description: (
    <>
      <p>
        Produzidos com extrema qualidade, nossos açaís, sorvetes e picolés, são
        um sucesso em Suzano. Fabricados artesanalmente, temos diferentes linhas de
        produtos para o seu negócio!
      </p>
      <p>
        Nosso foco é vendas atacado, para comércios, mercadinhos e mercearias
        que desejam diversificar seus produtos e para quem deseja revender exclusivamente
        como uma sorveteria. Temos condições especiais de pagamento para compras
        no atacado.
      </p>
      <p>Veja abaixo nossas linhas de produtos:</p>
    </>
  ),
  products: [
    {
      title: 'Açaí',
      description: (
        <>
          <h3>Revenda açaí da Karamello Sorvetes</h3>
          <p>
            Fabricação própria de açaí com 5 sabores disponíveis e tamanhos
            de potes de 1L, 2L, 5L e 10L.
          </p>
          <ul>
            <li>Açaí com banana</li>
            <li>Açaí com cupuaçu</li>
            <li>Açaí com morango</li>
            <li>Açaí tradicional</li>
            <li>Açaí trufado</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Sorvete',
      description: (
        <>
          <h3>Revenda sorvete de massa da Karamello Sorvetes</h3>
          <p>
            Fabricação própria de sorvete de massa com mais de 25 sabores disponíveis e tamanhos
            de potes de 1L, 1.5L, 2L, 5L e 10L.
          </p>
          <ul>
            <li>Açaí com banana</li>
            <li>Açaí com cupuaçu</li>
            <li>Açaí com morango</li>
            <li>Açaí tradicional</li>
            <li>Açaí trufado</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Picolé',
      description: (
        <>
          <h3>Revenda picolé da Karamello Sorvetes</h3>
          <p>
            Fabricação própria de picolés tradicionais de massa com mais de 40
            sabores disponíveis.
          </p>
          <ul>
            <li>Açaí com banana</li>
            <li>Açaí com cupuaçu</li>
            <li>Açaí com morango</li>
            <li>Açaí tradicional</li>
            <li>Açaí trufado</li>
          </ul>
        </>
      ),
    },
  ],
};

const Catalog = () => (
  <Section margin="50px 0 0 0">
    <Container>
      <Pannel>
        <Content>
          <H2>
            {data.title}
            <span>{data.title}</span>
          </H2>

          {data.description}
        </Content>
        <Img src={Image} />
      </Pannel>
    </Container>
    <Tab data={data.products} />
  </Section>
);

export default Catalog;
