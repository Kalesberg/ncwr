import React from "react"
import styles from "./header.module.scss"

export default () => {
  return (
    <div className="header-nav">
      <div className={styles.navbar}>
        <label htmlFor="togglericon" className={styles.toggler} />
        <input type="checkbox" id="togglericon" className={styles.toggler} />
        <div className={styles.brand}>
          <img src="logo.svg" />
        </div>
        <div className={styles.nav}>
          <a href="#">About</a>
          <a href="#">Awareness & Involvement</a>
          <a href="#">Research</a>
          <a href="#">Resources</a>
          <a href="#" className={styles.skewLink}>
            Find Treatment
          </a>
          <div className={styles.rightMenu}>
            <a href="#">
              <img src="/heart.svg" />
              <b>Donate</b>
            </a>
            <a href="#">
              <img src="/phone-outgoing.svg" />
              <span>
                Get help now <br />
                <b>800-123-4567</b>
              </span>
            </a>
            <a href="#" className={styles.searchLink}>
              <img src="/search.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
