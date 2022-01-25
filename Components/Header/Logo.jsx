import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <LogoBox>
        
    </LogoBox>
  )
}

export default Logo;

const LogoBox = styled.div`
    position: absolute;
    z-index: 99;
    top: 0;
    left: 12%;
    width: 14rem;
    height: 11rem;
    background-color: white;
    box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 10%);
    transition: all 0.5s ease;
    @media only screen and (max-width: 920px) {
        width: 7rem;
        height: 6rem;
        box-shadow: none;
        top: 3rem;
        left: 5%;
        background-color: rgb(211, 210, 210);
        transition: all 0.5s ease;
    }
    @media only screen and (max-width: 700px){
        width: 5rem;
        height: 3.6rem;
        top: 5rem;
        left: 3rem;
        transition: none;
    }
   
`;