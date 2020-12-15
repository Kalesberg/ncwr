import React from "react"
import styles from "./footer.module.scss"

export default () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLeft}>
          <div className={styles.footerMenu}>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Awareness and involvement</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Find treatment</a>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2680200941522!2d72.81399821465135!3d21.181509285915798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e70a44594a7%3A0x5a026849d4baa7ad!2sRing%20Rd%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1608016073001!5m2!1sen!2sin"
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
