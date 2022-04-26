import React from 'react'
import { ImageContainer, Img } from '../styles/drawOperatorStyles'
import Link from 'next/link';

interface Operator {
  name: string;
  pictureURL: string;
}

const DrawOperator = ({ name, pictureURL }: Operator) =>
(
  <Link href={"/pay/" + name}>
    <ImageContainer>
      <Img
        alt={name}
        src={pictureURL}
      />
    </ImageContainer>
  </Link>
)

export default DrawOperator;