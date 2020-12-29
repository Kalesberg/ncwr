import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { Footer, Header, Main } from '../../components'

import './global.scss'
import styles from './layout.module.scss'

type layoutProps = {
  children?: any,
  title: string,
  blocks?: [any]
}

export default ({ children, title: siteTitle = '', blocks }: layoutProps) => {
  const { site: { siteMetadata: { config: { description, title, titleDivider } } } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          config {
            description
            title
            titleDivider
          }
        }
      }
    }
  `)

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang='en' />
        <title>{siteTitle + titleDivider + `${title || '404: Page Not Found'}`}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Header />
      <Main blocks={blocks}>
        {children}
        {(blocks[0].template !== 'main-find-treatment') &&
          <Footer />
        }
      </Main>
    </div>
  )
}