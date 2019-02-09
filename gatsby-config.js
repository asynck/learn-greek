module.exports = {
  siteMetadata: {
    title: `Learn Greek`,
    description: `Learn some simple greek words`,
    author: `@lmeikle`,
  },
  pathPrefix: '/learn-greek',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Learn Greek`,
        short_name: `Greek`,
        start_url: `/`,
        background_color: `#296997`,
        theme_color: `#296997`,
        display: `minimal-ui`,
        icon: `src/images/greek-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
};
