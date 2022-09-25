import React from "react"
import { Seo } from "../components/seo"
import Layout from "../components/layout.js"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { FaQuoteLeft } from 'react-icons/fa';


const TestimonialsPage = ({data}) => {
  return (    
        <Layout>
          <main className="flex-grow pt-8 sm:mx-20 mx-5" role="main">
            <div><h1 className="text-2xl pt-4 text-center">HSC Student Testimonials</h1></div>
            <div className="flex flex-wrap justify-center">

              {data.allMarkdownRemark.edges.map(testimonial => (
                      
                      <article className="testimonial p-8 bg-gray-200" key = {testimonial.node.id} >
                          <FaQuoteLeft />
                          <div dangerouslySetInnerHTML={{ __html: testimonial.node.html}} />
                          <h2 className="text-sm italic font-bold mr-4 leading-tight"><Link to={testimonial.node.frontmatter.path}>{testimonial.node.frontmatter.author}</Link></h2>
                          <small>{ testimonial.node.frontmatter.location }, {'  '}
                            { testimonial.node.frontmatter.studytype }{'  '}{ testimonial.node.frontmatter.year }</small>
                      </article>
                      
                    ))}

            </div>
          </main>         
        </Layout> 
    );
}

export const pageQuery = graphql `
  query TestimonialIndexQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/testimonials/"}}, sort: {order: DESC, fields: frontmatter___year}) {
    edges {
      node {
        frontmatter {
          studytype
          year
          author
          location
          path
        }
        id
        html
      }
    }
  }
}

`
export default TestimonialsPage

export const Head = () => (
  <Seo title="Mathew Teakle Tutoring | Student Testimonials" >
    <meta charSet="utf-8" />
    <meta name="keywords" content="Find a Tutor, English Tutor, English Teacher, Private Tutor English, Online Teacher English, Private English Teacher, HSC English Tutor, High School English, High School Literacy Tutor, Essays, Creative Writing" />
  </Seo>
)




