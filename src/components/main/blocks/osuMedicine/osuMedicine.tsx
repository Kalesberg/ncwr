import React from 'react'
import styles from './osuMedicine.module.scss'

export default ({ block }) => {
  
  return (
    <section className={styles.section}>
      <div className={styles.medicineSection}>
        <div className={styles.medicineSectionInner}>
          <div className={styles.medicineSectionLeft}>
            <img src={block.image} />
            <div className={styles.sectionLeftText}>
              <p> {block.address} { block.finder.text }: { block.finder.number }</p>
            </div>
          </div>
          <div className={styles.medicineSectionRight}>
            <h3>{block.title}</h3>
            <h5>{block.heading}</h5>
            <p> {block.body} </p>
            <a href="#" className={styles.moveButtonLink}>
              <span> {block.button.label} </span>
              <div className={styles.moveBtn}><img src="/right-arrows.svg" /></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}