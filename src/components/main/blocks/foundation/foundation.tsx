import React from 'react'
import styles from './foundation.module.scss'

export default ({ block }) => {
  
  return (
    <section className={styles.section}>
      <div className={styles.medicineSection}>
        <div className={styles.medicineSectionInner}>
          <div className={`${styles.medicineSectionRight} ${styles.colorGrey}`}>
            <h5>{ block.heading }</h5>
            <p> {block.body} </p>
            <a href="#" className={styles.moveButtonLink}>
              <span>{ block.button.label }</span>
              <div className={styles.moveBtn}><img src="/right-arrows.svg" /></div>
            </a>
          </div>
          <div className={styles.medicineSectionLeft}>
            <img src="/3372C57D-9E7F-4B28-B674-0C0ADFC9C212.png" />
          </div>
        </div>
      </div>
    </section>
  )
}