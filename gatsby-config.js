const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Christian Thomson`,
    description: `Christian Thomson`,
    author: `Gatsboy Web <hello@gatsboy.com>`,
    phoneNumber: `07946319906`,
    email: `info@executivetransfers.co`,
    siteUrl: `https://executivetransfers.co`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["CondensedRegular, CondensedBold, SlabRegular, SlabBold, MenloRegular, MenloBold"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christian Thomson`,
        short_name: `CT`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/logo.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          };
        },
      },
    },
    `gatsby-plugin-netlify-headers`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
