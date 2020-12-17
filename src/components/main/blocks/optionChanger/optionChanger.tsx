import React from "react"
import styles from "./optionChanger.module.scss"

export default ({ block }) => {
  console.log(block);
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
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <section className={styles.section}>
      <div className={styles.stepSection}>
        <div className={styles.stepSectionInner}>
          {/* Home page tabs using javascript */}
          <div className={styles.tebContInner}>
            <h3>{ block.title }</h3>
            <ul>
              {(block.options || []).map((tab, index) => {
                return (
                  <li key={index}>
                    <a
                      href="javascript:void(0)"
                      className={index === activeTab ? styles.active : ""}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          {(block.options) && 
            <div className={styles.tebContBody}>
              <div>
                <h4>{block.options[activeTab].heading}</h4>
                <p>{block.options[activeTab].body}</p>
                <a href="#" className={styles.moveButtonLink}>
                  <span>{block.options[activeTab].button.label} </span>
                  <div className={styles.moveBtn}>
                    <img src="/right-arrows.svg" style={{ marginBottom: 0 }} />
                  </div>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}
