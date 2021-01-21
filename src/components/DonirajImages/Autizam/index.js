import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Autizam = () => {
const data = useStaticQuery(graphql`
  query {
    autizam: file(relativePath: {eq: "autizam2.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 960,maxHeight: 1200) {
       
        ...GatsbyImageSharpFluid
      }
  }
 }
}`)
return (
     <div> 
       <Img fluid={data.autizam.childImageSharp.fluid} />
     </div>
     
   )
}
 
export default Autizam