import React, { useRef } from "react"
import Carousel from "react-elastic-carousel"
import styles from "./team.module.scss"

export default ({ block }) => {
  const [activeTab, setActiveTab] = React.useState(0)
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

  const carousel = useRef(null)

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
                {(block.categories || []).map((category, index) => {
                  return (
                    <li
                      key={index}
                      onClick={$event => {
                        $event.preventDefault()
                        setActiveTab(index)
                      }}
                    >
                      <a
                        href="#"
                        className={index === activeTab ? styles.active : ""}
                      >
                        {category}{" "}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <h2 className={styles.displayMobile}>
              {block.categories[activeTab]}
            </h2>
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
            <div className={styles.wrapperMobile}>
              <div className={styles.ImageBox}>
                <img src="/CBECD1B3-52DA-4C03-A1DB-C4C1496C59A4.png" />
              </div>
              <div className={styles.ImageBox}>
                <img src="/715C2EB9-0A0E-44F0-B934-F4478ACA3576.png" />
              </div>
              <div className={styles.ImageBox}>
                <img src="/teamimages-1.png" />
              </div>
              <div className={styles.ImageBox}>
                <img src="/teamimages-2.png" />
              </div>
            </div>
            <div className={styles.wrapperSlider}>
              <div className={styles.sliderContainer}>
                <Carousel
                  ref={carousel}
                  itemsToShow={3.5}
                  itemPadding={[15, 15, 15, 15]}
                  pagination={false}
                  showArrows={false}
                >
                  {images.map((img, i) => (
                    <img
                      key={i}
                      className={styles.sliderItem}
                      style={{ width: "240px", height: "200px" }}
                      src={img.imageUrl}
                    />
                  ))}
                </Carousel>
              </div>
              <div className={styles.sliderButtons}>
                <button
                  className={styles.btnPrev}
                  id="prev"
                  onClick={() => carousel.current.slideNext()}
                >
                  prev
                </button>
                <label
                  className={`${styles.arrow} ${styles.left}`}
                  htmlFor="prev"
                >
                  <img src="right-arrows.svg" alt="left" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
