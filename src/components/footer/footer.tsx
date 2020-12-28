import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"

export default () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLeft}>
          <div className={styles.footerMenu}>
            <ul>
              <Link to='/about'>
                <a href="#">About</a>
              </Link>
              <li>
                <Link to='/awareness-involvment'>Awareness and involvement</Link>
              </li>
              <li>
                <Link to='/#'>Research</Link>
              </li>
              <li>
                <Link to='/resources'>Resources</Link>
              </li>
              <li>
                <Link to='/find-treatment'>Find treatment</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <h3>Contact us</h3>
            <p>
              Main campus
              <br />
              1111 W. 17th Street
              <br />
              Tulsa, OK 74107
            </p>
          </div>
          <div className={styles.footerMenuText}>
            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLogo}>
            <img src="/footer-logo.svg" />
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.googleMap}>
			<div className={styles.mapBtn}>
			 <button className={styles.btn}>Get treatment in your area <img src="/right-arrows.svg" /></button>
            </div>
			<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178171.1279347553!2d-107.74579769601361!3d38.93122833857192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1608198099966!5m2!1sen!2sin"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
