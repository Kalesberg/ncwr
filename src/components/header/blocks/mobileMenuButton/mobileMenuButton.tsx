import React from 'react'
import styles from './mobileMenuButton.module.scss'

export default ({ block }) => {

  return (
    <section className={styles.section}>
      {block.template}
    </section>
  )
}