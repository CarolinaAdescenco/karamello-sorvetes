import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/Layout';

import About from '../components/About';
import Banner from '../components/Banner';
import Catalog from '../components/Catalog';
import Maps from '../components/Maps';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Karamello Sorvetes</title>
      <link rel="canonical" href="http://karamellosorvetes.com.br" />
      <meta name="description" content="Karamello Sorvetes - Loja de fábrica, atacado e varejo do melhor sorvete, picolé e açaí da região de Suzano e Alto Tietê. Compre no açaí, sorvete e picolé no atacado para revenda" />
    </Helmet>
    <Banner />
    <Catalog />
    <About />
    <Maps />
  </Layout>
);

export default IndexPage;
