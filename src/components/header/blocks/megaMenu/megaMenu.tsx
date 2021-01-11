import React from 'react'
import styles from './megaMenu.module.scss'

export default ({ block }) => {

  return (
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
        <div className={`${styles.subnavContentRight} animated animate__fadeIn`}>
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
  )
}