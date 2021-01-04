import React from "react"
import styles from "./optionChanger.module.scss"

export default ({ block }) => {
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
                  <li key={index} onClick={($event) => { $event.preventDefault();setActiveTab(index);}}>
                    <a
                      href="#"
                      className={index === activeTab ? styles.active : ""}
                    >
                      {tab.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <h2 className={styles.displayMobile}>
            {block.options[activeTab].label}
          </h2>
          {(block.options) && 
            <div className={`${styles.tebContBody} animate__animated animated__fadeIn`}>
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
