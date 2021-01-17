import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Pupoljci = () => {
const data = useStaticQuery(graphql`
  query {
    pupoljci: file(relativePath: {eq: "pupoljci.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 960, maxHeight: 1200) {
       
        ...GatsbyImageSharpFluid
      }
  }
 }
}`)
return (
     <div> 
       <Img fluid={data.pupoljci.childImageSharp.fluid} />
     </div>
   )
}
 
export default Pupoljci