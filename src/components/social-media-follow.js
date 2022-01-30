import React from "react"
import { Link } from "gatsby"
import { FaInstagram } from 'react-icons/fa';

const SocialMediaFollow = () => {
	return (
		<section className="text-center bg-orange-400 flex flex-wrap justify-center">
			<p className="leading-loose tracking-wide m-0">
			<span className="mx-3">
				<Link to="https://www.instagram.com/msteakle/">
			 		<FaInstagram className="inline-block text-4xl text-pink-600"/>
				</Link>
			</span>
			Follow me on <Link to="https://www.instagram.com/msteakle/">Instagram</Link> for motivation and some clear thinking about the HSC.</p>
		</section>
		);
}

export default SocialMediaFollow;