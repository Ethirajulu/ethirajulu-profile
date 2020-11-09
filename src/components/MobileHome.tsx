import React, { FC } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons"
import { Space } from "antd"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

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
  const {
    site: { siteMetadata },
  } = useStaticQuery(homeQuery)

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
      <Card>
        <Details>
          <Name>{siteMetadata.name}</Name>
          <Occupation>{siteMetadata.occupation}</Occupation>
          <Description
            animate={isOpen ? "open" : "close"}
            variants={aboutVariants}
            transition={{ duration: 0.5 }}
          >
            {siteMetadata.description}
          </Description>
        </Details>
        {!isOpen ? (
          <UpIcon onClick={() => setIsOpen(true)} />
        ) : (
          <DownIcon onClick={() => setIsOpen(false)} />
        )}
        <MediaHolder>
          <Space size={50}>
            <MediaIcon image={linkedIn} iconOf="linkedIn" />
            <MediaIcon image={github} iconOf="github" />
          </Space>
        </MediaHolder>
      </Card>
    </BackgroundImageStyled>
  )
}

const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        occupation
        description
      }
    }
  }
`

const BackgroundImageStyled = styled(BackgroundImage)`
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: flex-end;
  grid-template-columns: 10vw 1fr 10vw;
  grid-template-rows: 1fr 5vh;
`

const Card = styled.div`
  width: 100%;
  height: fit-content;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-image: linear-gradient(
    rgba(255, 120, 0, 1),
    rgba(255, 0, 0, 0.71)
  );
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 1fr 35px;
  grid-template-rows: 1fr 45px;
`

const Details = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`
const Name = styled.p`
  padding-top: 8px;
  padding-left: 10px;
  font-size: 5vw;
  font-family: "Rubik", sans-serif;
  color: white;
  margin: 0px;
`

const Occupation = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 3vw;
  color: white;
  padding-left: 12px;
`

const Description = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 4vw;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
`

const UpIcon = styled(UpCircleOutlined)`
  font-size: 15px;
  grid-column: 2 /3;
  grid-row: 1 / 2;
  padding: 9px;
  justify-self: end;
  height: fit-content;
`

const DownIcon = styled(DownCircleOutlined)`
  font-size: 17px;
  grid-column: 2 /3;
  grid-row: 1 / 2;
  padding: 9px;
  justify-self: end;
  height: fit-content;
`
const MediaHolder = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  justify-self: center;
  padding-bottom: 10px;
`

const MediaIcon = styled(MediaImage)`
  border-radius: 50%;
`

export default MobileHome
