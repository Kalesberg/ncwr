import React from 'react'
import styles from './contact.module.scss'

export default ({ block }) => {

  return (
    <div className={styles.footerContact}>
      <h3>{block.heading}</h3>
      <p dangerouslySetInnerHTML={{__html: block.address.replace(/(?:\r\n|\r|\n)+/g, '<br>')}} />
    </div>
  )
}