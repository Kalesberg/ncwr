import React from 'react'
import styles from './understandingScience.module.scss'

export default ({ block }) => {
  
  return (
    <section className={styles.section}>
       <div className={styles.stepSectionBottom}>
        <div className={styles.stepSectionBottomInner}>
          <div className={styles.stepSectionBottomRight}>
            <h4>Understanding the science behind addiction helps us understand others.</h4>
            <span>Our scientific research into how pain and opioid use affect the human brain is crucial to finding solutions and removing stigma. Our research may also unlock the possibility of non-addictive pain medication alternatives for the future. 
              <br /><br />The more we know, the better our treatment options and the greater our compassion for those impacted by opioids.</span>
            <button className={styles.btn}>Discover the research <img src="/right-arrows.svg" /></button>
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