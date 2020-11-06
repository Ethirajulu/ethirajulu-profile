import React, { FC, useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { Col, message, Row, Space } from "antd"
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons"
import styled from "styled-components"
import { motion } from "framer-motion"
import Img from "gatsby-image"
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

  const aboutVariants = {
    open: {
      height: "auto",
      opacity: 1,
    },
    close: {
      height: "0px",
      opacity: 0,
    },
  }

  return (
    <>
      {screen.xs ? (
        <BackgroundImageStyled fluid={images.profile_pic.childImageSharp.fluid}>
          <SEO title="Home" />
          <Card>
            <CardContent>
              <Row>
                <Col span={22}>
                  <Name isXs>ETHIRAJULU SUKUMAR</Name>
                  <Occupation isXs>Full stack developer, TN, India</Occupation>
                </Col>
                <IconCol isXs span={2}>
                  {!isOpen ? (
                    <UpIcon isXs onClick={() => setIsOpen(true)} />
                  ) : (
                    <DownIcon isXs onClick={() => setIsOpen(false)} />
                  )}
                </IconCol>
              </Row>
              <About
                isXs
                animate={isOpen ? "open" : "close"}
                variants={aboutVariants}
                transition={{ duration: 0.5 }}
              >
                I am a full stack web developer with 5+ years of experience in
                developing high preferment and user friendly web and mobile
                applications.
              </About>
              <MediaHolder isXs>
                <Space size={50}>
                  <LinkedIn isXs image={linkedIn} iconOf="linkedIn" />
                  <Github isXs image={github} iconOf="github" />
                </Space>
              </MediaHolder>
            </CardContent>
          </Card>
        </BackgroundImageStyled>
      ) : (
        <Container>
          <Col span={10}>
            <ImgDesk fluid={images.profile_pic.childImageSharp.fluid} />
          </Col>
          <Col span={14}>
            <GreyContainer />
            <GradientContainer>
              <AboutRowDesk>
                <Col span={22}>
                  <Name>ETHIRAJULU SUKUMAR</Name>
                  <Occupation>Full stack developer, TN, India</Occupation>
                </Col>
                <IconCol span={2}>
                  {!isOpen ? (
                    <UpIcon onClick={() => setIsOpen(true)} />
                  ) : (
                    <DownIcon onClick={() => setIsOpen(false)} />
                  )}
                </IconCol>
              </AboutRowDesk>
              <MediaHolder>
                <Space size={40}>
                  <LinkedIn image={linkedIn} iconOf="linkedIn" />
                  <Github image={github} iconOf="github" />
                </Space>
              </MediaHolder>
            </GradientContainer>
          </Col>
        </Container>
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
  width: 100vw;
  bottom: 3vh;
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
  padding-bottom: 10px;
`
const Name = styled.p<{ isXs?: boolean }>`
  padding-top: 10px;
  padding-left: ${props => (props.isXs ? "13px" : "19%")};
  font-size: ${props => (props.isXs ? "5vw" : "1.5vw")};
  font-family: "Quicksand", sans-serif;
  color: white;
  margin: 0px;
`

const IconCol = styled(Col)`
  text-align: right;
  padding-right: ${props => (props.isXs ? "10px" : "10px")};
  padding-top: ${props => (props.isXs ? "2px" : "10px")};
`

const UpIcon = styled(UpCircleOutlined)`
  font-size: ${props => (props.isXs ? "3vw" : "1.1vw")}; ;
`

const DownIcon = styled(DownCircleOutlined)`
  font-size: ${props => (props.isXs ? "4vw" : "1.3vw")}; ;
`

const Occupation = styled.p<{ isXs?: boolean }>`
  font-family: "Nunito", sans-serif;
  font-size: ${props => (props.isXs ? "3vw" : "1vw")};
  color: white;
  padding-left: ${props => (props.isXs ? "14px" : "19.2%")};
`

const About = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 4vw;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
`

const MediaHolder = styled.div<{ isXs?: boolean }>`
  display: flex;
  justify-content: center;
`

const LinkedIn = styled(MediaImage)`
  border-radius: 50%;
`

const Github = styled(MediaImage)`
  border-radius: 50%;
`

const Container = styled(Row)`
  height: 100%;
  padding-top: 12vh;
  padding-bottom: 9vh;
  padding-left: 18vw;
  padding-right: 22vw;
`
const ImgDesk = styled(Img)`
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const GreyContainer = styled(Row)`
  height: 67vh;
  margin-top: 3vh;
  background-color: #c4c4c4;
  border-top-right-radius: 5px;
`

const GradientContainer = styled(Row)`
  position: absolute;
  height: 25vh;
  /* height: 59vh; */
  bottom: 4vh;
  width: 37vw;
  right: 4vw;
  background-image: linear-gradient(
    rgba(255, 120, 0, 0.7),
    rgba(255, 0, 0, 0.7)
  );
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 5;
`
const AboutRowDesk = styled(Row)`
  width: 100%;
  height: 10vh;
`

export default Home
