import React from 'react'
import styles from './deliverHope.module.scss'

export default ({ block }) => {
  
  return (
    <section className={styles.section}>
      <div className={styles.progressheroSubPage}>
        <div className={styles.progressheroSubPageInner}>
          <div className={styles.progressheroSubPageleft}>
            <h3>National Center for Wellness and Recovery</h3>
            <p>In 2018, the State of Oklahoma became the first and only state to sue and win a landmark case against a leading pharmaceutical manufacturer of opioid pain medication. The National Center for Wellness and Recovery (NCWR) at OSU Medicine was founded in 2019 through $177.5M in funding from this historic settlement. Through an unprecedented collaboration with Purdue Pharma, NCWR also received the world’s largest collection of biosamples and research molecules for pain and addiction research representing $1B in scientific data. Armed with these resources for researching addiction and providing greater access to evidence-based treatments, we are bringing hope to our communities and families devastated by America’s opioid epidemic. </p>
            <a href="#" className={styles.moveButtonLink}>
              <span>See how we’re leading <br />the charge</span>
              <div className={styles.moveBtn}>
                <img src="/right-arrows.svg" /></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}