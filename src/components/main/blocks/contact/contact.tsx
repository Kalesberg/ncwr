import React from "react"
import styles from "./contact.module.scss"

export default ({ block }) => {

  return (
    <section className={styles.section}>
      <div className={styles.contactSection}>
        <div
          className={styles.contactSectionInner}
          style={{
            backgroundImage: "url(/F9C143F7-328C-4F29-99E5-51A3FD560B74.png)",
          }}
        >
          <div className={styles.contactSectionFrom}>
            <div className={styles.contactFromTitle}>
              <h2>Be a light in the darkness.</h2>
              <p>Find out ways you can help end the opioid crisis.</p>
            </div>
            <div className={styles.contactFromInner}>
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="ContactName">Contact Name:</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="ContactName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="ContactMethod">Contact Method:</label>
                  <div className={styles.formGroupInner}>
                    <select
                      className={`${styles.formControl} ${styles.formControlLg}`}
                    >
                      <option>Large</option>
                    </select>
                    <input
                      type="text"
                      className={styles.formControl}
                      id="ContactMethod"
                    />
                  </div>
                </div>
                <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
                  <input
                    type="checkbox"
                    id="CheckBox"
                    className={styles.checkBoxInput}
                  />
                  <label htmlFor="CheckBox">
                    I agree to the terms and conditions{" "}
                  </label>
                </div>
                <button className={styles.btn}>
                  Discover the research <img src="/right-arrows-1.svg" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
