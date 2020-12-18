import React from "react"
import styles from "./research.module.scss"

export default ({ block }) => {

  return (
    <section className={styles.section}>
      <div className={styles.blogSection}>
        <div className={styles.blogSectionInner}>
          <div className={styles.blogSectionLeft}>
            <h3>Research</h3>
            <ul>
              <li>
                <a href="#" className={styles.active}>Ongoing studies</a>
              </li>
              <li>
                <a href="#">Completed studies</a>
              </li>
              <li>
                <a href="#">Participate in studies</a>
              </li>
              <li>
                <a href="#">Bio Samples</a>
              </li>
              <li>
                <a href="#">H.E.A.L.</a>
              </li>
            </ul>
            <button className={styles.btn}>See the research<img src="/right-arrows.svg" /></button>
          </div>
          <div className={styles.blogSectionRight}>
            <div className={styles.blogBoxTitle}>
              <h5>Research // Ongoing studies</h5>
              <form action="#" method="post" className={styles.searchBox}>
                <input type="search" placeholder="91234" />
                <img src="/search-color.png" />
              </form>
            </div>
            <div className={styles.blogBox}>
              <img src="/39EE077D-885F-44E4-A0F5-C317C99A4784.png" />
              <div className={styles.blogBoxText}>
                <span>Posted 01/10<span>
                    <h2>Research title here limit to 50 characters</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </span></span></div>
            </div>
            <div className={styles.blogBox}>
              <img src="/F0E9C945-1F81-4367-BB64-C7668465959C.png" />
              <div className={styles.blogBoxText}>
                <span>Posted 01/10<span>
                    <h2>Research title here limit to 50 characters</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </span></span></div>
            </div>
            <div className={styles.blogBox}>
              <img src="/24CC66B3-24A9-4D2F-9726-B982CBA8D7DF.png" />
              <div className={styles.blogBoxText}>
                <span>Posted 01/10<span>
                    <h2>Research title here limit to 50 characters</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </span></span></div>
            </div>
            <div className={styles.blogBox}>
              <img src="/39EE077D-885F-44E4-A0F5-C317C99A4784.png" />
              <div className={styles.blogBoxText}>
                <span>Posted 01/10<span>
                    <h2>Research title here limit to 50 characters</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </span></span></div>
            </div>
            <div className={styles.blogBox}>
              <img src="/F0E9C945-1F81-4367-BB64-C7668465959C.png" />
              <div className={styles.blogBoxText}>
                <span>Posted 01/10<span>
                    <h2>Research title here limit to 50 characters</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </span></span></div>
            </div>
            <div className={styles.blogBox}>
              <img src="/24CC66B3-24A9-4D2F-9726-B982CBA8D7DF.png" />
              <div className={styles.blogBoxText}>
                <span>Posted 01/10<span>
                    <h2>Research title here limit to 50 characters</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </span></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}