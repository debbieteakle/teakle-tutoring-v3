import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql } from 'gatsby'


const BlogPage = ({data}) => {
  return (    
        <Layout>
          <Helmet htmlAttributes={{
            lang: 'en',
            }}>
              <meta charSet="utf-8" />
              <title>Mathew Teakle Tutoring | Blog</title>
              <link rel="canonical" href="https://teakle.com.au/blog" />
              <meta name="keywords" content="Find a Tutor, English Tutor, English Teacher, 
              Private Tutor English, Online Teacher English, Private English Teacher, HSC English Tutor, 
              High School English, High School Literacy Tutor, Essays, Creative Writing" />
              <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
              He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
              <meta name="google-site-verification" content="pIfTVRhYnx_exObArZVnORzf_3KokccntYBpdYTqUzo" />
            </Helmet>
          <main className="flex-grow pt-8 sm:mx-20 mx-5 content-center" role="main">
            <h1 className="text-4xl">Latest Posts</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div className="my-10" key = {post.node.id}>
                    <h2 className="text-xl"><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h2>
                    <small>Posted by { post.node.frontmatter.author } {'  '} 
                      on { post.node.frontmatter.date }</small>
                     <p> { post.node.excerpt }</p>
                    <Link className="text-sm text-blue-400" to={post.node.frontmatter.path}>Read more</Link>
                </div>
              ))}
          </main>         
        </Layout> 
    );
}

export const pageQuery = graphql `
  query BlogIndexQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog-posts/"}}) {
    edges {
      node {
        id
        excerpt(pruneLength: 240, format: PLAIN)
        frontmatter {
          author
          date(formatString: "DD MMMM, YYYY")
          path
          title
        }
      }
    }
  }
}
`


export default BlogPage

