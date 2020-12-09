import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './footer.module.scss'
import { Contact, FooterMap, Links, Logo, Social } from './blocks'

export default () => {
  const { site: { siteMetadata: { footer: { blocks } } } } = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        footer {
          blocks {
            address
            button {
              icon
              label
            }
            google_maps_link
            heading
            image
            logo
            template
          }
        }
      }
    }
  }`)
  return (
    <header className={styles.header} id='header'>
      {blocks && blocks.length ? (
        <div className={styles.blocks}>
         {blocks && blocks.map((block, i) => {
            return block.template === 'footer-contact' ? (
              <Contact key={i} block={block} />
            ) : block.template === 'footer-map' ? (
              <FooterMap key={i} block={block} />
            ) : block.template === 'footer-links' ? (
              <Links key={i} block={block} />
            ) : block.template === 'footer-logo' ? (
              <Logo key={i} block={block} />
            ) : block.template === 'footer-social' ? (
              <Social key={i} block={block} />
            
            ) : <p key={i} className={styles.title}>{block.template} does not exist</p>
          })}
        </div>
      ) : null}
    </header>
  )
}