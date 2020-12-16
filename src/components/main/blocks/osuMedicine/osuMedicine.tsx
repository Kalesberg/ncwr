import React from 'react'
import styles from './osuMedicine.module.scss'

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
          <div className={styles.medicineSectionRight}>
            <h3>OSU Medicine</h3>
            <h5>Clinical and academic excellence with a heart for rural medicine.</h5>
            <p>OSU Medicine is proud to be the medical home of the National Center for Wellness and Recovery. With more than 100 clinic sites across Oklahoma, OSU Medicine is a premier healthcare provider whose passion for rural communities is part of its mission. <br /><br />From its Tulsa, Oklahoma campus, OSU Medicine teaches the next generation of caring physicians at the OSU College of Osteopathic Medicine. </p>
            <a href="#" className={styles.moveButtonLink}>
              <span>Discover OSU Medicine</span>
              <div className={styles.moveBtn}><img src="/right-arrows.svg" /></div>
            </a>
          </div>
        </div>
        <div className={styles.medicineSectionInner}>
          <div className={`${styles.medicineSectionRight} ${styles.colorGrey}`}>
            <h5>The nation's largest privately funded medical foundation dedicated to pain and addiction research.</h5>
            <p>The National Center for Wellness and Recovery is funded by the National Center for Addiction Studies and Treatment Foundation, created from Oklahoma’s watershed 2019 opioid settlement.</p>
            <a href="#" className={styles.moveButtonLink}>
              <span>Learn More</span>
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