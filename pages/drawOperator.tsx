import React from 'react'
import styled from 'styled-components'
import { NextRouter, useRouter } from 'next/router'
import { ImageContainer, Img } from '../styles/drawOperatorStyles'

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
        alt={operator?.name}
        src={operator?.pictureURL}
      />
    </ImageContainer>
  )
}
export default DrawOperator;