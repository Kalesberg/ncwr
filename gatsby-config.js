const config = require('./.forestry/content/settings/config.json')
const header = require('./.forestry/content/settings/header.json')
const footer = require('./.forestry/content/settings/footer.json')

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    config,
    header,
    footer,
    ...config
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/.forestry/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // 'gatsby-remark-relative-images',
          'gatsby-remark-normalize-paths',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-minify-classnames',
      options: {
        dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
        enableOnDevelopment: false
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.title,
        start_url: '/',
        background_color: '#F92A35',
        theme_color: '#F92A35',
        display: 'standalone',
        icon: `${__dirname}/static${config.favicon}`
      }
    },
    'gatsby-plugin-remove-console',
    `gatsby-plugin-offline`,
    'html-react-parser',
    'react-markdown'
  ],
}
