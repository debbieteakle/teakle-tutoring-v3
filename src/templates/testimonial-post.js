import React from 'react'
import { Seo } from "../components/seo"
import Layout from '../components/layout.js'
import { graphql } from 'gatsby'


export default function Template({data}){
    const post = data.markdownRemark
    // {post.frontmatter.featuredImage ? <p>{data.subtitle}</p> : <p>Default subtitle</p>}

   // const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

    return(
      <Layout>
        <main className="flex-grow pt-8 sm:mx-20 mx-5 content-center" role="main">
          <h1 className="text-2xl">{post.frontmatter.location}</h1>
          <p className="text-sm py-4">{post.frontmatter.author} on {post.frontmatter.year}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html}} />
        </main>
      </Layout>
    )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.author}
      description={post.excerpt}
    />
  )
}

export const postQuery = graphql `
  query TestimonialPostByPath( $path: String! ){
    markdownRemark(frontmatter: { path: { eq: $path }}){
      html
      frontmatter {
        path
        location
        author
        year
        studytype
    
      }
      excerpt(pruneLength: 160, truncate: false)
    }
  }
`