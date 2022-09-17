// import {styled} from '@emotion/styled/types/base'
import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NavbarLogin from "../components/NavbarLogin";
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
//import styled from 'styled-components';



const Home = () => {
  return (
    <div style={{backgroundColor: ""}}>
        
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
        <Announcement/>
    </div>
  )
}

export default Home