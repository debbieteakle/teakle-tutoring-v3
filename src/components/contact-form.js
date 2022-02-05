import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "./button.js"

const ContactForm = () => {

	return (
		<section className="contact-form-section pb-4">

			<div className="contact-form">
			<h1 className="text-center text-2xl py-4">Contact Mathew about English Tuition</h1>
    		<StaticImage 
            src="../images/mat-teakle-sydney-english-tutor.png" 
            alt="Mathew Teakle" 
            className="contact-profile"
            placeholder="blurred"
            layout="fullWidth"
            />
    		<h3 className="py-4">Want to learn more? Mat would love to hear from you. Provide some student details and he'll be in touch to discuss your goals.</h3>
			<form action="https://service.capsulecrm.com/service/newlead" method="post">
				<p>
					<input name="FORM_ID" type="hidden" value="5254ff48-69b4-453c-b271-e418bf866376" /> 
					<input name="COMPLETE_URL" type="hidden" value="https://teakle.com.au" /> 
					<input name="REVIEW_ID" type="hidden" value="217933" />
				</p>
				<p>
					<label htmlFor="FIRST_NAME">Student&apos;s First name: <input name="FIRST_NAME" type="text" placeholder="" /></label> 
				</p>
				<p>
					<label htmlFor="LAST_NAME">Student&apos;s Last name: <input name="LAST_NAME" type="text" placeholder="" /></label> 
					
				</p>
				<div></div>
				<p>
					<label htmlFor="CUSTOMFIELD[School]">Student&apos;s School: <input name="CUSTOMFIELD[School]" type="text" placeholder="" /></label> 
					
				</p>
				<p>
					<label htmlFor="CUSTOMFIELD[School Year]">Student&apos;s Current School Year: <input name="CUSTOMFIELD[School Year]" type="text" placeholder="" /></label> 
					
				</p>
				<p>
					<label htmlFor="CUSTOMFIELD[Parent Name]">Parent/Guardian Name: <input name="CUSTOMFIELD[Parent Name]" type="text" placeholder="" /></label> 
					
				</p>
				<p>
					<label htmlFor="EMAIL">Your Email: <input name="EMAIL" type="email" placeholder="" /></label> 
				</p>
				<p>
					<label htmlFor="PHONE[HOME]">Your Phone Number: <input name="PHONE[HOME]" type="text" placeholder="" /></label> 
					
				</p>
				<p>
					<label htmlFor="NOTE">Your Message: <textarea  name="NOTE" placeholder=""></textarea></label> 
					
				</p>
				<p>
					<input id="comment-field" type="text" name="COMMENT" />
					<input name="CUSTOMFIELD[Status]" type="hidden" value="pending" /> 
					<input name="CUSTOMFIELD[Lead Source]" type="hidden" value="website" /> 
					<Button name="Submit" type="submit" value="Submit" />
				</p>
			</form>		
		</div>
		</section>
		);
}

export default ContactForm;