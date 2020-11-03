import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default ({ className, image, iconOf }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            linkedIn
            github
          }
        }
      }
    `
  )
  return (
    <a
      href={
        iconOf === "linkedIn"
          ? site.siteMetadata.linkedIn
          : site.siteMetadata.github
      }
      target="_blank"
    >
      <Img fixed={image.childImageSharp.fixed} className={className} />
    </a>
  )
}

export const query = graphql`
  fragment socialMediaImage on File {
    childImageSharp {
      fixed(width: 35, height: 35) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
