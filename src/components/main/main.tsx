import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Contact, ContactImageText, DeliverHope, FindTreatment, Foundation, Hero, HomeResearch, LatestProgress, OptionChanger, OsuMedicine, OverviewWithMedia, Research, Resources, Team, Testimonial, UnderstandingScience } from './blocks'

import styles from './main.module.scss'

export default ({ blocks, children }) => {

  const animationStyle = 'animate__fadeIn'

  return (
    <main className={styles.main} id='main'>
      {blocks && blocks.length ? (
        <div className={styles.blocks}>
         {blocks && blocks.map((block, i) => {
            return block.template === 'main-contact' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <Contact key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-contact-image-text' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <ContactImageText key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-deliver-hope' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <DeliverHope key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-find-treatment' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <FindTreatment key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-foundation' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <Foundation key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-hero' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <Hero key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-home-research' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <HomeResearch key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-latest-progress' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <LatestProgress key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-option-changer' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <OptionChanger key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-osu-medicine' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <OsuMedicine key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-overview-with-media' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <OverviewWithMedia key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-research' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <Research key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-resource' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <Resources key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-team' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <Team key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-testimonial' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <Testimonial key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-team' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <Team key={i} block={block} />
              </ScrollAnimation>
            ) : block.template === 'main-understanding-science' ? (
              <ScrollAnimation key={i} animateIn={animationStyle} animateOnce scrollableParentSelector='#main' offset={150}>
                <UnderstandingScience key={i} block={block} />
              </ScrollAnimation>
            ) : <p key={i} className={styles.title}>{block.template} does not exist</p>
          })}
        </div>
      ) : null}
      {children}
    </main>
  )
}