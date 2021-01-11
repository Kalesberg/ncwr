import React from 'react'
import styles from './donate.module.scss'

export default ({ block, isMobile }) => {

  return (
    <a className={isMobile ? `${styles.donate} ${styles.mobile}` : `${styles.donate}`} href={block.link}>
      <img src={block.icon} />
      <b>{block.label}</b>
    </a>
  )
}