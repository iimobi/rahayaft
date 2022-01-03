import React , {useState} from "react"
import styled from "styled-components";
س
function Nav() {

  return (
    <Keeper>
            <li>&#709; خانه</li>
            <li>&#709; خدمات</li>
           
            <li>&#709; درباره ما</li>
           
            <li>&#709; درخواست</li>
            
    
    </Keeper>
  )
}

export default Nav;

const Keeper = styled.ul`
    width: 100%;
    height: 7rem;
    color: rgb(48, 48, 50);
    direction: rtl;
    display: flex;
    margin-right: 2rem;
    align-items: center;
    padding-right: 3rem;
  
    li{
            margin-right: 2rem;
            font-weight: bold;
            font-size: 0.90rem;
            cursor: pointer;
    }
    li:hover{
        color:rgb(232, 68, 68);
    }
    li:nth-child(1){
        color:rgb(232, 68, 68);
    }

    .hide{
      opacity: 0;
    }
    .show{
      opacity: 1;
    }
    @media only screen and (max-width: 800px) {

    }
`;