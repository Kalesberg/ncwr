import React, { useRef } from "react"
import Carousel from "react-elastic-carousel"
import styles from "./latestProgress.module.scss"

export default ({ block }) => {
  const carousel = useRef(null)

  return (
    <section className={styles.section}>
      <div className={styles.latestProgress}>
        <div className={styles.latestProgressInner}>
          <div className={styles.latestProgressTitle}>
            <h2>The latest progress</h2>
          </div>
          <div className={styles.latestProgressSlider}>
			
            <div className={styles.mobileSlider}>
				<div className={styles.sliderItem}>
				  <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
				  <div className={styles.sliderItemText}>
					<span>
					  Posted 01/10
					  <span>
						<h2>Update title here limit to 50 characters</h2>
						<p>
						  Lorem ipsum dolor sit amet, consectetur
						  adipisicing elit, sed do eiusmod tempor.
						</p>
					  </span>
					</span>
				  </div>
				</div>
				<div className={styles.sliderItem}>
				  <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
				  <div className={styles.sliderItemText}>
					<span>
					  Posted 01/10
					  <span>
						<h2>Update title here limit to 50 characters</h2>
						<p>
						  Lorem ipsum dolor sit amet, consectetur
						  adipisicing elit, sed do eiusmod tempor.
						</p>
					  </span>
					</span>
				  </div>
				</div>
        <div className={styles.sliderItem}>
				  <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
				  <div className={styles.sliderItemText}>
					<span>
					  Posted 01/10
					  <span>
						<h2>Update title here limit to 50 characters</h2>
						<p>
						  Lorem ipsum dolor sit amet, consectetur
						  adipisicing elit, sed do eiusmod tempor.
						</p>
					  </span>
					</span>
				  </div>
				</div>
				<div className={styles.sliderItem}>
				  <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
				  <div className={styles.sliderItemText}>
					<span>
					  Posted 01/10
					  <span>
						<h2>Update title here limit to 50 characters</h2>
						<p>
						  Lorem ipsum dolor sit amet, consectetur
						  adipisicing elit, sed do eiusmod tempor.
						</p>
					  </span>
					</span>
				  </div>
				</div>
				<div className={styles.sliderItem}>
				  <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
				  <div className={styles.sliderItemText}>
					<span>
					  Posted 01/10
					  <span>
						<h2>Update title here limit to 50 characters</h2>
						<p>
						  Lorem ipsum dolor sit amet, consectetur
						  adipisicing elit, sed do eiusmod tempor.
						</p>
					  </span>
					</span>
				  </div>
				</div>
				<div className={styles.sliderItem}>
				  <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
				  <div className={styles.sliderItemText}>
					<span>
					  Posted 01/10
					  <span>
						<h2>Update title here limit to 50 characters</h2>
						<p>
						  Lorem ipsum dolor sit amet, consectetur
						  adipisicing elit, sed do eiusmod tempor.
						</p>
					  </span>
					</span>
				  </div>
				</div>
			</div>
            <div className={styles.wrapperSlider}>
              <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack}>
                  <Carousel
                    ref={carousel}
                    itemsToShow={4}
                    itemPadding={[15, 15, 15, 15]}
                    pagination={false}
                    showArrows={false}
                  >
                    <div className={styles.sliderItem}>
                      <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
                      <div className={styles.sliderItemText}>
                        <span>
                          Posted 01/10
                          <span>
                            <h2>Update title here limit to 50 characters</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.sliderItem}>
                      <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
                      <div className={styles.sliderItemText}>
                        <span>
                          Posted 01/10
                          <span>
                            <h2>Update title here limit to 50 characters</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.sliderItem}>
                      <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
                      <div className={styles.sliderItemText}>
                        <span>
                          Posted 01/10
                          <span>
                            <h2>Update title here limit to 50 characters</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.sliderItem}>
                      <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
                      <div className={styles.sliderItemText}>
                        <span>
                          Posted 01/10
                          <span>
                            <h2>Update title here limit to 50 characters</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className={styles.sliderItem}>
                      <img src="/f0e9c945-1f81-4367-bb64-c7668465959c.png" />
                      <div className={styles.sliderItemText}>
                        <span>
                          Posted 01/10
                          <span>
                            <h2>Update title here limit to 50 characters</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor.
                            </p>
                          </span>
                        </span>
                      </div>
                    </div>
                  </Carousel>
                </div>
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
