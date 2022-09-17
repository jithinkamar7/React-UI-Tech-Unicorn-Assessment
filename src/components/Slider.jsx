import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {sliderItems} from "../data";
import {mobile} from "../responsive";
import {tab} from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow-x: hidden;
    ${mobile({ display: "none" })}
    ${tab({ display: "none" })}
    background-color: #222629 ;

`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #61892f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 1;
    z-index: 2;
    
    &:hover {
    background-color: #86c232;
    transform: scale(1.1);
    transition: all 0.5s;
    box-shadow: 0px 5px 5px #61892f;
  }
`

const Warpper = styled.div`
    height: 100%;
    display: flex;

    transition: all 1.5s;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100vh;  
    flex: 1;
     
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    
`
const Image = styled.img`
    height: 80%;
`

const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border-radius: 4px;
    background-color: transparent;
    border-color: #86c232;
    cursor: pointer;

    &:hover{
    background-color: transparent;
    transition: all 0.7s;
    border-radius: 30px;
    box-shadow: 0 5px 5px #86c232;
}
    
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Warpper slideIndex={slideIndex}>
            {sliderItems.map(item => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} alt=''/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Warpper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider