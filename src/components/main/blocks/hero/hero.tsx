import React from "react"
import styles from "./hero.module.scss"
import "./slider.scss"
import Carousel from "react-elastic-carousel"

export default ({ block }) => {

  return (
    <section className={styles.section}>
      <div className={styles.heroSection}>
        <div className={styles.slideshowContainer}>
          <Carousel
            itemsToShow={1}
            showArrows={false}
            pagination={block.heroGroup.length > 1}
            renderPagination={({ pages, activePage, onClick }: any) => {
              return (
                <div className={styles.heroSectionBottom}>
                  {pages.map((page) => (
                    <div
                      key={page}
                      className={`${styles.heroBoxRight} ${styles.moveBox1} ${
                        activePage === page ? styles.active : ""
                      }`}
                      onClick={() => onClick(page)}
                    >
                      <p>0{page}</p>
                      <span>
                        [News/announcement headline {page} , TBD]
                      </span>
                    </div>
                  ))}
                </div>
              )
            }}
          >
            {block.heroGroup.map((slide, index) => {
              return (
                <div
                  className={`${styles.mySlides} fade animate__animated ${
                    block.heroGroup.length > 1 && "animate__fadeInLeft"
                  }`}
                  key={index}
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                  }}
                >
                  <div className={styles.heroSectionLeft}>
                    <h2>{slide.heading}</h2>
                    <p>{slide.text}</p>
                  </div>
                  <div className={styles.bottomIcon}>
                    <img className={styles.icon} src="/down.svg" />
                  </div>
                </div>
              )
            })}
            </Carousel>
        </div>
      </div>
    </section>
  )
}
