import React from 'react'
import { Link } from 'gatsby'
import styles from './understandingScience.module.scss'

export default ({ block }) => {
  
  return (
    <section className={styles.section}>
       <div className={styles.stepSectionBottom}>
        <div className={styles.stepSectionBottomInner}>
          <div className={styles.stepSectionBottomRight}>
            <h4>{ block.title }</h4>
            <span className={styles.wrapWhiteSpace}>{ block.body }</span>
            <button className={styles.btn}>{ block.button.label} <img src="/right-arrows.svg" /></button>
          </div>
          <div className={styles.stepSectionBottomLeft}>
            <img src="/00BA7DE0-487F-4389-9D46-460EA7DE968D.png" />
            <div className={styles.stepSectionBottomImags}><img src="/EFAA5FCF-B211.png" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}