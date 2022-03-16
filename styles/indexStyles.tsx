import styled, { StyledComponent } from "styled-components"

export const Container = styled.div`
  background-color: #101229;
  width: 800px;
  height: auto;
  margin: 20px;
  border: 6px solid gray;
  border-radius: 20px;
  position: relative;

  @media (max-width: 840px){
    width: auto;
    margin: 20px;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 60px;
  color: white;
  margin-left: 20px;
  margin-right: 20px;
  background: linear-gradient(to left, #e48a40 20%, #d8db10 40%, #d8db10 60%, #e48a40 80%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 1.2s linear infinite;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);  
  }
  transition: 1s;
  
  @media (max-width: 840px) {
    font-size: 50px;
  }

  @media (max-width: 740px){
    font-size: 45px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  width: auto;
`

export const Button = styled.button`
  width: 350px;
  height: 140px;
  margin: 20px;
  font-size: 25px;
  border: 2px solid silver;
  border-radius: 50px;
  font-size: 30px;
  :hover {
    text-shadow: 
    0px 1px 0px #b2a98f,
    0px 3px 10px rgba(0,0,0,0.15),
    0px 5px 2px rgba(0,0,0,0.1),
    0px 7px 30px rgba(0,0,0,0.1);
  }
  cursor: pointer;

  @media (max-width: 840px) {
    width: 300px;
    height: 120px;
  }

  @media (max-width: 740px) {
    width: 250px;
    height: 100px;
  }
`