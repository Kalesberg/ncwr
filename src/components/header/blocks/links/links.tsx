import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./links.module.scss"

const MegaMenu = () => (
  <div className={styles.subnavContent}>
    <div className={styles.subnavContentInner}>
      <div className={styles.subnavContentLeft}>
        <div className={styles.subnavContentBox}>
          <h3>Overview</h3>
          <ul>
            <li>
              {" "}
              <a className={styles.subLink} href="#">
                Areas of focus
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.subLink} href="#">
                Partners
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.subLink} href="#">
                Facility
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.subnavContentBox}>
          <h3>Research</h3>
          <ul>
            <li>
              {" "}
              <a className={styles.subLink} href="#">
                Ongoing studies
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.subLink} href="#">
                Completed studies
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.subLink} href="#">
                Participate in studies
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.subLink} href="#">
                Bio Samples
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.subLink} href="#">
                H.E.A.L.
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.subnavContentRight} animated animate__fadeIn`}>
        <div
          className={styles.subnavContentImageBox}
          style={{ backgroundImage: 'url("/menuImage1.png")' }}
        >
          <div className={styles.imageBoxBottom}>
            <p>01</p>
            <span>[Research/highlight headline 1, TBD]</span>
          </div>
        </div>
        <div
          className={`${styles.subnavContentImageBox} ${styles.colorOrange}`}
          style={{ backgroundImage: 'url("/menuImage2.png")' }}
        >
          <div className={styles.imageBoxBottom}>
            <p>02</p>
            <span>[Research/highlight headline 2, TBD]</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ({ block, megamenuBlock }) => {
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
      <>
        {filePath.label === 'Research' ? (
          <div className={styles.subnav}>
            <Link key={i} activeClassName={styles.active} className={styles.link} to={page.childPagesJson.slug}>
              {filePath.label}
            </Link>
            <MegaMenu />
          </div>
        ) : (
          <Link key={i} activeClassName={styles.active} className={styles.link} to={page.childPagesJson.slug}>
            {filePath.label}
          </Link>
        )}
      </>
    ) : null
  }
  return (
    <>
      <div className={styles.subImages}>
        <img src="/mobile-logo.svg" className={styles.TextLogoImage} />
      </div>
      {block.links.map((link, i) => (
        getPage(link, i)
      ))}
    </>
  )
}