import React from "react"
import Nav from "./nav.js"
import Footer from "./footer.js"

const Layout =  ({ children }) => (
  <div className="flex flex-col h-screen">
    <Nav />
    {children}
    <Footer />
  </div>
)

export default Layout