import React from "react"
import { Link } from "gatsby"
import styles from "./logo.module.scss"

export default ({ block }) => {

  return (
    <div className={styles.brand}>
      <Link to="/">
        <img src={block.logo} className={styles.desktopLogo} />
        <img src="/favicon.png" className={styles.mobileLogo} />
      </Link>
    </div>
  )
}