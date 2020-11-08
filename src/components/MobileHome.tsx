import React, { FC } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons"
import { Col, Row, Space } from "antd"
import { motion } from "framer-motion"

import SEO from "./seo"
import MediaImage from "./MediaImage"

type MobileHomeType = {
  profileImg: any
  linkedIn: any
  github: any
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const MobileHome: FC<MobileHomeType> = ({
  profileImg,
  linkedIn,
  github,
  isOpen,
  setIsOpen,
}) => {
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
    <BackgroundImageStyled fluid={profileImg}>
      <SEO title="Home" />
      <Card>
        <CardContent>
          <Row>
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
          </Row>
          <About
            animate={isOpen ? "open" : "close"}
            variants={aboutVariants}
            transition={{ duration: 0.5 }}
          >
            I am a full stack web developer with 5+ years of experience in
            developing high preferment and user friendly web and mobile
            applications.
          </About>
          <MediaHolder>
            <Space size={50}>
              <MediaIcon image={linkedIn} iconOf="linkedIn" />
              <MediaIcon image={github} iconOf="github" />
            </Space>
          </MediaHolder>
        </CardContent>
      </Card>
    </BackgroundImageStyled>
  )
}

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
const Name = styled.p`
  padding-top: 10px;
  padding-left: 13px;
  font-size: 5vw;
  font-family: "Rubik", sans-serif;
  color: white;
  margin: 0px;
`

const IconCol = styled(Col)`
  text-align: right;
  padding-right: 10px;
  padding-top: 2px;
`

const UpIcon = styled(UpCircleOutlined)`
  font-size: 3vw;
`

const DownIcon = styled(DownCircleOutlined)`
  font-size: 4vw;
`

const Occupation = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 3vw;
  color: white;
  padding-left: 14px;
`

const About = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 4vw;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
`

const MediaHolder = styled.div`
  display: flex;
  justify-content: center;
`

const MediaIcon = styled(MediaImage)`
  border-radius: 50%;
`
export default MobileHome
