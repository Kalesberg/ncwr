import React from 'react'
import styles from './phone.module.scss'

export default ({ block }) => {

  return (
    <section className={styles.section}>
      {block.template}
    </section>
  )
}