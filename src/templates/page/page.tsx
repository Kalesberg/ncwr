import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../../components'

export default props => {
  const { data: { pagesJson: page, businessJson: businessPage, residentialJson: residentialPage } } = props

  return (
    <Layout 
      title={page && page.title} 
      blocks={page && page.blocks} />
  )
}

export const pageQuery = graphql`
query ($title: String!) {
  pagesJson(title: {eq: $title }) {
    title
    blocks {
      address
      arrowDown
      backgroundImage
      body
      options {
        label
        heading
        button {
          page
          label
          icon
        }
        body
      }
      button {
        anchor
        icon
        label
        link
      }
      numbers {
        text
        number
        linkTo
      }
      categories
      checkIcon
      finder {
        linkTo
        number
        text
      }
      heading
      heroGroup {
        heading
        image
        mobileImage
        text
      }
      iconLeft
      iconRight
      image
      imageOne
      imageTwo
      largeText
      methodIcons {
        icon
      }
      quote
      slider
      smallText
      submitTo
      template
      text
      title
      video {
        image
        title
        url
      }
    }
  }
}
`