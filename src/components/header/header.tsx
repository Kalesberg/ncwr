import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./header.module.scss"

import { Donate, FindTreatment, Links, Logo, MobileMenuButton, Phone, Search } from "./blocks"
import headerConfig from "../../../.forestry/content/settings/header.json"

export default () => {
  const headerLogo = headerConfig.blocks.find(block => block.template === 'header-logo')
  const headerLinks = headerConfig.blocks.find(block => block.template === 'header-links')
  const headerMegamenu = headerConfig.blocks.find(block => block.template === 'header-megamenu')
  const headerFindings = headerConfig.blocks.find(block => block.template === 'header-find-treatment')
  const headerDonate = headerConfig.blocks.find(block => block.template === 'header-donate')
  const headerPhone = headerConfig.blocks.find(block => block.template === 'header-phone')
  const headerSearch = headerConfig.blocks.find(block => block.template === 'header-search')
  return (
    <div className={styles.headerNav}>
      <div className={styles.navbar}>
        <MobileMenuButton />
        <Logo block={headerLogo} />
        <FindTreatment block={headerFindings} isMobile={true} />
        <Donate block={headerDonate} isMobile={true} />
        <div className={styles.nav}>
          <Links block={headerLinks} megamenuBlock={headerMegamenu} />
          <FindTreatment block={headerFindings} isMobile={false} />
          <Donate block={headerDonate} isMobile={false} />
          <div className={styles.mobileMenu}>
            <a href={headerDonate.link}>
              <img src={headerDonate.icon} />
              {headerDonate.label}
            </a>
            <a href={headerPhone.linkto}>
              <img src={headerPhone.icon} />
              {headerPhone.number}
            </a>
          </div>
        </div>
        <div className={styles.rightMenu}>
          <Phone block={headerPhone} />
          <Search block={headerSearch} />
        </div>
      </div>
    </div>
  )
}
