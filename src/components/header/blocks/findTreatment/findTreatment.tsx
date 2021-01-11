import React from "react"
import { Link } from "gatsby"
import styles from "./findTreatment.module.scss"

export default ({ block, isMobile }) => {

  return (
    <Link
      activeClassName={styles.active}
      className={isMobile ? `${styles.skewLink} ${styles.mobile}` : `${styles.skewLink}`}
      to="/find-treatment"
    >
      <p>Find Treatment</p>
    </Link>
  )
}