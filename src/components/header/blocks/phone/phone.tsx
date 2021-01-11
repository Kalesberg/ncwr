import React from 'react'
import styles from './phone.module.scss'

export default ({ block }) => {

  return (
    <a href={block.linkto}>
      <img src={block.icon} />
      <span>
        Get help now <br />
        <b>{block.number}</b>
      </span>
    </a>
  )
}