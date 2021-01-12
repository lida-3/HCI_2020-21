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
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 400) {
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
          fluid={image.node.childImageSharp.fluid}
          style={{ position: "initial" }}
        />
      )
    }}
  />
)

export default DogadajImage
