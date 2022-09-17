import styled from "styled-components";
import React from 'react'


const Container = styled.div`
    height: 30px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    
`

const Announcement = () => {
  return (
    <Container>
        © 2022, @jithinkamar7 - Tech Unicorn Assessment
    </Container>
  )
}

export default Announcement