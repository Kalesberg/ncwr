import React from "react"
import { Link } from 'gatsby'
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
          <Link activeClassName={styles.active} className={styles.link} to='/about'>
            <p>About</p>
          </Link>
          <Link activeClassName={styles.active} className={styles.link} to='/awareness-involvment'>
            <p>Awareness & Involvement</p>
          </Link>
          <Link activeClassName={styles.active} className={styles.link} to='/research'>
            <p>Research</p>
          </Link>
          <Link activeClassName={styles.active} className={styles.link} to='/resources'>
            <p>Resources</p>
          </Link>
          <Link activeClassName={styles.active} className={styles.link} to='/find-treatment'>
            <p>Find Treatment</p>
          </Link>
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
