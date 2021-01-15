import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DogadajImage = props => (
  <StaticQuery
    query={graphql`
    query {
    images: allFile {
    edges {
      node {
        relativePath
        name
        childrenImageSharp {
          fluid(maxWidth: 700, maxHeight: 400) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })

      return (
        <Img
          alt={props.alt}
          fluid={image.node.childrenImageSharp[0].fluid}
          style={{ position: "initial" }}
        />
      )
    }}
  />
)

export default DogadajImage
