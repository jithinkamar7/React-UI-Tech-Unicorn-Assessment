
import React from 'react'
import styled from 'styled-components'
import NavbarLogin from "../components/NavbarLogin";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import {tab} from "../responsive";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}

`;
const Option = styled.option``;

const Pagination = styled.div`
    width: 50px;
    height: 50px;
    
    background-color: #61892f;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    top: 0;
    bottom: 0;
    margin: 10px 5px;
    margin-bottom: 25px;
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

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
`

const ProductList = () => {
  return (
    <Container >
      <NavbarLogin />
      
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>XXXL</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>Up to 25 USD</Option>
            <Option>25 to 50 USD</Option>
            <Option>25 to 50 USD</Option>
            <Option>150 to 350 USD</Option>
            <Option>350 to 700 USD</Option>
            <Option>700 USD & above</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (Low to High)</Option>
            <Option>Price (Hight to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/><Products/>
      <PageContainer>
        <Pagination>
          <h3>1</h3>
        </Pagination>
        <Pagination>
          <h3>2</h3> 
        </Pagination>
        <Pagination>
          <ArrowRightOutlined/>  
        </Pagination>
      </PageContainer>
      <NewsLetter />
      <Footer />
      <Announcement />
    </Container>
  )
}

export default ProductList