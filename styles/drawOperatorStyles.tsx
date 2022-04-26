import styled from "styled-components"

export const ImageContainer = styled.div`
  width: 350px;
  height: 140px;
  margin: 20px;
  border: 5px solid silver;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 840px) {
    width: 300px;
    height: 120px;
  }

  @media (max-width: 740px) {
    width: 250px;
    height: 100px;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  :hover {
    opacity: 0.6;
  }
  transition: 0.5s;
`