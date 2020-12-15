import React from "react"
import styles from "./hero.module.scss"

export default ({ block }) => {
  const slides = [
    {
      imageurl: "/hero-section.jpg",
      title: (
        <>
          Answers + <br />
          Access = Hope
        </>
      ),
      description:
        "Through medical research and accessible treatment, we’re bringing understanding and hope to the fight against opioid addiction.",
      bottomDesc: "[News/announcement headline 1, TBD]",
    },
    {
      imageurl: "/hero-section-1.png",
      title: (
        <>
          Answers + <br />
          Access = Hope
        </>
      ),
      description:
        "Through medical research and accessible treatment, we’re bringing understanding and hope to the fight against opioid addiction.",
      bottomDesc: "[News/announcement headline 2, TBD]",
    },
  ]
  const [slideIndex, setSlideIndex] = React.useState(0)
  const switchSlides = () => {
    setSlideIndex(slides.length - 1 > slideIndex ? slideIndex + 1 : 0)
  }
  React.useEffect(() => {
    setInterval(switchSlides, 20000)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.heroSection}>
        <div className={styles.slideshowContainer}>
          {slides.map((slide, index) => {
            return (
              <div
                className={`${styles.mySlides} fade animate__animated animate__fadeInLeft`}
                style={{
                  display: slideIndex === index ? "flex" : "none",
                  backgroundImage: `url('${slide.imageurl}')`,
                }}
              >
                <div className={styles.heroSectionLeft}>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <div className={styles.heroSectionBottom}>
                  {slides.map((slideDot, dotIndex) => (
                    <div
                      className={`${styles.heroBoxRight} ${styles.moveBox1} ${
                        dotIndex === slideIndex ? styles.active : ""
                      }`}
                      onClick={() => setSlideIndex(dotIndex)}
                    >
                      <p>0{dotIndex + 1}</p>
                      <span>{slideDot.bottomDesc}</span>
                    </div>
                  ))}
                </div>
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
