import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./footerMap.module.scss"

export default ({ block }) => {
  const { allFile: { nodes: pages } } = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "pages"}}) {
        nodes {
          relativePath
          childPagesJson {
            slug
            title
          }
        }
      }
    }
  `)

  const getPage = (filePath, i) => {
    const page = pages.find(page => filePath.page.includes(page.relativePath))
    return page ? (
      <li>
        <Link key={i} activeClassName={styles.active} className={styles.link} to={page.childPagesJson.slug}>
          {filePath.label}
        </Link>
      </li>
    ) : null
  }
  const footerMapPage = pages.find(page => block.button.page.includes(page.relativePath))

  return (
    <div className={styles.googleMap}>
      {footerMapPage && (
        <div className={styles.mapBtn}>
          <Link className={styles.btn} to={footerMapPage.childPagesJson.slug}>
            <span>{block.button.label}</span>
            <img src={block.button.icon} />
          </Link>
        </div>
      )}
      <iframe
        src={block.google_maps_link}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  )
}