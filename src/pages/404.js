import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout.js"


const PageNotFound = () => {
	return (		
		   	<Layout >
		   	  	<Helmet htmlAttributes={{
            lang: 'en',
            }}>
		          <meta charSet="utf-8" />
		          <title>404 Page Not Found</title>
		          <link rel="canonical" href="https://teakle.com.au/404" />
				</Helmet>
			  	<main className="page-not-found" role="main">
					<h2>Sorry!</h2>
					<p>The page you're looking for either has been moved, been renamed or doesn't exist.</p>
					<p><Link to="/">Go to home page</Link></p>
				</main>

		  	</Layout>	
		);
}
export default PageNotFound