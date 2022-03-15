/* eslint-disable no-undef */
module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    //`gatsby-transformer-remark`,
    //`gatsby-remark-images`,
    `gatsby-plugin-image`,
    // // {
    // //   resolve: `gatsby-plugin-mdx`,
    // //   options: {
    // //     extensions: [`.mdx`, `.md`],
    // //     gatsbyRemarkPlugins: [
    // //       {
    // //         resolve: `gatsby-remark-images`,
    // //         // options: {
    // //         //   maxWidth: 590,
    // //         // },
    // //       },
    // //     ],
    // //   },
    // // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: `content`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/markdown/blogs_image`,
    //     name: `markdown-image`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/markdown/jobs`,
    //     name: `markdown-jobs`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/markdown/Code_MD`,
    //     name: `markdown-code`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
  siteMetadata: {
    title: 'Kodifly - Innovative A.I. and Software Solutions',
    description: 'Any description for Company'
  },
};
