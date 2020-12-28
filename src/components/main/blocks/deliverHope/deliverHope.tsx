import React from 'react'
import styles from './deliverHope.module.scss'

export default ({ block }) => {
  
  return (
    <section className={styles.section}>
      <div className={styles.progressheroSubPage}>
        <div className={styles.progressheroSubPageInner}>
          <div className={styles.progressheroSubPageleft}>
            <h3>{ block.heading }</h3>
            <p>{ block.text }</p>
            <a href="#" className={styles.moveButtonLink}>
              <span className={styles.wrapWhiteSpace}>{ block.button.label }</span>
              <div className={styles.moveBtn}>
                <img src="/right-arrows.svg" /></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}