import React from 'react'
import styles from './social.module.scss'

export default ({ block }) => {

  return (
    <div className={styles.footerMenuText}>
      <ul>
        {block.links.map((link, i) => (
          <li>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}