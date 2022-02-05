import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout.js"
import ContactForm from "../components/contact-form.js"
import SocialMediaFollow from "../components/social-media-follow.js"

const ContactPage = () => (
  	<Layout>
  		<Helmet htmlAttributes={{
        lang: 'en',
        }}>
		          <meta charSet="utf-8" />
		          <title>Contact Mathew to Enquire About Online HSC English Tuition</title>
		          <link rel="canonical" href="https://teakle.com.au/contact" />
		          <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years 
		          of tutoring experience. He provides private English tuition online to students all over NSW. 
		          Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
		</Helmet>
		<main className="flex-grow" role="main">
			<ContactForm />
		</main>
		<SocialMediaFollow />
	</Layout>
)
export default ContactPage;