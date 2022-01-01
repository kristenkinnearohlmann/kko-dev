module.exports = {
  siteMetadata: {
    title: `Kristen's Developer Blog`,
    author: {
      name: `Kristen Kinnear-Ohlmann`,
      summary: `. I'm a full stack software engineer who lives and works in Minneapolis/St. Paul, Minnesota.`,
    },
    description: `Developer blog written by Kristen Kinnear-Ohlmann.`,
    siteUrl: `http://kristenkinnearohlmann.dev`,
    social: {
      email: `kristenkinnearohlmann@gmail.com`,
      github: `kristenkinnearohlmann`,
      linkedin: `kristenkinnearohlmann`,
      portfolio: `kristenkinnearohlmann#projects`,
      twitter: `kinnear_ohlmann`,
      wakatime: `@kinnear_ohlmann`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo512.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
