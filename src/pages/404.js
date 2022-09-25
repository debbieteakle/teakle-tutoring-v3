import React from "react"
import { Seo } from "../components/seo"
import { Link } from "gatsby"
import Layout from "../components/layout.js"


const PageNotFound = () => {
	return (		
		   	<Layout >
			  	<main className="page-not-found" role="main">
					<h2>Sorry!</h2>
					<p>The page you're looking for either has been moved, been renamed or doesn't exist.</p>
					<p><Link to="/">Go to home page</Link></p>
				</main>

		  	</Layout>	
		);
}
export default PageNotFound

export const Head = () => (
	<Seo title="404 Page Not Found" >
	  <meta charSet="utf-8" />
	  <meta name="keywords" content="Find a Tutor, English Tutor, English Teacher, Private Tutor English, Online Teacher English, Private English Teacher, HSC English Tutor, High School English, High School Literacy Tutor, Essays, Creative Writing" />
	</Seo>
  )