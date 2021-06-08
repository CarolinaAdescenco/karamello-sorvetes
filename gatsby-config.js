module.exports = {
  siteMetadata: {
    title: "Karamello Sorvetes",
    description: "Karamello Sorvetes - Loja de fábrica, atacado e varejo do melhor sorvete, picolé e açaí da região de Suzano e Alto Tietê. Compre no açaí, sorvete e picolé no atacado para revenda",
    url: "http://karamellosorvetes.com.br"
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};


// {
//   resolve: "gatsby-plugin-google-analytics",
//   options: {
//     trackingId: "",
//   },
// },
