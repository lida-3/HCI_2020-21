import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CrveniKriz = () => {
const data = useStaticQuery(graphql`
  query {
    crveniKriz: file(relativePath: {eq: "crveniKriz.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 960,maxHeight: 1200) {
       
        ...GatsbyImageSharpFluid
      }
  }
 }
}`)
return (
     <div> 
       <Img fluid={data.crveniKriz.childImageSharp.fluid} />
     </div>
   )
}
 
export default CrveniKriz