import React from "react"
import styles from "./footer.module.scss"

import { Contact, FooterMap, Links, Logo, Social } from "./blocks"
import footerConfig from '../../../.forestry/content/settings/footer.json'

export default () => {
  const footerLogo = footerConfig.blocks.find(block => block.template === 'footer-logo')
  const footerMenu = footerConfig.blocks.find(block => block.template === 'footer-links')
  const footerSocial = footerConfig.blocks.find(block => block.template === 'footer-social')
  const footerContact = footerConfig.blocks.find(block => block.template === 'footer-contact')
  const footerMap = footerConfig.blocks.find(block => block.template === 'footer-map')
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLeft}>
          <Links block={footerMenu} />
          <Contact block={footerContact} />
          <Social block={footerSocial} />
          <Logo block={footerLogo} />
        </div>
        <div className={styles.footerRight}>
          <FooterMap block={footerMap} />
        </div>
      </div>
    </div>
  )
}
