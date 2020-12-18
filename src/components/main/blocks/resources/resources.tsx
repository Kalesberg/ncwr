import React from "react"
import styles from "./resources.module.scss"

export default ({ block }) => {

  return (
    <section className={styles.section}>
      <div className={`${styles.stepSection} ${styles.customResource}`}>
        <div className={styles.stepSectionInner}>
          <div className={`${styles.tebContInner} ${styles.ctmResTab}`}>
            <h3 className={styles.title}>Resources</h3>
            <ul>
              <li><a href="#"> Research </a> </li>
              <li><a href="#"> FAQ </a> </li>
              <li><a href="#" className={styles.active}> Film series</a> </li>
              <li><a href="#"> Info for family members</a> </li>
              <li><a href="#"> What to do if</a> </li>
              <li><a href="#"> Insurance / financial aid</a> </li>
              <li><a href="#"> Addiction 101</a> </li>
              <li><a href="#"> Training </a> </li>
            </ul>
          </div>
          <div className={`${styles.tebContBody} ${styles.ctmRes}`}>
            <div id="tab-container">
              <h4 className={styles.innerResTitle}>Film series</h4> 
              <div className={styles.resourceVideo}>
                <div className={styles.resVideoInner}>
                  <div className={styles.restop}>
                    <a href="#" target="_blank">
                      <img src="/play.png" />
                    </a>
                  </div>
                  <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                </div>
                <div className={styles.resVideoInner}>
                  <div className={styles.restop}>
                    <a href="#" target="_blank">
                      <img src="/play.png" />
                    </a>
                  </div>
                  <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                </div>
                <div className={styles.resVideoInner}>
                  <div className={styles.restop}>
                    <a href="#" target="_blank">
                      <img src="/play.png" />
                    </a>
                  </div>
                  <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                </div>
                <div className={styles.resVideoInner}>
                  <div className={styles.restop}>
                    <a href="#" target="_blank">
                      <img src="/play.png" />
                    </a>
                  </div>
                  <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                </div>
                <div className={styles.resVideoInner}>
                  <div className={styles.restop}>
                    <a href="#" target="_blank">
                      <img src="/play.png" />
                    </a>
                  </div>
                  <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                </div>
                <div className={styles.resVideoInner}>
                  <div className={styles.restop}>
                    <a href="#" target="_blank">
                      <img src="/play.png" />
                    </a>
                  </div>
                  <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                </div>
              </div>
            </div>
            <div id="tab-1" style={{visibility: 'hidden', height: 0}}> 
              <h4>First responders are in a special position <br />to help. 2</h4> 
              <p>We’re giving first responders more than our gratitude. Educational resources are available to help respond to opioid emergencies and stem the crisis.</p>
              <a href="#" className={styles.moveButtonLink}>
                <span>Learn more </span>
                <div className={styles.moveBtn}><img src="/right-arrows.svg" /></div>
              </a>
            </div>
            <div id="tab-2" style={{visibility: 'hidden', height: 0}}> 
              <h3>FAQs</h3>
              <div className={styles.ctmAccordion}>
                <p className={styles.accordion}><span /> What are opioids?</p>
                <div className={styles.panel}>A. The course is charged in Australian dollars.</div>
                <p className={styles.accordion}><span /> What are some names of commonly prescribed opioids?</p>
                <div className={styles.panel}>A. If it doesn't help you I'll refund the purchase price in full.</div>
                <p className={styles.accordion}><span /> Common prescription opioids</p>
                <div className={styles.panel}>A. Depending on the mix of countries and time zones for people attending the webinars, I will pick a time that works best for most participants. All webinars will be recorded so you can listen to them again. The private Facebook group will obviously be available 24/7 and I’ll be monitoring and contributing to the discussion regularly.</div>
                <p className={styles.accordion}><span /> How many Americans die from opioid overdose?</p>
                <div className={styles.panel}>A. The self-directed mentoring program is designed to help you set-up and run an effective mentee-mentor relationship as part of the course.</div>
                <p className={styles.accordion}><span /> What are opioids?</p>
                <div className={styles.panel}>A. The course is charged in Australian dollars.</div>
                <p className={styles.accordion}><span /> What are some names of commonly prescribed opioids?</p>
                <div className={styles.panel}>A. If it doesn't help you I'll refund the purchase price in full.</div>
                <p className={styles.accordion}><span /> Common prescription opioids</p>
                <div className={styles.panel}>A. Depending on the mix of countries and time zones for people attending the webinars, I will pick a time that works best for most participants. All webinars will be recorded so you can listen to them again. The private Facebook group will obviously be available 24/7 and I’ll be monitoring and contributing to the discussion regularly.</div>
                <p className={styles.accordion}><span /> How many Americans die from opioid overdose?</p>
                <div className={styles.panel}>A. The self-directed mentoring program is designed to help you set-up and run an effective mentee-mentor relationship as part of the course.</div>
                <p className={styles.accordion}><span /> What are opioids?</p>
                <div className={styles.panel}>A. The course is charged in Australian dollars.</div>
                <p className={styles.accordion}><span /> What are some names of commonly prescribed opioids?</p>
                <div className={styles.panel}>A. If it doesn't help you I'll refund the purchase price in full.</div>
                <p className={styles.accordion}><span /> Common prescription opioids</p>
                <div className={styles.panel}>A. Depending on the mix of countries and time zones for people attending the webinars, I will pick a time that works best for most participants. All webinars will be recorded so you can listen to them again. The private Facebook group will obviously be available 24/7 and I’ll be monitoring and contributing to the discussion regularly.</div>
                <p className={styles.accordion}><span /> How many Americans die from opioid overdose?</p>
                <div className={styles.panel}>A. The self-directed mentoring program is designed to help you set-up and run an effective mentee-mentor relationship as part of the course.</div>
              </div></div>
            <div id="tab-3" style={{visibility: 'hidden', height: 0}}> 
              <h4>First responders are in a special position <br />to help. 4</h4> 
              <p>We’re giving first responders more than our gratitude. Educational resources are available to help respond to opioid emergencies and stem the crisis.</p>
              <a href="#" className={styles.moveButtonLink}>
                <span>Learn more </span>
                <div className={styles.moveBtn}><img src="/right-arrows.svg" /></div>
              </a>
            </div>
            <div id="tab-4" style={{visibility: 'hidden', height: 0}}> 
              <div id="tab-container">
                <h4 className={styles.innerResTitle}>Insurance and financial aid</h4> 
                <div className={styles.resourceVideo}>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restopPdf}>
                      <a href="#" target="_blank">
                        <img src="/pdf.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restopPdf}>
                      <a href="#" target="_blank">
                        <img src="/pdf.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restopPdf}>
                      <a href="#" target="_blank">
                        <img src="/pdf.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restopPdf}>
                      <a href="#" target="_blank">
                        <img src="/pdf.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restopPdf}>
                      <a href="#" target="_blank">
                        <img src="/pdf.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restopPdf}>
                      <a href="#" target="_blank">
                        <img src="/pdf.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-5" style={{visibility: 'hidden', height: 0}}> 
              <h4>First responders are in a special position <br />to help.5</h4> 
              <p>We’re giving first responders more than our gratitude. Educational resources are available to help respond to opioid emergencies and stem the crisis.</p>
              <a href="#" className={styles.movButtonLink}>
                <span>Learn more </span>
                <div className={styles.moveBtn}><img src="/right-arrows.svg" /></div>
              </a>
            </div>
            <div id="tab-6" style={{visibility: 'hidden', height: 0}}> 
              <div id="tab-container">
                <h4 className={styles.innerResTitle}>Film series</h4> 
                <div className={styles.resourceVideo}>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restop}>
                      <a href="#" target="_blank">
                        <img src="/play.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restop}>
                      <a href="#" target="_blank">
                        <img src="/play.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restop}>
                      <a href="#" target="_blank">
                        <img src="/play.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restop}>
                      <a href="#" target="_blank">
                        <img src="/play.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restop}>
                      <a href="#" target="_blank">
                        <img src="/play.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                  <div className={styles.resVideoInner}>
                    <div className={styles.restop}>
                      <a href="#" target="_blank">
                        <img src="/play.png" />
                      </a>
                    </div>
                    <div className={styles.resBtn}>Video title here limit to 50 characters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}