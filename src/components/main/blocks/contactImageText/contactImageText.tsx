import React from "react"
import styles from "./contactImageText.module.scss"

export default ({ block }) => {
  return (
    <section className={styles.section}>
      <div className={styles.medicineSection}>
        <div className={styles.medicineSectionInner}>
          <div className={styles.medicineSectionLeft}>
            <img src="/C6936D75-21D1-4562-BE1F-B417817370ED.png" />
            <div className={styles.sectionLeftText}>
              <p className={styles.wrapWhiteSpace}>{block.address}</p>
            </div>
          </div>
          <div
            className={`${styles.medicineSectionRight} ${styles.colorWhite}`}
          >
            <h5>{block.heading} </h5>
            <p>{block.body}</p>
            <a href="#" className={styles.moveButtonLink}>
              <span>{block.button.label}</span>
              <div className={styles.moveBtn}>
                <img src="/right-arrows.svg" />
              </div>
            </a>
            {(block.numbers || []).map((number, index) => {
              return (
                <div key={index} className={styles.medicineSectionRightInner}>
                  <p>{number.text}</p>
                  <h3>{number.number}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
