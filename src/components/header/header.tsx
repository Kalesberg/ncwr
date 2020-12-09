import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from './header.module.scss'
import { Donate, FindTreatment, Links, Logo, MegaMenu, MobileMenuButton, Phone, Search } from './blocks'

export default () => {
  const { site: { siteMetadata: { header: { blocks } } } } = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        header {
          blocks {
            icon
            label
            link
            linkto
            logo
            number
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
            return block.template === 'header-donate' ? (
              <Donate key={i} block={block} />
            ) : block.template === 'header-find-treatment' ? (
              <FindTreatment key={i} block={block} />
            ) : block.template === 'header-links' ? (
              <Links key={i} block={block} />
            ) : block.template === 'header-logo' ? (
              <Logo key={i} block={block} />
            ) : block.template === 'header-megamenu' ? (
              <MegaMenu key={i} block={block} />
            ) : block.template === 'header-mobile-button' ? (
              <MobileMenuButton key={i} block={block} />
            ) : block.template === 'header-phone' ? (
              <Phone key={i} block={block} />
            ) : block.template === 'header-search' ? (
              <Search key={i} block={block} />
            
            ) : <p key={i} className={styles.title}>{block.template} does not exist</p>
          })}
        </div>
      ) : null}
    </header>
  )
}