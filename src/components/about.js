import React from "react"


const About = () => {
	return (
		<section className="about-section bg-gray-200" id="about">
			<div className="flex flex-wrap justify-center">
				<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 p-8 mx-4">
					<h2 className="text-2xl">About Mathew</h2>
					<p>B.A. B.Ed. University of New South Wales</p>
					<p>Mathew has been tutoring English since 1998 and despite it being a part time gig 
					for much of that time, demand for his services increased so much that he is now tutoring
					full-time. He has four kids and is married to Debbie who works in the tech industry. 
					(Hence this awesome website!) In his spare time Mat enjoys playing golf, going to the gym,
					reading, writing short stories – he occasionally appears in feature films, on TV or in print
					advertisements. He also enjoys editing copy written by his well-meaning wife… (how did I do?)</p>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 p-8 mx-4">
					<h2 className="text-2xl">Main Teaching Areas</h2>
					<ul className="pt-8 ml-10 text-lg leading-loose">
						<li className="list-disc">Essay Writing</li>
						<li className="list-disc">Creative Writing</li>
						<li className="list-disc">Textual Analysis</li>
						<li className="list-disc">Film</li>
						<li className="list-disc">Adult Education</li>
					</ul>
				</div>					
			</div>
		</section>
		);
}

export default About;