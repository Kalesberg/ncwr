import React from "react"
import styles from "./testimonial.module.scss"

export default ({ block }) => {
  return (
    <section className={styles.section}>
      <div className={styles.testimonySection}>
        <div className={styles.testimonySectionInner}>
          <div className={styles.testimonyImages}>
            <img src="/testimony-section-bg.png" />
            <div className={styles.testimonyImagesPng}>
              <img src="/3DC42E68-80CB-4FB6-8DB1-65605EFE8CA1.png" />
            </div>
          </div>
          <div className={styles.testimonySectionText}>
            <h2 className={styles.wrapWhiteSpace}>
              { block.quote }
            </h2>
            <p className={styles.wrapWhiteSpace}>
              { block.text }
            </p>
            <button className={styles.btn}>
              {block.button.label}
              <img style={{ marginBottom: 0 }} src="/right-arrows-1.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
