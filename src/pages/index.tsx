import React, { FC, useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { Col, message, Row, Space } from "antd"
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import MediaImage from "../components/MediaImage"

import SEO from "../components/seo"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"

const Home: FC<PageProps> = () => {
  const screen = useBreakpoint()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const images = useStaticQuery(query)

  const { linkedIn, github } = images

  if (!images?.profile_pic?.childImageSharp?.fluid) {
    message.error("Failed loading background image")
    return <div>Picture not found</div>
  }

  const cardVariants = {
    open: { height: "35vh" },
    close: { height: "20vh" },
  }

  return (
    <>
      {screen.xs ? (
        <BackgroundImageStyled fluid={images.profile_pic.childImageSharp.fluid}>
          <SEO title="Home" />
          <Card
            animate={isOpen ? "open" : "close"}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <CardContent>
              <Row>
                <Col span={22}>
                  <Name>ETHIRAJULU SUKUMAR</Name>
                </Col>
                <IconCol span={2}>
                  {!isOpen ? (
                    <UpIcon onClick={() => setIsOpen(true)} />
                  ) : (
                    <DownIcon onClick={() => setIsOpen(false)} />
                  )}
                </IconCol>
              </Row>
              <Occupation>Full stack developer, TN, India</Occupation>
              <AnimatePresence>
                {isOpen && (
                  <About
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    I am a full stack web developer with 5+ years of experience
                    in developing high preferment and user friendly web and
                    mobile applications.
                  </About>
                )}
              </AnimatePresence>
              <MediaHolder>
                <Space size={50}>
                  <LinkedIn image={linkedIn} />
                  <Github image={github} />
                </Space>
              </MediaHolder>
            </CardContent>
          </Card>
        </BackgroundImageStyled>
      ) : (
        <p>You are not on mobile</p>
      )}
    </>
  )
}

const query = graphql`
  query {
    profile_pic: file(relativePath: { eq: "ethi.png" }) {
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

const BackgroundImageStyled = styled(BackgroundImage)`
  height: 100%;
`

const Card = styled(motion.div)`
  position: absolute;
  height: 20vh;
  width: 100vw;
  bottom: 20px;
`

const CardContent = styled.div`
  height: 100%;
  width: 80vw;
  margin: 0 auto;
  background-image: linear-gradient(
    rgba(255, 120, 0, 1),
    rgba(255, 0, 0, 0.71)
  );
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Name = styled.p`
  padding-top: 10px;
  padding-left: 13px;
  font-size: 17px;
  font-family: "Quicksand", sans-serif;
  color: white;
  margin: 0px;
`

const IconCol = styled(Col)`
  text-align: right;
  padding-right: 5px;
  padding-top: 1px;
`

const UpIcon = styled(UpCircleOutlined)`
  font-size: 15px;
`

const DownIcon = styled(DownCircleOutlined)`
  font-size: 15px;
`

const Occupation = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  color: white;
  padding-left: 13px;
`

const About = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
`

const MediaHolder = styled.div`
  position: absolute;
  bottom: 1vh;
  left: 35vw;
`

const LinkedIn = styled(MediaImage)`
  border-radius: 50%;
`

const Github = styled(MediaImage)`
  border-radius: 50%;
`

export default Home
