import React from 'react'
import styles from './logo.module.scss'

export default ({ block }) => {

  return (
    <div className={styles.footerLogo}>
      <img src={block.logo} />
    </div>
  )
}