import React, { FC, useState } from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { message } from "antd"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

import MobileHome from "../components/MobileHome"
import DeskHome from "../components/DeskHome"

const Home: FC<PageProps> = () => {
  const screen = useBreakpoint()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const images = useStaticQuery(query)
  const { linkedIn, github } = images
  if (!images?.profile_pic?.childImageSharp?.fluid) {
    message.error("Failed loading background image")
    return <div>Picture not found</div>
  }
  return (
    <>
      {screen.xs ? (
        <MobileHome
          profileImg={images.profile_pic.childImageSharp.fluid}
          linkedIn={linkedIn}
          github={github}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        <DeskHome
          profileImg={images.profile_pic.childImageSharp.fluid}
          linkedIn={linkedIn}
          github={github}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  )
}

const query = graphql`
  query {
    profile_pic: file(relativePath: { eq: "ethi_bw_side.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    linkedIn: file(relativePath: { eq: "linkedin.png" }) {
      ...socialMediaImage
    }
    github: file(relativePath: { eq: "github.png" }) {
      ...socialMediaImage
    }
  }
`

export default Home
