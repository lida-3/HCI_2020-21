import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bestie = () => {
const data = useStaticQuery(graphql`
  query {
    bestie: file(relativePath: {eq: "bestie.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 960,maxHeight: 1200) {
       
        ...GatsbyImageSharpFluid
      }
  }
 }
}`)
return (
     <div> 
       <Img fluid={data.bestie.childImageSharp.fluid} />
     </div>
   )
}
 
export default Bestie