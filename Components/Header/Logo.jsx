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
    z-index: 999;
    top: 0;
    left: 4rem;
    width: 14rem;
    height: 11rem;
    background-color: white;
    box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 10%);
    @media only screen and (max-width: 900px) {
        width: 5rem;
        height: 4rem;
        box-shadow: none;
        top: 4rem;
        left: 1rem;
        background-color: rgb(211, 210, 210);
    }
    @media only screen and (max-width: 700px){
        top: 6rem;
    }
`;