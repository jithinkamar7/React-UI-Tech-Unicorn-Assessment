import React from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavbarLogin from "../components/NavbarLogin";
import NewsLetter from "../components/NewsLetter";
import {mobile} from "../responsive";
import {tab} from "../responsive";


const Container = styled.div`
  background-color: #222629;
  color: #fff;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  border-radius: 10px;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
  ${tab({ height: "40vh" })}

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
  ${tab({ padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: teal;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${tab({ width: "100%" })}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  //border: 1px solid white;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${tab({ width: "100%" })}

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;

  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid white;
  border-radius: 4px;
  background-color: #86c232;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: blueviolet;
    color: #fff;
    transform: scale(1);
    transition: all 0.7s;}
`;

const Product = () => {
  return (
    <Container>
      <NavbarLogin />
      
      <Wrapper>
        <ImgContainer>
          <Image src="../img/n5.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Shirt</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color :</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size :</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Small</FilterSizeOption>
                <FilterSizeOption>Medium</FilterSizeOption>
                <FilterSizeOption>Large</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
                <FilterSizeOption>XXXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
      <Announcement />
    </Container>
  );
};

export default Product;