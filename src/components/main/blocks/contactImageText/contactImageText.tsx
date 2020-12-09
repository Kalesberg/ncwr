import React from 'react'
import styles from './contactImageText.module.scss'

export default ({ block }) => {
  console.log(block)
  
  return (
    <section className={styles.section}>
      {block.template}
    </section>
  )
}