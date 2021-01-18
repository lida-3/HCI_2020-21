import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Maestral = () => {
const data = useStaticQuery(graphql`
  query {
    most: file(relativePath: {eq: "maestral.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 960, maxHeight: 1200) {
       
        ...GatsbyImageSharpFluid
      }
  }
 }
}`)
return (
     <div> 
       <Img fluid={data.most.childImageSharp.fluid} />
     </div>
   )
}
 
export default Maestral