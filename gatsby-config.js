module.exports = {
  siteMetadata: {
    title: 'Karamello Sorvetes',
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id: 2461471,
        sv: 6,
      },
    },
  ],
};
