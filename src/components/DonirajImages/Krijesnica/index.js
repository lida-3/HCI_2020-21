import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Krijesnica = () => {
const data = useStaticQuery(graphql`
  query {
    krijesnica: file(relativePath: {eq: "krijesnica.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 960, maxHeight: 1200) {
       
        ...GatsbyImageSharpFluid
      }
  }
 }
}`)
return (
     <div> 
       <Img fluid={data.krijesnica.childImageSharp.fluid} />
     </div>
   )
}
 
export default Krijesnica