import React from "react"
import styles from "./hero.module.scss"

declare const window: any;

export default ({ block }) => {
  if (typeof window !== 'undefined') {
    window.requestAnimationFrame = window.requestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
              window.msRequestAnimationFrame
  }

  const [slideIndex, setSlideIndex] = React.useState(0)

  const animateSlides = () => {
    setTimeout(() => {
      requestAnimationFrame(animateSlides)
      setSlideIndex(block.heroGroup.length - 1 > slideIndex ? slideIndex + 1 : 0)
    }, 5000)
  }

  React.useEffect(() => {
    if (block.heroGroup.length > 1) requestAnimationFrame(animateSlides)
  }, [slideIndex])

  const scrollDown = () => {
    document.getElementById('main').scrollBy({
      left: 0,
      top: document.getElementById('main').offsetHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className={styles.section}>
      <div className={styles.heroSection}>
        <div className={styles.slideshowContainer}>
          {block.heroGroup.map((slide, index) => {
            return (
              <div
                className={`${styles.mySlides} animated ${
                  block.heroGroup.length > 1 && "animate__fadeIn"
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
                        key={dotIndex}
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
                <div className={styles.bottomIcon} onClick={scrollDown}>
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
