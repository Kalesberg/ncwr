import React from 'react'
import styles from './homeResearch.module.scss'

export default ({ block }) => {
  
  return (
    <section className={styles.section}>
      <div className={styles.progressSection}>
        <div
          className={`${styles.progressSectionInner} animate__animated animate__fadeInRight`}
        >
          <div className={styles.progressSectionLeft}>
            <img src="/A2579DB5.jpg" />
          </div>
          <div className={styles.progressSectionRight}>
            <h4>{ block.heading }</h4>
            <span>
              { block.body }
            </span>
            <button className={styles.btn}>
              Discover the research{" "}
              <img style={{ marginBottom: 0 }} src="/right-arrows.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}