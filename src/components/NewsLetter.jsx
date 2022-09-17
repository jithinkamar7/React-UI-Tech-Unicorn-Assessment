import React from 'react'
import { Send } from "@material-ui/icons";
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #86c232;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
    
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    color: #fff;
    display: flex;
    border-radius: 20px;
    border: 2px solid #000;
    justify-content: space-between;
    
    ${mobile({ width: "80%" })}
    &:hover{
    transition: all 0.5s;
    box-shadow: 3px 5px 5px #0707076a;

}

    
    
`
const Input = styled.input`
    border: 1px;
    flex: 8;
    padding-left: 20px;
    border-radius: 20px;
    //border: 1px solid #000;
    
`
const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    //border: 1px solid #000;

    
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your E-mail ID" />
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter