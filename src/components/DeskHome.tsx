import React, { FC } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons"
import MediaImage from "./MediaImage"
import { Space } from "antd"
import { motion } from "framer-motion"

type DeskHomeType = {
  profileImg: any
  linkedIn: any
  github: any
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const DeskHome: FC<DeskHomeType> = ({
  profileImg,
  linkedIn,
  github,
  isOpen,
  setIsOpen,
}) => {
  const descriptionVariants = {
    open: {
      height: "auto",
      opacity: 1,
    },
    close: {
      height: 0,
      opacity: 0,
    },
  }

  return (
    <Container>
      <Content>
        <PicGrid>
          <BackgroundImageStyled fluid={profileImg} />
        </PicGrid>
        <EmptyArea />
        <Card>
          <AboutContainer>
            <Name>ETHIRAJULU SUKUMAR</Name>
            <Occupation>Full stack developer, TN, India</Occupation>
            <Description
              animate={isOpen ? "open" : "close"}
              variants={descriptionVariants}
              transition={{ duration: 0.5 }}
            >
              I am a full stack web developer with 5+ years of experience in
              developing high preferment and user friendly web and mobile
              applications.
            </Description>
          </AboutContainer>
          {!isOpen ? (
            <UpIcon onClick={() => setIsOpen(true)} />
          ) : (
            <DownIcon onClick={() => setIsOpen(false)} />
          )}
          <MediaHolder>
            <Space size={27}>
              <MediaIcon image={linkedIn} iconOf="linkedIn" />
              <MediaIcon image={github} iconOf="github" />
            </Space>
          </MediaHolder>
        </Card>
      </Content>
    </Container>
  )
}

const BackgroundImageStyled = styled(BackgroundImage)`
  height: 100%;
`
const Container = styled.div`
  height: 100%;
  padding: 15vh 15vw 10vh 15vw;
`

const Content = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns:
    minmax(180px, 15vw) minmax(75px, 7vw) minmax(380px, 1fr)
    3vw;
  grid-template-rows: 3vh 2fr 6vh 6vh;
`

const PicGrid = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 5;
`

const EmptyArea = styled.div`
  grid-column: 3 / 5;
  grid-row: 2 / 3;
  background-color: #c4c4c4;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`

const Card = styled.div`
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  background-image: linear-gradient(
    rgba(255, 120, 0, 0.9),
    rgba(255, 0, 0, 0.71)
  );
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 5;
  height: fit-content;
  align-self: flex-end;
  display: grid;
  grid-template-columns: minmax(80px, 8vw) minmax(282px, 1fr) 80px;
  grid-template-rows: 0.5fr 0.3fr;
`

const AboutContainer = styled.div`
  grid-column: 2 / 3;
`

const Name = styled.p`
  padding-top: 5px;
  padding-left: 5px;
  font-size: 2vw;
  font-family: "Rubik", sans-serif;
  color: white;
  margin: 0px;
`

const Occupation = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1vw;
  color: white;
  padding-left: 7px;
`

const Description = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5vw;
  padding-left: 7px;
  color: white;
`

const MediaHolder = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  align-self: flex-end;
  padding-bottom: 25px;
`

const MediaIcon = styled(MediaImage)`
  border-radius: 25%;
`

const UpIcon = styled(UpCircleOutlined)`
  font-size: 16px;
  grid-column: 3 /4;
  grid-row: 1 / 2;
  padding: 15px;
  justify-self: end;
  height: fit-content;
`

const DownIcon = styled(DownCircleOutlined)`
  font-size: 18px;
  grid-column: 3 /4;
  grid-row: 1 / 2;
  padding: 15px;
  justify-self: end;
  height: fit-content;
`

export default DeskHome
