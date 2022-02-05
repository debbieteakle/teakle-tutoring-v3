const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostPage = path.resolve(`./src/templates/blog-post.js`)
  const testimonialPostPage = path.resolve(`./src/templates/testimonial-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query loadPagesQuery ($limit: Int!) {
      allMarkdownRemark(limit: $limit) {
        edges {
          node {
            frontmatter {
              path
              posttype
            }
            id
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      if (edge.node.frontmatter.posttype === 'testimonial'){
        createPage ({
          path: edge.node.frontmatter.path,
          component: testimonialPostPage,
          context: {
            id: edge.node.id
          }
        })
      } else {
        createPage({
        // Path for this page — required
        path: edge.node.frontmatter.path,
        component: blogPostPage,
        context: {
          id: edge.node.id
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
      }
      
    })
  })
}