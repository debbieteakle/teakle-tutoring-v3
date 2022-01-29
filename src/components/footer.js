import React from "react"

const Footer = () => {
	return (
		<footer className="bg-gray-800 global-footer text-gray-500 text-center">
			<p>&copy; {new Date().getFullYear()}</p>  
		</footer>
		);
}

export default Footer;