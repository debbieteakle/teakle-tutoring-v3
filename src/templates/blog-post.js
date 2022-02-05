import React from 'react'
import Layout from '../components/layout.js'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'


export default function Template({data}){
    const post = data.markdownRemark
    const image = getImage(post.frontmatter.featuredImage)
    return(
      <Layout>
        <main className="flex-grow pt-8 sm:mx-20 mx-5 content-center" role="main">
          <h1 className="text-2xl">{post.frontmatter.title}</h1>
          <p className="text-sm py-4">{post.frontmatter.author} on {post.frontmatter.date}</p>
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md">
            <GatsbyImage image={image} alt={post.frontmatter.author} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html}} />
        </main>
      </Layout>
    )
}

export const postQuery = graphql `
  query BlogPostByPath( $path: String! ){
    markdownRemark(frontmatter: { path: { eq: $path }}){
      html
      frontmatter {
        path
        title 
        author
        date (formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              )
          }
        }
      }
    }
  }
`