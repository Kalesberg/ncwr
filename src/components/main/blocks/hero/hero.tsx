import React from "react"
import styles from "./hero.module.scss"

export default ({ block }) => {
  const [slideIndex, setSlideIndex] = React.useState(0)
  const switchSlides = () => {
    setSlideIndex(block.heroGroup.length - 1 > slideIndex ? slideIndex + 1 : 0)
  }
  React.useEffect(() => {
    if (block.heroGroup.length > 1) setInterval(switchSlides, 20000)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.heroSection}>
        <div className={styles.slideshowContainer}>
          {block.heroGroup.map((slide, index) => {
            return (
              <div
                className={`${styles.mySlides} fade animate__animated ${
                  block.heroGroup.length > 1 && "animate__fadeInLeft"
                }`}
                key={index}
                style={{
                  display: slideIndex === index ? "flex" : "none",
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                <div className={styles.heroSectionLeft}>
                  <h2>{slide.heading}</h2>
                  <p>{slide.text}</p>
                </div>
                {block.heroGroup.length > 1 && (
                  <div className={styles.heroSectionBottom}>
                    {block.heroGroup.map((slideDot, dotIndex) => (
                      <div
                        className={`${styles.heroBoxRight} ${styles.moveBox1} ${
                          dotIndex === slideIndex ? styles.active : ""
                        }`}
                        onClick={() => setSlideIndex(dotIndex)}
                      >
                        <p>0{dotIndex + 1}</p>
                        <span>
                          [News/announcement headline {dotIndex + 1} , TBD]
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <div className={styles.bottomIcon}>
                  <img className={styles.icon} src="/down.svg" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
