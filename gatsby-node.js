/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/post.tsx")
  const res = await graphql(`
    query {
      allContentfulPublications {
        edges {
          node {
            id
            title
            category
            publicationType
            publicationDate(formatString: "DD MMMM YYYY")
            image {
              fixed(width: 400, height: 400) {
                width
                height
                src
              }
            }
          }
        }
      }
    }
  `)
  res.data.allContentfulPublications.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/post/${edge.node.id}`,
      context: {
        id: edge.node.id,
      },
    })
  })
}
