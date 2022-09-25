import React from "react"
import { SEO } from "../components/seo"
import Layout from "../components/layout.js"
import ContactForm from "../components/contact-form.js"
import SocialMediaFollow from "../components/social-media-follow.js"

const ContactPage = () => (
  	<Layout>
		<main className="flex-grow" role="main">
			<ContactForm />
		</main>
		<SocialMediaFollow />
	</Layout>
)
export default ContactPage;

export const Head = () => (
	<SEO title="Contact Mathew to Enquire About Online HSC English Tuition" >
	  <meta charSet="utf-8" />
	  <meta name="keywords" content="Find a Tutor, English Tutor, English Teacher, Private Tutor English, Online Teacher English, Private English Teacher, HSC English Tutor, High School English, High School Literacy Tutor, Essays, Creative Writing" />
	</SEO>
  )