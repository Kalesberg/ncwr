import React from "react"
import styles from "./hero.module.scss"

const requestAnimFrame = (function() {
	return  window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(/* function */ callback, /* DOMElement */ element){
      window.setTimeout(callback, 1000 / 60);
    };
})();

const requestInterval = function(fn, delay) {
	if( !window.requestAnimationFrame       && 
		!window.webkitRequestAnimationFrame && 
		!(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
		!window.oRequestAnimationFrame      && 
		!window.msRequestAnimationFrame)
			return window.setInterval(fn, delay);

	var start = new Date().getTime(),
		handle = new Object();

	function loop() {
		var current = new Date().getTime(),
			delta = current - start;

		if(delta >= delay) {
			fn.call();
			start = new Date().getTime();
		}

		handle.value = requestAnimFrame(loop);
	};

	handle.value = requestAnimFrame(loop);
	return handle;
}

/**
 * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
 * @param {int|object} fn The callback function
 */
const clearRequestInterval = function(handle) {
  window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
  window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
  window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
  window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
  window.oCancelRequestAnimationFrame	? window.oCancelRequestAnimationFrame(handle.value) :
  window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
  clearInterval(handle);
};

export default ({ block }) => {
  const [slideIndex, setSlideIndex] = React.useState(0)
  const switchSlides = () => {
    setSlideIndex(block.heroGroup.length - 1 > slideIndex ? slideIndex + 1 : 0)
  }
  React.useEffect(() => {
    if (block.heroGroup.length > 1) requestInterval(switchSlides, 500000)
  }, [slideIndex])

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
