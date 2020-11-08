import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

type MediaImageType = { className?: string; image: any; iconOf: string }

const MediaImage: FC<MediaImageType> = ({ className, image, iconOf }) => {
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

export default MediaImage
