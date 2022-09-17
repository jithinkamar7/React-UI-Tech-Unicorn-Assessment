import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";
import {tab} from "../responsive";



const Container = styled.div`
width: 100%;
height: 60px;
z-index: 999;
position: sticky;
top: 0;
bottom: 0;
background-color: #222629;
color: #86c232;
//background: #222629;
${mobile({ height: "50px" })}

&:hover{
    background-color: #222629;

    transition: all 0.7s;
    border-radius: 30px;
    box-shadow: 0 5px 5px #86c232;
}


`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 10px"})}
    
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
    &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    transition: all 0.5s;
    color: #fff;
  }
`;

const SearchContainer = styled.div`
    border: 2px solid #86c232;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    color: #86c232;
    ${mobile({ display: "none" })}
    
    &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
    color: #fff;
    border: 2px solid #fff;
    background-color: #fff;
  }
`

const Input = styled.input`
    border: none;
    background: transparent;
    color: #fff;
    
    ${mobile({ width: "60px" })}

    ::placeholder {
        color: #86c232;
        opacity: 1;
    }
`

const Center = styled.div`
    flex:1;
    text-align: center;

`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    ${mobile({ fontSize: "18px" })};
    &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
    color: #fff;
  }
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 3, justifyContent: "center", marginTop:"5px" })};

`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;

    margin-left: 25px;
    ${mobile({ fontSize: "10px", marginLeft: "auto" })};
    

    &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    transition: all 0.5s;
    color: #fff;
  }
`

const NavbarLogin = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                
            </Left>
            
            <Center><Logo>DEALERZ.</Logo></Center>
            <Right>
                <SearchContainer>
                    <Input placeholder='Search' style={{padding:"3px", color:"#86c232"}}/>
                    <Search style={{color:"#86c232", fontSize:20, cursor:"pointer"}}/>
                </SearchContainer>
                <MenuItem>Orders/Returns</MenuItem>
                <MenuItem>@JithinKamar7</MenuItem>
                <MenuItem>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default NavbarLogin