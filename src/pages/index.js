import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Enrolments from "../components/enrolments"
import Credentials from "../components/credentials"
import About from "../components/about"
import FAQs from "../components/faqs"
import SocialMediaFollow from "../components/social-media-follow"
import Button from "../components/button"
import { FaQuoteLeft } from 'react-icons/fa';



const IndexPage = ({data}) => {
  return (
    <Layout>
      <title>Teakle Tutoring</title>
      <main >
        <Header />
        <Enrolments />
        <Credentials />
        <div>
          <h1 className="text-2xl pt-4 text-center">HSC Student Testimonials</h1></div>
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
			   			<div className="call-to-action">
							<Link to="/testimonials">
					 			<Button name="Read All Testimonials"/>
							</Link>
				</div>
        <About />
        <FAQs />
        <SocialMediaFollow />

      </main>
    </Layout>
  );
}


export const testimonialQuery = graphql `
  query RecentTestimonialQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/testimonials/"}, frontmatter: {year: {eq: "2020"}}}) {
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
export default IndexPage
