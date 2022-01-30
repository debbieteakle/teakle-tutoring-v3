import React from "react"
import { FaLaptop } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { FaCalendarTimes} from 'react-icons/fa';
import { FaUserFriends} from 'react-icons/fa';
import { FaClock} from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { Link } from "gatsby"
import Button from "./button.js"


const FAQs = () => {
	return (
		<section className="pt-4">
			<h2 className="text-center text-2xl">FAQs</h2>
			<div className="flex flex-wrap justify-center m-2">
				<article className="faq p-8 bg-gray-200">
					<h3 className="font-bold">How do I pay?</h3>
					<div className="faq-icon bg-gray-200"><FaCreditCard /></div>
					<p>I'll send an invoice via email with a link, so you can pay securely online via credit card or direct debit transfer.
</p>
				</article>
				<article className="faq p-8 bg-gray-200">
					<h3 className="font-bold">What do I need for online tutoring?</h3>
					<div className="faq-icon bg-gray-200"><FaLaptop /></div>
					<p>A Skype account with a microphone and webcam. You'll also need a Google account with access to Google Docs.</p>
				</article>
				<article className="faq p-8 bg-gray-200">
					<div className="faq-icon bg-gray-200"><FaCalendarTimes /></div>
					<h3 className="font-bold">What if I can't attend my lesson?</h3>
					<p>No problem, these things happen. Let me know which lesson you can't attend and we'll reschedule it. I don't make my students pay for lessons they don't have. </p>
				</article>
				<article className="faq p-8 bg-gray-200">
					<div className="faq-icon bg-gray-200"><FaUserFriends /></div>
					<h3 className="font-bold">Do you tutor in person?</h3>
					<p>Yes! My home office is a five minute walk from a train station. We have an air conditioned office, with a nice view of the backyard and you can use our WiFi and charge your phone. 
					During lessons we might get an unannounced visit from our dog (Bear) and it's very likely one of the kids will be playing in the backyard as well. </p>
				</article>
				<article className="faq p-8 bg-gray-200">
					<div className="faq-icon bg-gray-200"><FaClock /></div>
					<h3 className="font-bold">Do I pay week by week or by school term?</h3>
					<p>It's up to you. I offer a casual rate and a discounted rate if you pay for the whole term (10 lessons). Get in touch to learn more.</p>
				</article>
				<article className="faq p-8 bg-gray-200">
					<div className="faq-icon bg-gray-200"><FaUserGraduate /></div>
					<h3 className="font-bold">Are you a qualified teacher?</h3>
					<p>I have a Bachelor of Arts/Bachelor of Education (English Literature) from the University of New South Wales.</p>
				</article>
			</div>
			<div className="align-middle">
				<p className="text-center">Have more questions?</p>
				<p className="text-center">
					<Link to="/contact">
					        <Button name="Enquire Now"/>
					</Link>
				</p>
			</div>
		</section>
		);
}

export default FAQs;