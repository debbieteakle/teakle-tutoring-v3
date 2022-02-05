import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout.js"
import { Link } from "gatsby"


const WorkPage = () => {
	return (		
		   	<Layout >
		   	  	<Helmet htmlAttributes={{
      			lang: 'en',
      			}}>
		          <meta charSet="utf-8" />
		          <title>How It Works | Online HSC English Tuition</title>
		          <link rel="canonical" href="https://teakle.com.au/how-i-work" />
		          <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
		          He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
				</Helmet>
				<main className="flex-grow pt-8 sm:mx-20 mx-5 content-center" role="main">
					<h1 className="text-4xl">How I Work</h1>
						<article className="py-4">
							<h2 className="text-xl">Initial consultation</h2>
							<p>When you email me via my contact form, I'll give you a call so we can discuss your needs.</p>
						</article>
						<article className="pb-4">
							<h2 className="text-xl">How I Teach</h2>
							<p>I tutor responsively, so there&#39;s no set curriculum (that &#39;s for school).</p>

							<p>I&#39;ll teach you the crucial difference between answering an essay question and addressing an essay question. 
							I'll teach you creative writing. I'll teach you techniques like Anaphora, Epistrophe, Polysyndeton and Asyndeton. 
							I'll even teach you what Anadiplosis is  - so that when you write, you write well. 
							I'll get you beyond retelling and into close analysis of texts. It's fun, it's crazy, it's amazing and it's cool. 
							Imagine that - no more teachers writing 'retell' in the margins of your essays...</p>
						</article>
						<article className="pb-4">
							<h2 className="text-xl">Apps I Use</h2>
							<p>Google Docs, Skype for video calls and messaging, Gmail and WaveApps for invoicing.</p>
						</article>
						<article  className="pb-4">
							<h2 className="text-xl">Where I Work</h2>
							<p>I work from my home office in Berowra, in the Northern Suburbs of Sydney.</p>
						</article>
						<article className="pb-4">
							<h2 className="text-xl">When I Work</h2>
							<p>Monday - Friday and Sunday.</p>
						</article>
						<article>
							<p>Read what Mat&#39;s students <Link to="/testimonials" className="underline">have to say.</Link></p>
						</article>
				</main>
		  	</Layout>	
		);
}
export default WorkPage






