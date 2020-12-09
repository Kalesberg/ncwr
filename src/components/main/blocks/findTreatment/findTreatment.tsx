import React from 'react'
import styles from './findTreatment.module.scss'

export default ({ block }) => {
  console.log(block)
  
  return (
    <section className={styles.section}>
      {block.template}
    </section>
  )
}