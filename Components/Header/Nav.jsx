import React , {useState} from "react"
import styled from "styled-components";
import {FiMenu} from "react-icons/fi";

function Nav() {
  const [home , setHome] = useState(false);
  const [services , setServices] = useState(false);
  const [about , setAbout] = useState(false);
  const [request , setRequest] = useState(false);
  const [showMenu,setShowMenu] = useState(false);
  return (
    <NavLayout>
      <Menu onClick={() => setShowMenu(!showMenu)}>
        <FiMenu/>
      </Menu>
      <div className={`boxMenu ${showMenu ? "showBoxMenu" : ""}`}>
        <Keeper onMouseOver={() => setHome (true)} onMouseOut={() => setHome (false)}>
          <div>خانه</div>
          <div className={`hide ${home ? "show" : ""}`}>
                  <a href="#">خانه 1</a>
                  <a href="#">خانه 2</a>
                  <a href="#">خانه 3</a>
          </div>
        </Keeper>
        <Keeper onMouseOver={() => setServices (true)} onMouseOut={() => setServices (false)}>
          <div>خدمات</div>
          <div className={`hide ${services ? "show" : ""}`}>
                  <a href="#">خدمات 1</a>
                  <a href="#">خدمات 2</a>
                  <a href="#">خدمات 3</a>
          </div>
        </Keeper>
        <Keeper onMouseOver={() => setAbout (true)} onMouseOut={() => setAbout (false)}>
          <div>درباره ما</div>
          <div className={`hide ${about ? "show" : ""}`}>
                  <a href="#">درباره ما 1</a>
                  <a href="#">درباره ما 2</a>
                  <a href="#">درباره ما 3</a>
          </div>
        </Keeper>
        <Keeper onMouseOver={() => setRequest (true)} onMouseOut={() => setRequest (false)}>
          <div>درخواست</div>
          <div className={`hide ${request ? "show" : ""}`}>
                  <a href="#">درخواست 1</a>
                  <a href="#">درخواست 2</a>
                  <a href="#">درخواست 3</a>
          </div>
        </Keeper>
      </div>
    </NavLayout>
  )
}

export default Nav;

const NavLayout = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  direction: rtl;
  padding-right: 2.5rem;
  row-gap: 1rem;
  align-items: center;

  .boxMenu{
    width: 100%;
    height: 6rem;
    display: flex;
    column-gap: 2rem;
    justify-content: start;
    align-items: center;
  }
  @media only screen and (max-width: 700px) {
    padding: 0.5rem 0 0.5rem 0;
    .boxMenu{
      padding-top: 1rem;
      height: auto;
      flex-direction: column;
      display: none;
    }
    .showBoxMenu{
      display: flex;
      justify-content: start;
      align-items: center;
      
    }
  }
`;

const Keeper = styled.div`
    width: 5rem;
    height: auto;
    background-color: transparent;
    z-index: 88;
    :hover{
      margin-top: 13rem;
    }
    div:nth-child(1){
      cursor: pointer;
      text-align: center;
      ::before{
        content :"▼";
        font-size:0.6rem;
        margin-left:0.5rem;
      }
      :hover{
        color: rgb(232, 68, 68);
        transition: all 0.5s ease;
      }
    }
    .hide{
        width: 12rem;
        height: auto;
        padding: 2rem;
        margin-top: 2rem;
        display: none;
        background-color: white;
        box-shadow: 0.25rem 0.5rem 1rem 0.25rem rgb(0 0 0 / 10%);
    }
    .show{
      display: grid;
      row-gap: 2rem;
    }
    a{
      color: gray;
      ::before{
        content: "☉";
        font-weight: bold;
        font-size: 0.75rem;
        margin-left: 0.5rem;
      }
      :hover{
        color: rgb(232, 68, 68);
        text-decoration: underline solid rgb(232, 68, 68) 1px;
      }
    }
    @media only screen and (max-width: 700px) {
      width: 90%;
      display: grid;
      padding-top: 1.5rem;
      justify-content: center;
      :hover{
        margin-top: 0;
      }
      div:nth-child(1){
        height: auto ; 
        margin-bottom: 1rem;
      }
      .hide{
        text-align: center;
        padding: 1rem 0;
        margin-top: 0;
        margin-bottom: 0.5rem;
        width: 20rem;
      }
    }
`;

const Menu = styled.div`
  width: 3.5rem;
  height: 2.6rem;
  border-radius: 0.25rem;
  padding-top: 0.25rem;
  margin-right: 2rem;
  border: 1px solid rgb(212, 212, 212);
  color: rgb(131, 131, 131);
  display: none;
  cursor: pointer;
  *:nth-child(1){
    font-size: 2rem;
  }
  @media only screen and (max-width: 700px) {
    display: block;
    text-align: center;
  }
`