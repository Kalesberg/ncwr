import React from "react"
import styles from "./overviewWithMedia.module.scss"

export default ({ block }) => {
  return (
    <section className={styles.section}>
      <div className={styles.progressSection}>
        <div
          className={`${styles.progressSectionInner} animated animatedFadeInUp fadeInUp`}
        >
          <div className={styles.progressSectionLeft}>
            <h3>{ block.heading }</h3>
            <p>
              { block.largeText }
            </p>
          </div>
          <div className={styles.progressSectionRight}>
            <h4>
            { block.smallText }
            </h4>
            <div className={styles.progressSectionVideos}>
              <img src="/A47E3281.jpg" />
              <div className={styles.playBtn}>
                <img src="/play.svg" />
              </div>
            </div>
            <p>
              The neurological effects <br />
              of extended opioid use
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
