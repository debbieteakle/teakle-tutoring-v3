import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Button from "./button.js"


const Header = () => {
	return (
			<header className="bg-gray-800	text-white">
                <StaticImage 
                src="../images/background.jpg" 
                alt="background" 
                className="flex flex-wrap"
                placeholder="blurred"
                layout="fullWidth"
                />
   
				<div className="header-profile text-center mt-5 mx-auto mb-0">
                    <StaticImage 
                    src="../images/TeakleTutoringLogo-square-600.jpg" 
                    alt="logo" 
                    className="profile"
                    placeholder="blurred"
                    />
		
				</div>
					<div className="header-title text-center mt-5 mx-auto mb-0">	
					    <h1 className="text-4xl">Mathew Teakle</h1>
					    <h2 className="text-2xl">Sydney HSC English Tutor</h2>
						<p className="text-lg p-6">Available Sunday - Friday  |  Online or In Person</p>
						<Link to="/contact">
					        <Button name="Enquire Now"/>
					    </Link>
					</div>
		    </header>

	);
}

export default Header;