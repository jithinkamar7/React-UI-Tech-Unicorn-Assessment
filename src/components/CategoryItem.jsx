import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";
import {tab} from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    border-radius: 4px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const Info = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

 const Button = styled.button`
     border: none;
     border-radius: 4px;
     padding: 10px;
     background-color: #86c232;
     color: #000;
     cursor: pointer;
     font-weight: 600;

     &:hover {
    background-color: blueviolet;
    color: #fff;
    transform: scale(1);
    transition: all 0.5s;
  }
     
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now!</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem