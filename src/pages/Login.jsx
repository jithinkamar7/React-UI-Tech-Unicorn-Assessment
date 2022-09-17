import React from 'react'
import styled from "styled-components";
import {mobile} from "../responsive";
import {tab} from "../responsive";
import Navbar from "../components/Navbar";

const Container = styled.div`


  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(26, 141, 4, 0.555),
      rgba(6, 141, 4, 0.555)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 25%;
  padding: 20px;
  background-color: #222629;
  border-radius: 10px;
  color: #86c232;
  ${mobile({ width: "75%" })}
  ${tab({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 25px;
`;

const Button = styled.button`
  width: 100%;
  height: 6%;
  border: none;
  padding: 15px 20px;
  background-color: #86c232;
  border-radius: 25px;
  color: #000;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;

  &:hover {
    background-color: blueviolet;
    color: #fff;
    transform: scale(1);
    transition: all 0.5s;}
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    
    <Container>
      <Navbar/>
      <Wrapper>
      
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;