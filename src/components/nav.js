import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li className="inline-block mr-4 mb-4">
    <Link className="text-white block" to={props.to}>{props.children}</Link>
  </li>
)

const Nav = () => {
	return (
			<nav className="h-24 sm:h-24 md:h-16 lg:h-16 xl:h-16 bg-gray-800 block px-6 pt-6">
			    <ul>
				    <ListLink to="/">Home</ListLink>
				    <ListLink to="/how-i-work/">How I Work</ListLink>
				    <ListLink to="/testimonials/">Student Testimonials</ListLink>
				    <ListLink to="/blog/">Blog</ListLink>				    
				    <ListLink to="/contact/">Contact</ListLink>
			    </ul>
		    </nav>   	
	);
}

export default Nav;