import React, {useState}from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";

function ActionBar() {
    const [searchStatus,setSearchStatus]=useState(false);
   
  return (
    <>
         <SearchForm 
            searchStatus={searchStatus} 
            setSearchStatus={setSearchStatus}
        />
        <Container>
            <img onClick={() => setSearchStatus(!searchStatus)} src="/search.svg"/>
            <div>Call Us Now: <span>123 456 5523</span></div>
            <div>info@Companyname.com</div>
        </Container>
       
    </>
  )
}

export default ActionBar;

const Container = styled.div`
    width: 100%;
    height: 3rem;
    background-color: rgb(48, 48, 50);
    display: flex;
    color: white;
    direction: rtl;
    align-items: center;
    padding: 0 4.5rem 0 4rem ;
    img{
        width: 1.2rem;
        height: 1.2rem;
        margin: 0.25rem 0 0.5rem 0;
        cursor: pointer;
    }
    span{
        color: rgb(232, 68, 68);
    }
    div{
        padding-right: 1rem;
        color: rgb(188, 188, 189);
        height: 1.5rem;
        margin-right: 2rem;
        padding-top: 0.25rem;
        border-right: 1px solid white;
        cursor: pointer;
    }
    @media only screen and (max-width: 700px) {
       width: 100%;
       height: 5rem;
       flex-wrap: wrap-reverse;
       justify-content: center;
        div{
            border: none;
        }
    }
`;