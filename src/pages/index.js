import * as React from "react"
import Layout from "../components/layout"
import Enrolments from "../components/enrolments"
import Credentials from "../components/credentials"
import About from "../components/about"
import FAQs from "../components/faqs"
import SocialMediaFollow from "../components/social-media-follow"



const IndexPage = () => {
  return (
    <Layout>
      <title>Teakle Tutoring</title>
      <main >
        <p>insert header</p>
        <Enrolments />
        <Credentials />
        <p>insert testimonials</p> 
        <About />
        <FAQs />
        <SocialMediaFollow />

      </main>
    </Layout>
  );
}

export default IndexPage
