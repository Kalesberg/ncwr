import React from "react"
import styles from "./findTreatment.module.scss"

export default ({ block }) => {
  const [showTreatment, setShowTreatment] = React.useState(false)

  return (
    <section className={styles.section}>
      <div className={styles.findTreatment}>
        <div className={styles.findTreatmentInner}>
          <div className={styles.findTreatmentLeft}>
            <div className={styles.findTreatmentLeftTitle}>
              <div className={styles.findTreatmentSearch}>
                <form action="#" method="post" className={styles.searchBox}>
                  <input type="search" placeholder="91234" />
                  <img src="/search.png" />
                </form>
              </div>
              <div className={styles.findTreatmentDropdown}>
                <select
                  className={`${styles.formControl} ${styles.formControlLg}`}
                >
                  <option>75m</option>
                  <option>85m</option>
                </select>
              </div>
            </div>
            {showTreatment ? (
              <div className={styles.FindTreatmentLeftText}>
                <div className={styles.FindTreatmentCopy}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros.{" "}
                  </p>
                  <div className={styles.FindTreatmentCopyInner}>
                    <p>Project Echo</p>
                    <h3>555-123-0000</h3>
                  </div>
                  <div className={styles.FindTreatmentCopyInner}>
                    <p>Tele Health</p>
                    <h3>555-123-0000</h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.findTreatmentLeftText}>
                <div
                  className={styles.findTreatmentLeftbox}
                  onClick={() => setShowTreatment(true)}
                >
                  <div className={styles.leftboxImage}>
                    <img src="/7512D061-091A-4A3C-8A0C-0B5FA3567246.png" />
                  </div>
                  <div className={styles.leftboxText}>
                    <h3>Name</h3>
                    <p>123 S Street name City name, ST, 00000</p>
                  </div>
                  <div className={styles.leftboxIcon}>
                    <div className={styles.icons}>
                      <img src="/car.png" />
                      <p>15 min</p>
                    </div>
                    <div className={styles.icons}>
                      <img src="/star.png" />
                      <p>4.5 stars</p>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.findTreatmentLeftbox}
                  onClick={() => setShowTreatment(true)}
                >
                  <div className={styles.leftboxImage}>
                    <img src="/7512D061-091A-4A3C-8A0C-0B5FA3567246.png" />
                  </div>
                  <div className={styles.leftboxText}>
                    <h3>Name</h3>
                    <p>123 S Street name City name, ST, 00000</p>
                  </div>
                  <div className={styles.leftboxIcon}>
                    <div className={styles.icons}>
                      <img src="/car.png" />
                      <p>15 min</p>
                    </div>
                    <div className={styles.icons}>
                      <img src="/star.png" />
                      <p>4.5 stars</p>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.findTreatmentLeftbox}
                  onClick={() => setShowTreatment(true)}
                >
                  <div className={styles.leftboxImage}>
                    <img src="/7512D061-091A-4A3C-8A0C-0B5FA3567246.png" />
                  </div>
                  <div className={styles.leftboxText}>
                    <h3>Name</h3>
                    <p>123 S Street name City name, ST, 00000</p>
                  </div>
                  <div className={styles.leftboxIcon}>
                    <div className={styles.icons}>
                      <img src="/car.png" />
                      <p>15 min</p>
                    </div>
                    <div className={styles.icons}>
                      <img src="/star.png" />
                      <p>4.5 stars</p>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.findTreatmentLeftbox}
                  onClick={() => setShowTreatment(true)}
                >
                  <div className={styles.leftboxImage}>
                    <img src="/7512D061-091A-4A3C-8A0C-0B5FA3567246.png" />
                  </div>
                  <div className={styles.leftboxText}>
                    <h3>Name</h3>
                    <p>123 S Street name City name, ST, 00000</p>
                  </div>
                  <div className={styles.leftboxIcon}>
                    <div className={styles.icons}>
                      <img src="/car.png" />
                      <p>15 min</p>
                    </div>
                    <div className={styles.icons}>
                      <img src="/star.png" />
                      <p>4.5 stars</p>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.findTreatmentLeftbox}
                  onClick={() => setShowTreatment(true)}
                >
                  <div className={styles.leftboxImage}>
                    <img src="/7512D061-091A-4A3C-8A0C-0B5FA3567246.png" />
                  </div>
                  <div className={styles.leftboxText}>
                    <h3>Name</h3>
                    <p>123 S Street name City name, ST, 00000</p>
                  </div>
                  <div className={styles.leftboxIcon}>
                    <div className={styles.icons}>
                      <img src="/car.png" />
                      <p>15 min</p>
                    </div>
                    <div className={styles.icons}>
                      <img src="/star.png" />
                      <p>4.5 stars</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
            <div className={styles.findTreatmentRight}>
              <div className={styles.findTreatmentMapLeft}>
                <img src="/BF7FAA5A-0B08-491D-90C4-C4E37170269F.png" />
                <div className={styles.mapLeftText}>
                  <h3>Name</h3>
                  <p>123 S Street nameCity name, ST, 00000</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede.
                  </p>
                  <h3>555-123-0000</h3>
                </div>
              </div>
              <div className={styles.findTreatmentMap}>
                <div className={styles.googleMap}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178171.1279347553!2d-107.74579769601361!3d38.93122833857192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1608198099966!5m2!1sen!2sin"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}