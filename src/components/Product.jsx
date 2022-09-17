import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined   } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #60892fa9;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
  border-radius: 4px;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
    
  }
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #86c232;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  border-radius: 100px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #86c232;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #fff;
    transform: scale(1.5);
    
    transition: all 0.5s;
    border-radius: 30px;
    //box-shadow: 0 5px 5px #86c232;
  }
`;

const Product = ({item}) => {
  return (
    <Container style={{backgroundColor: "#222629"}}>
        <Circle></Circle>
        <Image src={item.img} alt={item.name}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
        
    </Container>
  )
}

export default Product