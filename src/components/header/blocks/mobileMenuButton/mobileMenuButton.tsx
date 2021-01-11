import React from "react"
import styles from "./mobileMenuButton.module.scss"

export default () => {
  return (
    <>
      <input type="checkbox" id="togglericon" className={styles.toggler} />
      <label htmlFor="togglericon" className={styles.toggler} />
    </>
  )
}