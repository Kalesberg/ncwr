import React from "react"
// import Carousel from "react-elastic-carousel"
import styles from "./team.module.scss"

export default ({ block }) => {
  const images = [
    {
      imageUrl: "/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png",
    },
    {
      imageUrl: "/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png",
    },
    {
      imageUrl: "/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png",
    },
    {
      imageUrl: "/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png",
    },
    {
      imageUrl: "/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png",
    },
    {
      imageUrl: "/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png",
    },
    {
      imageUrl: "/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png",
    },
    {
      imageUrl: "/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png",
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.teamMemberSection}>
        <div className={styles.teamMemberInner}>
          <div
            className={styles.teamMemberSectionLeft}
            style={{ backgroundImage: 'url("/DB32EC89-0B63-494B.png")' }}
          ></div>
          <div className={styles.teamMemberSectionRight}>
            <div className={styles.teamMemberTeb}>
              <ul>
                <li>
                  <a href="#" className={styles.active}>
                    {" "}
                    Leadership{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="#"> Advisory board </a>{" "}
                </li>
              </ul>
            </div>
            <div className={styles.teamMemberTebBody}>
              <div id="team-member-teb-container">
                <h4>Team member name | Job title </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti.
                  <br />
                  <br />
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                  Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                  urna.
                </p>
              </div>
            </div>
            <div className={styles.wrapperSlider}>
              <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack}>
                  <div className={styles.sliderItem}><img src="/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png" /></div>
                  <div className={styles.sliderItem}><img src="/715C2EB9-0A0E-44F0-B934-F4478ACA3576.png" /></div>
                  <div className={styles.sliderItem}><img src="/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png" /></div>
                  <div className={styles.sliderItem}><img src="/715C2EB9-0A0E-44F0-B934-F4478ACA3576.png" /></div>
                  <div className={styles.sliderItem}><img src="/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png" /></div>
                  <div className={styles.sliderItem}><img src="/715C2EB9-0A0E-44F0-B934-F4478ACA3576.png" /></div>
                  <div className={styles.sliderItem}><img src="/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png" /></div>
                  <div className={styles.sliderItem}><img src="/715C2EB9-0A0E-44F0-B934-F4478ACA3576.png" /></div>
                  <div className={styles.sliderItem}><img src="/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png" /></div>
                </div>
              </div>
              <div className={styles.sliderButtons}>
                <button className={styles.btnPrev} id="prev">prev</button>
                <label className={`${styles.arrow} ${styles.left}`} htmlFor="prev"><img src="right-arrows.svg" alt="left" /></label>
                <button className={styles.btnNext} id="next" />
                <label className={`${styles.arrow} ${styles.right}`} htmlFor="next"><img src="right-arrows.svg" alt="right" /></label>
              </div>
            </div>
            {/* <Carousel
              itemsToShow={5}
              itemPadding={[5, 5, 5, 5]}
              pagination={false}
              showArrows={false}
            >
              {images.map(img => (
                <img
                  style={{ width: "240px", height: "200px" }}
                  src={img.imageUrl}
                />
              ))}
            </Carousel> */}
          </div>
        </div>
      </div>
    </section>
  )
}
