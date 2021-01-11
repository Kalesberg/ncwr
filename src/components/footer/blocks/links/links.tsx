import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./links.module.scss"

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
  return (
    <div className={styles.footerMenu}>
      <ul>
        {block.links.map((link, i) => (
          getPage(link, i)
        ))}
      </ul>
    </div>
  )
}