import React from 'react'
import { Contact, ContactImageText, DeliverHope, FindTreatment, Foundation, Hero, HomeResearch, LatestProgress, OptionChanger, OsuMedicine, OverviewWithMedia, Team, Testimonial, UnderstandingScience } from './blocks'

import styles from './main.module.scss'
import 'animate.css/animate.css' 

export default ({ blocks, children }) => {
  
  return (
    <main className={styles.main} id='main'>
      {blocks && blocks.length ? (
        <div className={styles.blocks}>
         {blocks && blocks.map((block, i) => {
            return block.template === 'main-contact' ? (
              <Contact key={i} block={block} />
            ) : block.template === 'main-contact-image-text' ? (
              <ContactImageText key={i} block={block} />
            ) : block.template === 'main-deliver-hope' ? (
              <DeliverHope key={i} block={block} />
            ) : block.template === 'main-find-treatment' ? (
              <FindTreatment key={i} block={block} />
            ) : block.template === 'main-foundation' ? (
              <Foundation key={i} block={block} />
            ) : block.template === 'main-hero' ? (
              <Hero key={i} block={block} />
            ) : block.template === 'main-home-research' ? (
              <HomeResearch key={i} block={block} />
            ) : block.template === 'main-latest-progress' ? (
              <LatestProgress key={i} block={block} />
            ) : block.template === 'main-option-changer' ? (
              <OptionChanger key={i} block={block} />
            ) : block.template === 'main-osu-medicine' ? (
              <OsuMedicine key={i} block={block} />
            ) : block.template === 'main-overview-with-media' ? (
              <OverviewWithMedia key={i} block={block} />
            ) : block.template === 'main-team' ? (
              <Team key={i} block={block} />
            ) : block.template === 'main-testimonial' ? (
              <Testimonial key={i} block={block} />
            ) : block.template === 'main-team' ? (
              <Team key={i} block={block} />
            ) : block.template === 'main-understanding-science' ? (
              <UnderstandingScience key={i} block={block} />
            ) : <p key={i} className={styles.title}>{block.template} does not exist</p>
          })}
        </div>
      ) : null}
      {children}
    </main>
  )
}