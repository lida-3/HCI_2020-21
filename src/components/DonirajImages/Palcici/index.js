import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Palcici = () => {
const data = useStaticQuery(graphql`
  query {
    palcici: file(relativePath: {eq: "palcici.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 960,maxHeight: 1200) {
       
        ...GatsbyImageSharpFluid
      }
  }
 }
}`)
return (
     <div> 
       <Img fluid={data.palcici.childImageSharp.fluid} />
     </div>
   )
}
 
export default Palcici