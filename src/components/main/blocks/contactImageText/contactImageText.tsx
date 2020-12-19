import React from 'react'
import styles from './contactImageText.module.scss'

export default ({ block }) => {
  
  return (
    <section className={styles.section}>
      <div className={styles.medicineSection}>
        <div className={styles.medicineSectionInner}>
          <div className={styles.medicineSectionLeft}>
            <img src="/C6936D75-21D1-4562-BE1F-B417817370ED.png" />
            <div className={styles.sectionLeftText}>
              <p>1111 W. 17th Street<br />Tulsa, OK 74107<br /><br />Physician Finder: 918-599-4OSU</p>
            </div>
          </div>
          <div className={`${styles.medicineSectionRight} ${styles.colorWhite}`}>
            <h5>We are here to help, wherever you are in your journey to recovery. </h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            <a href="#" className={styles.moveButtonLink}>
              <span>Talk to someone today</span>
              <div className={styles.moveBtn}><img src="/right-arrows.svg" /></div>
            </a>
            <div className={styles.medicineSectionRightInner}>
              <p>Project Echo</p>
              <h3>555-123-0000</h3>
            </div>
            <div className={styles.medicineSectionRightInner}>
              <p>Project Echo</p>
              <h3>555-123-0000</h3>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}