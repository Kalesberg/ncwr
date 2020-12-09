import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './latestProgress.module.scss'

export default ({ block }) => {
  const { allMarkdownRemark: { nodes: { frontmatter: { contentTypeResearchArticle }, rawMarkdownBody } } } = useStaticQuery(graphql`
  { 
    allMarkdownRemark {
      nodes {
        frontmatter {
          contentTypeResearchArticle {
            category
            title
            type
            document
            videoUrl
          }
        }
        rawMarkdownBody
      }
    }
  }`)
  console.log(block)
  
  return (
    <section className={styles.section}>
      {block.template}
    </section>
  )
}