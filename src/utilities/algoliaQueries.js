
// const pageQuery = `{
//   allPagesJson {
//     edges {
//       node {
//         slug
//         title
//         id
//         blocks {
//           template
//           heading
//           text
//           title
//           body
//           quote
//           address
//           largeText
//           smallText
//           supportSearchLabel
//           supportSidebarTitle
//           supportSidebarFooterTitle
//           supportSidebarFooterText
//         }
//       }
//     }
//   }
// }`



// const contentQuery = `{
//   allFile(filter: {relativeDirectory: {in: ["support-faq","support-articles"]}}) {
//     edges {
//       node {
//         id
//         relativeDirectory
//         childMarkdownRemark {
//           rawMarkdownBody
//           frontmatter {
//             contentTypeResearchArticle {
//               type
//               category
//               title
//               heroimage
//               videoUrl
//               document
//             }
//             question
//             tags
//           }
//         }
//       }
//     }
//   }
// }`


// const unnestSupport = node => {
//   const { childMarkdownRemark, id, ...rest } = node;
//   const { frontmatter, rawMarkdownBody } = childMarkdownRemark; 
  
//   return {
//     id,
//     rawMarkdownBody,
//     ...frontmatter,
//     ...rest
//   }
// }

// const unnestBlog = node => {
//   const { childMarkdownRemark, id, ...rest } = node;
//   const { frontmatter, rawMarkdownBody, fields } = childMarkdownRemark; 
  
//   return {
//     id,
//     rawMarkdownBody,
//     ...frontmatter,
//     ...fields,
//     ...rest
//   }
// }

// const filterBlock = block => {
//   let text = '';
//   const { template, blockTitle, ...rest } = block;
//   for (const [key, value] of Object.entries({...rest})) {
//     if (value) {
//       text += ` ${value}` ;
//     }
//   }
//   if (text)
//     return {template, blockTitle, text};
//   return null;
// }

// const unnestBlocks = node => {
//   const { blocks, ...rest } = node;
//   const filteredBlocks = blocks.map(filterBlock);

//   return {
//     ...filteredBlocks,
//     ...rest,
//   }
// }

// const queries = [
//   {
//     query: pageQuery,
//     transformer: ({ data }) =>
//       data.allPagesJson.edges.map(edge => edge.node).map(unnestBlocks),
//     indexName: 'Pages',
//     settings: { attributesToSnippet: [`*:20`] },
//   },
//   {
//     query: businessPageQuery,
//     transformer: ({ data }) =>
//       data.allBusinessJson.edges.map(edge => edge.node).map(unnestBlocks),
//     indexName: 'Business Pages',
//     settings: { attributesToSnippet: [`*:20`] },
//   },
//   {
//     query: residentialPageQuery,
//     transformer: ({ data }) =>
//       data.allResidentialJson.edges.map(edge => edge.node).map(unnestBlocks),
//     indexName: 'Residential Pages',
//     settings: { attributesToSnippet: [`*:20`] },
//   },
//   {
//     query: supportQuery,
//     transformer: ({ data }) =>
//       data.allFile.edges.map(edge => edge.node).map(unnestSupport),
//     indexName: 'Support',
//     settings: { attributesToSnippet: [`*:20`] },
//   },
//   {
//     query: blogQuery,
//     transformer: ({ data }) =>
//       data.allFile.edges.map(edge => edge.node).map(unnestBlog),
//     indexName: 'Blog',
//     settings: { attributesToSnippet: [`*:20`] },
//   }
// ]

// module.exports = queries