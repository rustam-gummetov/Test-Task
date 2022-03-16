import React from 'react'
import styled from 'styled-components'
import { NextRouter, useRouter } from 'next/router'

interface Operator {
  operator: {
    name: string;
    pictureURL: string;
  }
}

const DrawOperator = ({ operator }: Operator) => {

  const router: NextRouter = useRouter();

  return (
    <ImageContainer onClick={() => router.push("/pay/" + operator?.name)} key={operator?.name}>
      <Img
        src={operator?.pictureURL}
      />
    </ImageContainer>
  )
}
export default DrawOperator;

const ImageContainer = styled.div`
  width: 350px;
  height: 140px;
  margin: 20px;
  border: 5px solid silver;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  @media (max-width: 840px) {
    width: 300px;
    height: 120px;
  }

  @media (max-width: 740px) {
    width: 250px;
    height: 100px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  :hover {
    opacity: 0.6;
  }
  transition: 0.5s;
`