import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default () => {
  return (
    <div className={styles.headerNav}>
      <div className={styles.navbar}>
        <input type="checkbox" id="togglericon" className={styles.toggler} />
        <label htmlFor="togglericon" className={styles.toggler} />
        <div className={styles.brand}>
          <img src="logo.svg" className={styles.desktopLogo} />
          <img src="logo.svg" className={styles.mobileLogo} />
        </div>
        <div className={styles.nav}>
          <Link
            activeClassName={styles.active}
            className={styles.link}
            to="/about"
          >
            <p>About</p>
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.link}
            to="/awareness-involvment"
          >
            <p>Awareness & Involvement</p>
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.link}
            to="/research"
          >
            <p>Research</p>
          </Link>
          <div className={styles.subnav}>
            <a href="#" className={styles.navLink}>
              Research
            </a>
            <div className={styles.subnavContent}>
              <div className={styles.subnavContentInner}>
                <div className={styles.subnavContentLeft}>
                  <div className={styles.subnavContentBox}>
                    <h3>Overview</h3>
                    <ul>
                      <li>
                        {" "}
                        <a className={styles.subLink} href="#">
                          Areas of focus
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className={styles.subLink} href="#">
                          Partners
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className={styles.subLink} href="#">
                          Facility
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.subnavContentBox}>
                    <h3>Research</h3>
                    <ul>
                      <li>
                        {" "}
                        <a className={styles.subLink} href="#">
                          Ongoing studies
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className={styles.subLink} href="#">
                          Completed studies
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className={styles.subLink} href="#">
                          Participate in studies
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className={styles.subLink} href="#">
                          Bio Samples
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className={styles.subLink} href="#">
                          H.E.A.L.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.subnavContentRight}>
                  <div
                    className={styles.subnavContentImageBox}
                    style={{ backgroundImage: 'url("/menuImage1.png")' }}
                  >
                    <div className={styles.imageBoxBottom}>
                      <p>01</p>
                      <span>[Research/highlight headline 1, TBD]</span>
                    </div>
                  </div>
                  <div
                    className={`${styles.subnavContentImageBox} ${styles.colorOrange}`}
                    style={{ backgroundImage: 'url("/menuImage2.png")' }}
                  >
                    <div className={styles.imageBoxBottom}>
                      <p>02</p>
                      <span>[Research/highlight headline 2, TBD]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            activeClassName={styles.active}
            className={styles.link}
            to="/resources"
          >
            <p>Resources</p>
          </Link>
        </div>
        <div className={styles.rightMenu}>
          <Link
            activeClassName={styles.active}
            className={styles.skewLink}
            to="/find-treatment"
          >
            <p>Find Treatment</p>
          </Link>
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
  )
}
