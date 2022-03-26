import styled from "styled-components"
import InputMask from "react-input-mask";
import { Colors } from "../colors/colors";

export const MainTitle = styled.h1`
    text-align: center;
    font-size: 60px;
    color: white;
    margin: 20px;
    background: linear-gradient(to right, ${Colors.SoftViolet} 20%, ${Colors.LimeGreen} 40%, ${Colors.LimeGreen} 60%, ${Colors.SoftViolet} 80%);
    background-size: 200% auto;  
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 1.5s linear infinite;

    @keyframes shine {
        to {
        background-position: 200% center;
        }
    }

    @media (max-width: 1290px) {
        font-size: 50px;
    }

    @media (max-width: 600px) {
        font-size: 40px;
    } 
`

export const Title = styled.h2`
    text-align: center;
    font-size: 50px;
    margin: 20px;
    margin-left: 70px;
    margin-right: 70px;
    word-break: break-all;
    background: linear-gradient(45deg, yellow 20%, ${Colors.LightPink} 50%, ${Colors.SoftRed} 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: changeSize 1.5s linear infinite;

    @keyframes changeSize {
        0% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
        100% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }

    @media (max-width: 1290px) {
        font-size: 40px;
    }

    @media (max-width: 600px) {
        font-size: 30px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 460px;
    border: 4px solid transparent;
    border-radius: 10px;
    margin: 20px;
    background-color: ${Colors.DarkDesaturatedBlue};
    border-image: linear-gradient(${Colors.DarkBlue} , ${Colors.VividBlue});
    border-image-slice: 1;

    @media (max-width: 600px) {
        width: auto;
    }
`

export const Container = styled.div`
    background-color: ${Colors.VeryDarkBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 6px solid gray;
    border-radius: 20px;
    margin: 20px;
    max-width: 1400px;
`

export const Text = styled.p`
    font-size: 34px;
    margin-bottom: 20px;
    color: ${Colors.PureCyanLimeGreen};
    margin-left: 20px;
    margin-right: 20px;

    @media (max-width: 600px) {
        font-size: 24px;
    }
`

export const InputMaskContainer = styled(InputMask)`
    width: 90%;
    height: 40px; 
    font-size: 25px; 
    border-radius: 40px; 
    padding-left: 10px; 
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    align-self: center;

    @media (max-width: 600px) {
        height: 30px;
        font-size: 20px;
    }
`

export const Input = styled.input`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    height: 40px;
    width: 90%;
    font-size: 25px;
    border-radius: 40px;
    padding-left: 10px;
    align-self: center;

    @media (max-width: 600px) {
        height: 30px;
        font-size: 20px;
    }
`

export const Button = styled.button`
    width: 200px;
    height: 40px;
    margin: 20px;
    font-size: 25px;
    align-self: center;
    border: 1px solid gray;
    border-radius: 20px;
    align-items: center;
    cursor: pointer;
    display: flex;
	justify-content: center ;
    position: relative;
    color: ${Colors.White};
    background: ${Colors.VividBlue};
    z-index: 1; 
    overflow: hidden;

    :hover {
        color: ${Colors.LightPink};
        text-decoration: none;
    }

    ::after {
        content: "";
        background: ${Colors.DarkBlue};
        position: absolute;
        z-index: -1;
        display: block;
        transition: all 0.60s;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transform: scale(0, 0);
        border-radius: 20px;
    }

    :hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.60s;
        transform: scale(1, 1);
    }

    @media (max-width: 600px) {
        height: 30px;
        font-size: 20px;
    }
`

export const Span = styled.span<{ mistake: boolean }>`
    color: ${(p) => p.mistake ? "red" : "green"};
    margin-bottom: 20px;
    font-size: 30px;
`

export const ButtonBack = styled.input`
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
  align-self: flex-end;
  background: transparent;
  color: ${Colors.White};

  :hover {
    background: ${Colors.LimeGreen};
    color: ${Colors.VeryDarkBlue};
  }
  transition: 0.5s;
  cursor: pointer;

  @media (max-width: 600px) {
      align-self: center;
  }
`