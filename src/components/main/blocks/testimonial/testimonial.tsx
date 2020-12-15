import React from "react"
import styles from "./testimonial.module.scss"

export default ({ block }) => {
  return (
    <section className={styles.section}>
      <div className={styles.testimonySection}>
        <div className={styles.testimonySectionInner}>
          <img style={{ marginBottom: 0 }} src="/104D247C.png" />
          <div className={styles.testimonySectionText}>
            <h2>
              “I’m Jenny. I’m a <br />
              firefighter. And I’m <br />a survivor.”
            </h2>
            <p>
              If you need answers or treatment we <br />
              can help you too.
            </p>
            <button className={styles.btn}>
              Discover the research{" "}
              <img style={{ marginBottom: 0 }} src="/right-arrows-1.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
