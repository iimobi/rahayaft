import React from "react";
import styled from "styled-components";

function SearchForm({ searchStatus, setSearchStatus }) {
  return (
    <SLayout>
      <div className={`search ${searchStatus ? "active-search" : ""} `}>
        <img
          onClick={() => setSearchStatus(!searchStatus)}
          src={searchStatus ? "/close.svg" : "/closeActive.svg"}
        />
        <h1>جستجو کنید</h1>
        <input type="text" required placeholder="متن را وارد کنید" />
      </div>
    </SLayout>
  );
}

export default SearchForm;

const SLayout = styled.div`
  position: relative;
  z-index: 9999;
  .search {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(48, 48, 50);
    color: white;
    z-index: 10;
    transform: translateY(-100%);
    transition: all 0.25s ease;
    direction: rtl;
    padding-right: 2.5rem;
    > * {
      margin-top: 1.5rem;
    }
    img {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      transform: rotate(-90deg);
      transition: all 0.5s ease;
    }
    img:hover {
      transform: rotate(90deg);
      transition: all 0.5s ease;
    }
    h1 {
      margin-top: 10rem;
    }
    h1,
    input {
      margin-right: 13%;
    }
    input {
      width: 70%;
      height: 7.5rem;
      background-color: rgb(48, 48, 50);
      border: 1px solid white;
      font-size: 1.5rem;
      padding-right: 1rem;
    }
    input:focus {
      color: white;
      border: 1px solid red;
    }
  }
  .active-search {
    transform: translateY(0%);
    opacity: 1;
  }
  @media only screen and (max-width: 700px) {
    padding-right: 0.25rem;
    h1,
    input {
      margin-left: 10rem;
    }
  }
`;
