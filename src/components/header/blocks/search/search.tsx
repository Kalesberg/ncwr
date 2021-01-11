import React from 'react'
import styles from './search.module.scss'

export default ({ block }) => {

  return (
    <a href="#" className={styles.searchLink}>
      <img src={block.icon} />
    </a>
  )
}