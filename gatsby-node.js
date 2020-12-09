const path = require('path')
const slugify = require('slugify')

const pageTemplate = path.resolve('./src/templates/page/page.tsx')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data: { 
      pages: { nodes: pages }, 
      pageFiles: { nodes: pageFiles },
    } } = await graphql(`
  {
    pages: allPagesJson {
      nodes {
        title
        slug
      }
    }
    pageFiles: allFile(filter: {relativeDirectory: {eq: "pages" }}) {
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
  
  const pagesWithExtras = pages.map(page => {
    const file = pageFiles.find(file => file.childPagesJson.slug === page.slug && file.childPagesJson.title === page.title)
    const filePath = `${page.slug === '/' ? '/' : page.slug || slugify(page.title).toLowerCase()}`
    return {
      ...page,
      relativePath: file.relativePath,
      filePath
    }
  })
  const allPages = [...pagesWithExtras]

  allPages.forEach(page => {
    createPage({
      component: pageTemplate,
      path: page.filePath,
      context: {
        title: page.title,
        pages: allPages
      }
    })
  })
}
