import React from "react"
import styles from "./optionChanger.module.scss"

export default () => {
  const tabs = [
    {
      name: "Students",
      title: (
        <>
          First responders are in a special position <br />
          to help.
        </>
      ),
      description:
        "We’re giving first responders more than our gratitude. Educational resources are available to help respond to opioid emergencies and stem the crisis.",
    },
    {
      name: "First responders",
      title: (
        <>
          First responders are in a special position <br />
          to help.
        </>
      ),
      description:
        "We’re giving first responders more than our gratitude. Educational resources are available to help respond to opioid emergencies and stem the crisis.",
    },
    {
      name: "Professionals",
      title: (
        <>
          First responders are in a special position <br />
          to help.
        </>
      ),
      description:
        "We’re giving first responders more than our gratitude. Educational resources are available to help respond to opioid emergencies and stem the crisis.",
    },
    {
      name: "Fellows",
      title: (
        <>
          First responders are in a special position <br />
          to help.
        </>
      ),
      description:
        "We’re giving first responders more than our gratitude. Educational resources are available to help respond to opioid emergencies and stem the crisis.",
    },
  ]
  const [activeTab, setActiveTab] = React.useState(1)
  return (
    <section className={styles.section}>
      <div className={styles.stepSection}>
        <div className={styles.stepSectionInner}>
          {/* Home page tabs using javascript */}
          <div className={styles.tebContInner}>
            <h3>Education and certification</h3>
            <ul>
              {tabs.map((tab, index) => {
                return (
                  <li>
                    <a
                      href="#"
                      className={index === activeTab ? styles.active : ""}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.tebContBody}>
            <div>
              <h4>{tabs[activeTab].title}</h4>
              <p>{tabs[activeTab].description}</p>
              <a href="#" className={styles.moveButtonLink}>
                <span>Learn more </span>
                <div className={styles.moveBtn}>
                  <img src="/right-arrows.svg" style={{ marginBottom: 0 }} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
