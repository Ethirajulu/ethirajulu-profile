import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ className, image }) => (
  <Img fixed={image.childImageSharp.fixed} className={className} />
)

export const query = graphql`
  fragment socialMediaImage on File {
    childImageSharp {
      fixed(width: 35, height: 35) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
