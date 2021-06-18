import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/Layout';

import About from '../components/About';
import Banner from '../components/Banner';
import Catalog from '../components/Catalog';
import Maps from '../components/Maps';

import ImageKaramello from '../images/logo-karamello-sorvetes.jpeg';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Karamello Sorvetes - Loja de fábrica açaí, sorvete e picolé | Vendas no atacado</title>
      <link rel="canonical" href="https://karamellosorvetes.com.br" />
      <meta name="description" content="Karamello Sorvetes, compre no atacado e varejo o melhor sorvete, picolé e açaí da região de Suzano e Alto Tietê, direto da fábrica! Compre açaí, sorvete e picolé no atacado para revenda." />
      <meta name="robots" content="index, follow" />

      <meta property="og:locale" content="pt-BR" />
      <meta property="og:url" content="https://karamellosorvetes.com.br" />
      <meta property="og:title" content="Fabricante e distribuidora de açaí, sorvete e picolé." />
      <meta property="og:site_name" content="Karamello Sorvetes" />
      <meta property="og:description" content="Karamello Sorvetes, compre no atacado e varejo o melhor sorvete, picolé e açaí da região de Suzano e Alto Tietê, direto da fábrica! Compre açaí, sorvete e picolé no atacado para revenda." />

      <meta property="og:image" content={ImageKaramello} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
    </Helmet>
    <Banner />
    <Catalog />
    <About />
    <Maps />
  </Layout>
);

export default IndexPage;
