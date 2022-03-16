import styled from "styled-components"

export const Container = styled.div`
    background-color: #101229;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 6px solid gray;
    border-radius: 20px;
    margin: 20px;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    color: white;
    margin: 20px;

    background: linear-gradient(to right, #7B68EE 20%, #FF7F50 40%, #FF7F50 60%, #7B68EE 80%);
    background-size: 200% auto;
     
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 2s linear infinite;
    @keyframes shine {
        to {
            background-position: 200% center;
        }
    }

    @media (max-width: 600px) {
        font-size: 40px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 460px;
    border: 4px solid green;
    border-radius: 10px;
    margin: 20px;
    background-color: #292e66;
    border-image: linear-gradient(#0B0E7F , #0B95DD);
    border-image-slice: 1;

    @media (max-width: 600px) {
        width: auto;
    }
`

export const Text = styled.p`
    font-size: 34px;
    margin-bottom: 20px;
    color: #00FA9A;
    margin-left: 20px;
    margin-right: 20px;

    @media (max-width: 600px) {
        font-size: 24px;
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
    padding: 10px;
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
	flex-wrap: wrap;
	justify-content: center ;

    position: relative;
    color: #fff;
    background: #0B95DD;
    z-index: 1; 
    overflow: hidden;

    :hover {
        color: #101229;
        text-decoration: none;
    }

    ::after {
        content: "";
        background: #FF7F50;
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transform: scale(0, 0);
        transition: all 0.60s;
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