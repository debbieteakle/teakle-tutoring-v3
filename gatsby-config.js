module.exports = {
  
  siteMetadata: {
    title: `Mathew Teakle Tutoring | Online HSC English Tuition, Sydney`,
    description: `Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
    He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs.`,
    siteUrl: `https://www.teakle.com.au`
  },
  plugins: [ "gatsby-plugin-postcss",  "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog-posts`,
      path: `${__dirname}/src/content/blog-posts`,
    },
  },
      {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `testimonial`,
      path: `${__dirname}/src/content/testimonials`,
    },
  },
]
};